The [Timber for Elixir](https://github.com/timberio/timber-ruby) [Phoenix](http://phoenixframework.org/) integration structures and enhances your `Ecto` logs automatically.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Configuration**](#configuration)
5. [**Disable**](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`event.sql_query`](/concepts/log-event-json-schema/events/sql-query-event)|

## What you can do

1. [Find slow SQL queries by searching:](/app/console/searching) `sql_query.time_ms:>500`
2. [View SQL queries in the context of their HTTP request](/app/console/trace-http-requests)
3. [Inspect SQL queries and view their associated metadata](/app/console/view-metadata-and-context)
4. [Alert on Ecto structured data](/app/alerts)

## Installation

*⚠ It is highly recommend to use the [installer](/languages/elixir/installation), it will install this integration automatically.*

1. In your `config/config.exs` file add the Timber Ecto logger:

   ```elixir
   # config/config.exs
   config :my_app, MyApp.Repo,
     loggers: [{Timber.Integrations.EctoLogger, :log, []}]
  ```

## Configuration

Please see the [`Timber.Integrations.EctoLogger` docs](https://hexdocs.pm/timber/Timber.Integrations.EctoLogger.html#content) for advanced configuration options, such as [only logging slow queries](/languages/elixir/configuration/only-log-slow-ecto-queries).

## Disable

Disabling the `Ecto` integration is as simple as skipping or reversing the installation instructions above. In other words, do not provide the `:loggers` option above. In the rare event that you'd like to disable `Ecto` logging entirely, set `log` to `false`:

```elixir
# config/config.exs
config :my_app, MyApp.Repo,
  log: false
```

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
