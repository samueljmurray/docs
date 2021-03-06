---
items_append:
  - component: Divider
  - custom.md
---
# JSON Schema Context

The [Timber log event JSON schema](https://github.com/timberio/log-event-json-schema) defines a [root level `context` key](https://github.com/timberio/log-event-json-schema/blob/master/schema.json#L41) the contains a JSON document. It represents the environment the log was written and is shared across your log lines. Think of it like log join data. It's incredibly powerful, allowing you related logs and perform tasks like [tailing users](/app/console/tail-a-user) or [tracing HTTP requests](/app/console/trace-http-requests). It's available sub-keys are:

## Example JSON structure

```json
{
  // ...
  "context": {
    "http": {
      "method": "GET",
      "path": "/checkout",
      "remote_addr": "123.456.789.10",
      "request_id": "abcd1234"
    },
    "user": {
      "id": 2,
      "name": "Ben Johnson",
      "email": "ben@johnson.com"
    }
  }
  // ...
}
```

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
