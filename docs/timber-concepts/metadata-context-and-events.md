---
title: Metadata, Context and Events
description: Every log line is represented as structured JSON.
---
Every log line stored in Timber is represented as a structured JSON document which is defined by our [log JSON schema](/concepts/log-event-json-schema). This offers 2 root level keys to hold your structured metadata: `context` and `event`, both of these are explained in more detail below. This structure sets the foundation for useful readable structured logging by decoupling the structured data from the message. Here's an example:

```json
{
  "dt": "2016-12-01T02:23:12.236543Z",
  "level": "info",
  "message": "POST /checkout for 192.321.22.21",
  "context": { ... },
  "event": { ... }
}
```


## Context

Context is like join data for your logs. It represents the environment at the time the log was written, allowing you relate logs and [search](/app/console-log-viewer/searching) them using this data. It's how Timber is able to provide features like [tailing a user](/app/console-log-viewer/tail-a-user) or [tracing a HTTP request](/app/console-log-viewer/trace-http-requests). Timber defines [common contexts](/concepts/log-event-json-schema/context) in it's [log JSON schema](/concepts/log-event-json-schema) but you can also define your own using [custom contexts](/concepts/log-event-json-schema/context/custom-context). Our [libraries](/languages) facilitate this process by automatically attaching context to your logs through its integrations and custom context API. Below is an example of a log line using context:

```json
{
  "dt": "2016-12-01T02:23:12.236543Z",
  "level": "info",
  "message": "POST /checkout for 192.321.22.21",
  "context": {
    "user": {
      "id": "abcd1234",
      "email": "hi@timber.io",
      "name": "Bronson McLumberjack"
    }
  }
}
```


## Events

Events are direct structured reprensentations of the log line in question. In it's most basic sense, your logs are a chronological representation of events happening in your application. Generally, each line represents an event, and an event contains structured data that describes itself. But as we all know, logs are not this clean. They are mix of actual events and messy debug statements. For this purpose, the `event` key in Timber is meant to represent those log lines that represent meaningful events in your application. The data contained in this key should be directly related to the log line in question, further describing the line in a structured way. Below is an example of an [`http_request` event](/concepts/log-event-json-schema/events/http-request-event):

```json
{
  "dt": "2016-12-01T02:23:12.236543Z",
  "level": "info",
  "message": "POST /checkout for 192.321.22.21",
  "event": {
    "http_request": {
      "method": "GET",
      "scheme": "https",
      "host": "timber.io",
      "path": "/checkout",
      "port": 443,
      "headers": {
        "content_length": 894,
        "content_type": "application/json", // <- Example of data that wasn't in the log line itself
        "remove_addr": "192.321.22.21",
        "request_id": "gy23fbty523",
        "user_agent": "Mozilla/3.0 (Win95; U)"
      }
    }
  }
}
```
