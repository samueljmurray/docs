Every Heroku application sits behind the [Heroku router](https://devcenter.heroku.com/articles/http-routing). Each time the router receives a request and forward it onto your application it logs an event. Timber recognizes these events and parses them as:

|You'll Get|
|:------|
|<i>+</i>[HTTP response event](/timber-concepts/log-event-json-schema/events/http-response-event)|


## How to use it

There is nothing you need to do. Heroku logs these events automatically and Timber will parse and recognize them.


## How it works

A typical Heroku routing event will look something like:

```
at=info method=OPTIONS path="/log_lines?application_ids%5B%5D=34&query=&sort=dt.asc&dt_gt=2017-02-26T17%3A26%3A32.176Z&limit=100" host=api.timber.io request_id=6496008c-fa5d-4b32-a0ec-f6346297761e fwd="2605:6000:1520:c108:057c:4fc8:7406:25c5,162.158.69.20" dyno=web.1 connect=1ms service=1ms status=204 bytes=687
```

Timber will recognize this event and parse it into a [`http_response` event](/timber-concepts/log-event-json-schema/events/http-response-event) since the Heroku router logs this after the request has been completed. The event will look like:

```json
{
  "level": "info",
  "message": "at=info method=OPTIONS path=\"/log_lines?application_ids%5B%5D=34&query=&sort=dt.asc&dt_gt=2017-02-26T17%3A26%3A32.176Z&limit=100\" host=api.timber.io request_id=6496008c-fa5d-4b32-a0ec-f6346297761e fwd=\"2605:6000:1520:c108:057c:4fc8:7406:25c5,162.158.69.20\" dyno=web.1 connect=1ms service=1ms status=204 bytes=687",
  "context": {
    "http": {
      "method": "OPTIONS",
      "path": "/log_lines",
      "remote_addr": "2605:6000:1520:c108:057c:4fc8:7406:25c5",
      "request_id": "6496008c-fa5d-4b32-a0ec-f6346297761e"
    },
    "platform": {
      "heroku": {
        "dyno_type": "router",
        "source": "heroku"
      }
    }
  },
  "event": {
    "http_response": {
      "content_length": 687,
      "direction": "outgoing",
      "request_id": "6496008c-fa5d-4b32-a0ec-f6346297761e",
      "status": 204,
      "time_ms": 2.0
    }
  }
}
```

---

### Related Docs

* [**Metadata, context, and events**](/timber-concepts/metadata-context-and-events)
