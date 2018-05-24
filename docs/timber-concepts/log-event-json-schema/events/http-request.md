---
title: Log Event JSON Schema - event.http_request
---
*Note: Our [libraries](/languages) integrate with frameworks and libraries to log this event automatically.*

The `http_request` event is an event defined in our [log event JSON schema](/concepts/log-event-json-schema). It's a structured representation of HTTP request events in your logs.

## Example JSON Structure

This:

```
Started POST /applications
```

Gets structured into:

```json
{
  "message": "Started POST /application",
  "event": {
    "http_request": {
      "headers": {
        "content-type": "application/json",
        "x-request-id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
      },
      "host": "api.timber.io",
      "method": "POST",
      "path": "/applications",
      "port": 443,
      "query_string": null,
      "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0",
      "scheme": "https"
    }
  }
}
```


## Field descriptions

Name | Type | Description
-----|------|------------
`headers` | `object` | A object containing raw header names and values. `optional`
`host` | `string` | The host of the destination URL. `required`, `max-length: 255`
`method` | `string` | The method of the request normalized to uppercase, ex: `GET`, `POST`, etc. `required`
`path` | `string` | The path of the destination URL. `required`, `max-length: 5000`
`port` | `number` | The port of the destination URL. `optional`
`query_string` | `string` | The query string of the destination URL. `optional`, `max-length: 5000`
`request_id` | `string` | The unique ID for this outgoing request, useful for request tracing. `optional`, `max-length: 255`
`scheme` | `string` | The scheme of the destination URL, ex: `http` or `https`. `required`


## Using this data

Example queries:

* Search: `http_server_request.host:api.timber.io`
* Only this event: `is:http_server_request`

See our doc on [searching](/app/console-log-viewer/searching).

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
