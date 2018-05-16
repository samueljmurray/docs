Adjusting the log level in Elixir is not specific to Timber. Because Elixir ships with an excellent [Logger](https://hexdocs.pm/logger/Logger.html) module you'll simply adjust the level for that module:

```elixir
config :logger,
  level: :debug
```
