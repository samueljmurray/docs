# Logging to Multiple Devices

The [Elixir `Logger`](https://hexdocs.pm/logger/Logger.html) includes [support for logging to multiple backends](https://hexdocs.pm/logger/Logger.html#module-backends). Logging to a file or `:stdout` in addition to Timber is simple:

## Logging to :stdout as well as Timber

Logging to `:stdout` uses the provided `:console` backend. You can read more about configuring the `:console` backend [here](https://hexdocs.pm/logger/Logger.html#module-console-backend).

```elixir
# config/config.exs

config :logger,
  backends: [Timber.LoggerBackends.HTTP, :console]
```

## Logging to a file as well as Timber

First, you'll need to add [`logger_file_backend`](https://hex.pm/packages/logger_file_backend) as a dependency in your `mix.exs` file. Then configure your logger like so:

```elixir
# config/config.exs

config :logger,
  backends: [Timber.LoggerBackends.HTTP, {LoggerFileBackend, :file_log}]

config :logger, :file_log,
  path: "/var/log/my_app/app.log"
```
