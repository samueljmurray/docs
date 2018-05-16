---
sidebar_append:
  - component: Divider
  - custom
---
The [Timber log event JSON schema](https://github.com/timberio/log-event-json-schema) defines a [root level `context` key](https://github.com/timberio/log-event-json-schema/blob/master/schema.json#L41) the contains a JSON document. It represents the environment the log was written and is shared across your log lines. Think of it like log join data. It's incredibly powerful, allowing you related logs and perform tasks like [tailing users](/timber-app/console-log-viewer/tail-a-user) or [tracing HTTP requests](/timber-app/console-log-viewer/trace-http-requests). It's available sub-keys are:

1. [**`context.custom`**](custom)
2. [**`context.http`**](http)
3. [**`context.release`**](release)
4. [**`context.system`**](system)
5. [**`context.user`**](user)

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

1. [**Metadata, context, and events**](/timber-concepts/metadata-context-and-events)
2. [**Timber libraries**](/timber-for-languages)
