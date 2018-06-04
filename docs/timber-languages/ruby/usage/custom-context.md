Custom contexts allow you to extend beyond contexts already defined in
the [`Timber::Contexts`](http://www.rubydoc.info/github/timberio/timber-ruby/Timber/context) namespace. If you aren't sure what context is, please read the ["Metdata, Context, and Events" doc](/concepts/metadata-context-and-events). The [How it works](#how-it-works) section below also expands on this concept.


## How to use it

```ruby
Timber.with_context(build: {version: "1.0.0"}) do
  logger.info("My log message")
end
```

1. [Search it](/app/console/searching) with queries like: `build.version:1.0.0`
2. [View this context when viewing a log's metadata](/app/console/view-metdata-and-context)


## How it works

Context represents the current environment when the log was written. It's extremely powerful and introduces a missing gap with standard Ruby logging. In essence, it's join data for your logs, allowing you relate logs together without complicated regex searches. It's how Timber is able to provide features like [tailing a user](/app/console/tail-a-user) and [tracing a request](/app/console/trace-http-requests).

When your logs are received by the Timber service, they'll have the context included. The resulting JSON document for an example log will look like:

```json
{
  "message": "My log message",
  "level": "info",
  "context": {
    "custom": {
      "build": {
        "version": "1.0.0"
      }
    }
  }
}
```

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Your application's dynamic schema**](/concepts/application-schema)
3. [**Service Limits**](/concepts/service-limits)
