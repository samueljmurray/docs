If you're using [Heroku redis](https://www.heroku.com/redis), it will log various events in your log event stream. Timber recognizes these events, structures them, and classifies them as:

|You'll Get|
|:------|
|<i>+</i>[CPU, cache, and memory resource sample event](/docs/concepts/the-timber-log-event-schema/events/resource-sample-event)|


## How to use it

Simply add Heroku redis as an add-on to your app. If you're already using Heroku redis, there is nothing you need to do.


## How it works

1. For a comprehensive overview, please refer to the [Heroku redis metrics docs page](https://devcenter.heroku.com/articles/heroku-redis-metrics-logs) and the [Heroku redis log statements docs page](https://devcenter.heroku.com/articles/redis-logs-errors).
2. Timber will automatically recognize known Heroku Redis events and classify them appropriately, helping to structure and organizae your logs as to maximize their utility.

---

### Related Docs

* [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
