The [Timber log event JSON schema](https://github.com/timberio/log-event-json-schema) defines a [root level `context` key](https://github.com/timberio/log-event-json-schema/blob/master/schema.json#L41) the contains a JSON document. It represents the environment the log was written and is shared across your log lines. Think of it like log join data. It's incredibly powerful, allowing you related logs and perform tasks like [tailing users](/docs/app/console/tail-a-user) or [tracing HTTP requests](/docs/app/console/trace-http-requests). It's available sub-keys are:

1. [**`context.custom`**](/docs/concepts/log-json-schema/contexts/custom-context)
2. [**`context.http`**](/docs/concepts/log-json-schema/contexts/http-context)
3. [**`context.job`**](/docs/concepts/log-json-schema/contexts/job-context)
4. [**`context.release`**](/docs/concepts/log-json-schema/contexts/release-context)
5. [**`context.runtime`**](/docs/concepts/log-json-schema/contexts/runtime-context)
6. [**`context.system`**](/docs/concepts/log-json-schema/contexts/system-context)
7. [**`context.user`**](/docs/concepts/log-json-schema/contexts/user-context)

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

1. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
2. [**Timber libraries**](/docs/languages)
