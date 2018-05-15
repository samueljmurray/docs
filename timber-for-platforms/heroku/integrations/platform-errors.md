Heroku logs various [platform errors](https://devcenter.heroku.com/articles/error-codes) in your log stream. Timber recognizes these events, parses them, structures them, and classifies them as errors. You'll get:

|You'll Get|
|:------|
|<i>+</i>[Error event](/docs/concepts/log-event-json-schema/events/error-event)|


## How to use it

There is nothing you need to do. Heroku logs these statements automatically and Timber will parse them automatically.


## How it works

For example, an `R14 Memory Quota Exceeded` error would be logged like this:

```
2011-05-03T17:40:11+00:00 heroku[worker.1]: Error R14 (Memory quota exceeded)
```

Without a logging system these errors would unknowingly happen. Timber reocgnizes these events and transforms them into [error events](). This makes it easy to report and alert on these events:

```json
{
  "level": "error",
  "message": "Error R14 (Memory quota exceeded)",
  "event": {
    "error": {
      "name": "R14 (Memory quota exceeded)"
    }
  }
}
```

---

### Related Docs

* [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
