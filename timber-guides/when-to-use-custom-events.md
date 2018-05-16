Custom events are powerful additions to your log statements that increase their usability. This best practices guide walks you through how to create custom events that will boost your productivity with Timber. If you need a refresher on Timber's "event" concept, you can check out our ["Metadata, Context, and Events"](/timber-concepts/metadata-context-and-events#events) document.

If you think of your application, you probably have plenty of events that occur. At Timber, we think in terms of "business" and "operational" events. Business events directly relate to what your application means to users, and operational events relate to how the application delivers features.

Here are some examples of business events:

- Video uploaded
- Order placed
- Comment moderated
- Vacation time approved

And, here are some examples of operational events:

- Temporary file deleted
- Cache invalidated
- Synchronization completed

You've probably started thinking of events in your own application based on this list. Now, think about the data that surrounds those events:

- What file format is the uploaded video?
- What is the ID of the order?
- What was the path of the deleted temporary file?
- What cache key was invalidated?

In Timber, events are a combination of a name and metadata. A good name represents what has happened: `temp_file_deleted`. The metadata contains information relevant to the event, like `file_path`. The name and metadata will become searchable in Timber.

When you create a custom event, think of what action is happening and what data points you want to search and report on. Think about ways you might filter or graph data.

## Crossing Context

In some log statements, a data point may appear in both the event and the context. Remember: context links your log statements together regardless of the event. The event, on the other hand, contains information specific to a single statement. It's normal that data, especially IDs, crosses the boundary between both.

As an example, let's assume we're working on an human resources payroll system. The following is one of our log lines that we want to convert to a Timber custom event:

```
2017-12-19T13:01:21.010Z [info] Sakinah A. (#5412) scheduled off-cycle payroll run (#u9a076) for 2017-12-20 at 10:00 UTC for 'end of year bonuses'
```

In this case, we have a business event (`off_cycle_payroll_run_scheduled`) that was user initiated. The following properties are relevant to the event:

  - user ID of the user initiating the event (`5412`)
  - payroll run ID (`u9a076`)
  - payroll run's scheduled timestamp (`2017-12-20T10:00:00Z`)
  - off cycle reason (`"end of year bonuses"`)

Additionally, there are at least two contexts we can add to this log statement. First, we can add a [user context](/timber-concepts/log-event-json-schema/context/user-context) which is part of Timber's standard context set. That will include Sakinah's user ID. Second, we can add a custom "payroll run" context. This will include the payroll run's ID. Duplicating this data serves a specific purpose when we query it later.

With the user context, we can browse all of Sakinah's activity in the HR system over time with the query `user.id:5412`.

With the payroll run context, we can see what happened to that payroll run over time. The query `off_cycle_payroll_run_scheduled.payroll_run_id:u9a076` would only show us the event that scheduled the payroll run. The query `payroll_run.id:u9a076`, though, would show us every log statement related to that payroll run, including the event that scheduled it _and_ the event after it was successfully run.

Combining context with events results in extremely powerful querying capabilities.

---

## Related Documentation

* [Creating Custom Events in Elixir](/timber-for-languages/elixir/usage/custom-events)
* [Creating Custom Events in Ruby](/timber-for-languages/ruby/usage/custom-events)
