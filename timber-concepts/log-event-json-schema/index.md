---
links:
  - title: Github Repo
    url: https://github.com/timberio/log-event-json-schema
---
[The Timber log event JSON schema](https://github.com/timberio/log-event-json-schema) describes the structure of all Timber logs through the [JSON schema specification](http://json-schema.org/). It formalizes this process, creating a contract around the structure, allowing downstream consumers to predictably and efficiently consume this data. It solves the brittle traditional nature of logs. To get started, we recommend exploring the various contexts and events. If you are unaware what contexts and events are, please read out [metadata, context, and events document](/docs/concepts/metadata-context-and-events).

## Schema

* [**`context`** - join data for your logs](/docs/concepts/log-json-schema/contexts)
  * [**`context.custom`**](/docs/concepts/log-json-schema/contexts/custom-context)
  * [**`context.http`**](/docs/concepts/log-json-schema/contexts/http-context)
  * [**`context.job`**](/docs/concepts/log-json-schema/contexts/job-context)
  * [**`context.release`**](/docs/concepts/log-json-schema/contexts/release-context)
  * [**`context.runtime`**](/docs/concepts/log-json-schema/contexts/runtime-context)
  * [**`context.system`**](/docs/concepts/log-json-schema/contexts/system-context)
  * [**`context.user`**](/docs/concepts/log-json-schema/contexts/user-context)
* [**`event`** - structured data for the log event itself](/docs/concepts/log-json-schema/events)
  * [**`event.controller_call`**](/docs/concepts/log-json-schema/events/controller-call-event)
  * [**`event.custom`**](/docs/concepts/log-json-schema/events/custom-event)
  * [**`event.error`**](/docs/concepts/log-json-schema/events/error-event)
  * [**`event.http_request`**](/docs/concepts/log-json-schema/events/http-request-event)
  * [**`event.http_response`**](/docs/concepts/log-json-schema/events/http-response-event)
  * [**`event.sql_query`**](/docs/concepts/log-json-schema/events/sql-query-event)


## Example JSON structure

```
{
  "dt": "2016-12-01T02:23:12.236543Z",           // Consistent ISO8601 dates with nanosecond precision
  "level": "info",                               // The level of the log
  "message": "POST /checkout for 192.321.22.21", // Human readable message
  "context": { ... },                            // Context (join) data shared across your logs
  "event": { ... }                               // Structured representation of this log event
}
```

---

### Related Docs

1. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
2. [**Timber libraries**](/docs/languages)
