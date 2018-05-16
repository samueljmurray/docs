---
title: Log Event JSON Schema - event.http_response
---
*Note: Our [libraries](/languages) integrate with frameworks and libraries to log this event automatically.*

The `http_response` event represnts the response of a HTTP request.

## Example JSON Structure

This:

```
Sent 200 in 52.2ms
```

Gets structured into:

```json
{
  "event": {
    "http_response": {
      "headers": {
        "content-type": "application/json",
        "x-request-id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
      },
      "status": 200,
      "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0",
      "time_ms": 52.2
    }
  }
}
```


### Field descriptions

Name | Type | Description
-----|------|------------
`headers` | `object` | An object containing raw header names and values. `optional`
`status` | `number` | The status code of the response. `required`
`request_id` | `string` | The unique ID for this outgoing request, useful for request tracing. `optional`, `max-length: 255`
`time_ms` | `number` | The time taken to respond to the request in milliseconds. `required`


### Using this data

Example queries:

* Search: `http_server_response.status:200`
* Only this event: `is:http_server_response`

See our doc on [searching](/app/console-log-viewer/searching).

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
