---
title: Metrics & Timings
---
Aggregates destroy details, events tell stories. With Timber, logging metrics and timings is simply [logging an event](/docs/languages/ruby/usage/custom-events). Timber is based on modern big-data principles and can aggregate inordinately large data sets in seconds. Logging events (raw data as it exists), gives you the flexibility in the future to segment and aggregate your data any way you see fit. This is superior to choosing specific paradigms before hand, when you are unsure how you'll need to use your data in the future.


## How to use it

Below is a contrived example of timing a background job:

```ruby
timer = Timber::Timer.start
# ... code to time ...
logger.info("Processed background job", background_job: {time_ms: timer})
```

And of course, `time_ms` can also take a `Float` or `Fixnum`:

```ruby
logger.info("Processed background job", background_job: {time_ms: 45.6})
```

Lastly, metrics aren't limited to timings. You can capture any metric you want:

```ruby
logger.info("Credit card charged", credit_card_charge: {amount: 123.23})
```

1. [Search it](/docs/app/console/searching) with queries like: `background_job.time_ms:>500`
2. [Alert on it](/docs/app/console/alerts) with threshold based alerts
3. [View this log's metadata in the console](/docs/app/console/view-metdata-and-context)

---

### Related Docs

1. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
2. [**Your application's dynamic schema**](/docs/concepts/application-schema)
3. [**Service limits**](/docs/concepts/service-limits)
