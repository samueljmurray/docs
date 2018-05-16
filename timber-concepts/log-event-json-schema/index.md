---
sidebar_append:
  - component: Divider
  - title: Github Repo
    url: https://github.com/timberio/log-event-json-schema
---
[The Timber log event JSON schema](https://github.com/timberio/log-event-json-schema) describes the structure of all Timber logs through the [JSON schema specification](http://json-schema.org/). It formalizes this process, creating a contract around the structure, allowing downstream consumers to predictably and efficiently consume this data. It solves the brittle traditional nature of logs. To get started, we recommend exploring the various contexts and events. If you are unaware what contexts and events are, please read out [metadata, context, and events document](/timber-concepts/metadata-context-and-events).

## Schema

* [**`context`** - join data for your logs](context)
  * [**`context.custom`**](context/custom)
  * [**`context.http`**](context/http)
  * [**`context.job`**](context/job)
  * [**`context.release`**](context/release)
  * [**`context.runtime`**](context/runtime)
  * [**`context.system`**](context/system)
  * [**`context.user`**](context/user)
* [**`event`** - structured data for the log event itself](events)
  * [**`event.controller_call`**](events/controller-call)
  * [**`event.custom`**](events/custom)
  * [**`event.error`**](events/error)
  * [**`event.http_request`**](events/http-request)
  * [**`event.http_response`**](events/http-response)
  * [**`event.sql_query`**](events/sql-query)


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

1. [**Metadata, context, and events**](/timber-concepts/metadata-context-and-events)
2. [**Timber libraries**](/timber-for-languages)
