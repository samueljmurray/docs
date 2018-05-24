Logging SQL queries can be useful but noisy. To reduce the volume of SQL queries, you can limit the queries logged to those that surpass your time threshold.


## How to use it

```elixir
config :timber, Timber.Integrations.EctoLogger,
  query_time_ms_threshold: 2_000 # 2 seconds
```

In the above example, only queries that exceed 2 seconds in execution time will be logged.

---

### Other Related docs

1. [**Metadata, context, & events**](/concepts/metadata-context-and-events)
2. [**SQL query event**](/concepts/log-event-json-schema/events/sql-query-event)
