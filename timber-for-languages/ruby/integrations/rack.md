The [Timber for Ruby](https://github.com/timberio/timber-ruby) [Rack](http://rubyonrails.org/) integration [enhances and augments](/docs/concepts/structuring-through-augmentation) your Rack logs automatically.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured Data

|You'll Get|
|:------|
|<i>+</i>[`context.session`](/docs/concepts/log-json-schema/contexts/session-context)|
|<i>+</i>[`context.user`](/docs/concepts/log-json-schema/contexts/user-context)|
|<i>+</i>[`event.http_request`](/docs/concepts/log-json-schema/events/http-request-event)|
|<i>+</i>[`event.http_response`](/docs/concepts/log-json-schema/events/http-response-event)|

## What you can do

1. [Trace HTTP requests](/docs/app/console/trace-http-requests)
2. [Inspect HTTP requests & their parameters](/docs/app/console/inspect-http-requests)
3. [Tail a user](/docs/app/console/tail-a-user)
4. [Inspect Rack logs and view their associated metadata](/docs/app/console/view-metadata-and-context)
5. [Search on Rack structured data](/docs/app/console/searching)
6. [Alert on Rack structured data](/docs/app/alerts)
7. [Graph & visualize Rack structured data](/docs/app/graphs)

## Installation

*⚠ If you are using Rails, this integration is installed automatically. There is nothing you need to do.*


1. In your `config.ru` file, insert the Timber middleware:

   ```ruby
   # config.ru
   Timber::Integrations::Rack.middlewares.each do |middleware|
     use middleware
   end
   ```

## Disable

Timber allows you to disable this integration entirely, reverting all `Rack` logs to their previous unstructured, pre-Timber format. Please note, it is *highly* recommended to avoid doing this as it provides the means to perform very useful actions, such as [tracing HTTP requests](/docs/app/console/trace-http-requests). If you are attempting to reduce log data, please see the [optimizing data usage doc](/docs/guides/optimizing-data-usage).

To disable this integration, simply set the following configuration flag:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.rack.disable = true
```

For finer grained control, you can disable each specific Rack integration like so:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.rack.error_event.disable = true
Timber.config.integrations.rack.http_context.disable = true
Timber.config.integrations.rack.http_events.disable = true
Timber.config.integrations.rack.session_context.disable = true
Timber.config.integrations.rack.user_context.disable = true
```

Each is described below:

1. `error_event` disables the structuring of exceptions. By disablign this integration exceptions will appear as multi-line raw text logs.
2. `http_context` disables setting the [`http` context](/docs/concepts/log-json-schema/contexts/http-context). It is highly recommended to avoid this, as it provides the mens to perform very useful features, like [tracing HTTP requests](/docs/app/console/trace-http-requests).
3. `http_event` disables the structuring of [`http_request`](/docs/concepts/log-json-schema/events/http-request-event) and [`http_response`](/docs/concepts/log-json-schema/events/http-response-event) events.
4. `session_context` disables setting the [`session` context](/docs/concepts/log-json-schema/contexts/session-context).
5. `user_context` disables setting the [`user` context](/docs/concepts/log-json-schema/contexts/user-context).

---

### Other Related docs

1. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
2. [**The Timber Log JSON Schema**](/docs/concepts/log-json-schema)
3. [**Structuring through augmentation**](/docs/concepts/structuring-through-augmentation)
