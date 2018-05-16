You may have HTTP routes in your application that you don't need logs for. When you use our Timber Elixir package, these logs are generated from two sources: the [Timber Event plug](https://hexdocs.pm/timber/Timber.Integrations.EventPlug.html#content) and the [Timber Phoenix instrumentation](https://hexdocs.pm/timber/Timber.Integrations.PhoenixInstrumenter.html).

Logs produced by the Event plug can be suppressed by only attaching the plug to certain Phoenix pipelines. The logs produced by the Phoenix integration can be suppressed by blacklisting specific controller and action pairs.

### Suppressing Plug-based Logs

The Event plug produces two log statements: one when the request is received and one when the response is sent.

The received statement looks like this:

```
Received GET /status
```

And the response statement looks like this:

```
Sent 200 response in 195µs
```

By default, the Timber package will install the Event plug in the endpoint for your Phoenix application. This activates logging for every connection. You can limit these log statements to certain Phoenix router scopes, though.

To start, remove the Event plug from the endpoint. Look for this line:

```elixir
plug Timber.Integrations.EventPlug
```

This will stop log statements from being output on every request. (You can leave the `Timber.Integrations.ContextPlug` and `Timber.Integrations.SessionPlug` if they're present.)

Next, in your Phoenix router, create a new pipeline to use for logging:

```elixir
pipeline :logging do
  plug Timber.Integrations.EventPlug
end
```

You can now call this pipeline in the scopes you want to log. The scopes that do not call the pipeline will not produce logs.

```elixir
scope "/checks", API do
  get "/health", HealthController, :status
end

scope "/", API do
  pipe_through [:logging, :accepts_json]

  resources "/blogs", BlogController, only: [:index, :show] do
    resources "/posts", PostController, only: [:index, :show]
  end
end

scope "/", API do
  pipe_through [:logging, :accepts_json, :authenticated]

  resources "/blogs", BlogController, except: [:index, :show] do
    resources "/posts", PostController, except: [:index, :show]
  end

  resources "/settings", UserSettingsController, singleton: true
end
```

In the above example, connections that are routed through the `/checks` scope will _not_ produce "Received"/"Sent" log statements. The remaining two scopes _will_ produce log statements.

As a side effect of this change, the _response time_ reported by log statements may be slightly lower than the actual time to fully handle a request. The timer is started when the Event plug is called during the request cycle. Since the plug has been moved deeper in the request cycle, it will not take into account the timing of logic prior to the plug.

### Suppressing Phoenix-based Logs

*This requires version 2.6 and higher of the Timber Elixir package*

The Phoenix integration produces log statements when a controller is called and when a template is rendered.

The controller call log statement looks like this:

```
Processing with MyApp.API.HealthController.status/2 Pipelines: []
```

The template render log statement looks like this:

```
Rendered "status.txt" in 0ms
```

In order to prevent these statements from being logged, you can add the controller and action pair to Timber's blacklist:

```elixir
config :timber, Timber.Integrations.PhoenixInstrumenter,
  controller_actions_blacklist: [
    {MyApp.API.HealthController, :status}
  ]
```

This suppresses the log statements for this pair regardless of the HTTP route used to reach the controller. So long as the controller and action match, no log statement will be produced.
