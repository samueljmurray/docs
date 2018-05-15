If you're using [Heroku postgres](https://www.heroku.com/postgres) as your database, it will log various events in your log event stream. Timber recognizes these events, structures them, and classifies them as:

|You'll Get|
|:------|
|<i>+</i>[CPU, database, and memory resource sample event](/docs/concepts/the-timber-log-event-schema/events/resource-sample-event)|
|<i>+</i>[SQL query event](/docs/concepts/the-timber-log-event-schema/events/sql-query-event)|


## How to use it

Simply add Heroku postgres as an add-on to your app. If you're already using Heroku postgres, there is nothing you need to do.


## How it works

1. For a comprehensive overview, please refer to the [Heroku postgres metrics docs page](https://devcenter.heroku.com/articles/heroku-postgres-metrics-logs) and the [Heroku postgres log statements docs page](https://devcenter.heroku.com/articles/postgres-logs-errors).
2. Timber will automatically recognize known Postgres events and classify them appropriately, helping to structure and organizae your logs as to maximize their utility.
