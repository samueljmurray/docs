---
title: Log JSON Schema - context.http
---
*Note: This context is automatically added to your logs through our [libraries](/languages)*

The `http` context adds HTTP data within the context of a HTTP request. Any log line written within a single HTTP request will share this context data.

## Example JSON Structure


```json
{
  "context": {
    "http": {
      "method": "GET",
      "path": "/welcome",
      "remote_addr": "123.34.32.123",
      "request_id": "2c3a0b24069af49b3de35b8e8c26765c1dba9ff0"
    }
  }
}
```

## Field descriptions

Name | Type | Description
-----|------|------------
`context.http.method` | `string` | The request method normalized to uppercase, ex: `GET`, `POST`, `PUT`, `DELETE`, etc. `required`
`context.http.path` | `string` | The request path. `required`, `max-length: 5000`
`context.http.remote_address` | `string` | The ipv4 or ipv6 address of the original requestor. `optional`
`context.http.request_id` | `string` | The unique ID of this request, useful for request tracing. `optional`, `max-length: 255`


## Using this data

1. [Search it](/app/console-log-viewer/searching) with queries like: `http.request_id:2c3a0b24069af49b3d` or `has:http.request_id`
2. [Alert on it](/app/console-log-viewer/alerts) with threshold based alerts
3. [Graph & visualize it](/app/console-log-viewer/graphing)
4. [Access this data by viewing the log's metadata](/app/console-log-viewer/view-metdata-and-context)

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
