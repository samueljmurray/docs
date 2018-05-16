---
title: Log JSON Schema - context.system
---
*Note: This context is automatically added to your logs through our [libraries](/timber-for-languages)*

The `system` context adds server / system related context to your logs.

## Example JSON Structure


```json
{
  "context": {
    "system": {
      "hostname": "server123.myhost.com",
      "ip": "123.34.32.123",
      "pid": "4576",
      "process_name": "rails/server"
    }
  }
}
```

## Field descriptions

Name | Type | Description
-----|------|------------
`context.system.hostname` | `string` | The system hostname identified by the `hostname` command.
`context.system.ip` | `string` | The IP of the machine the log was generated on.
`context.system.pid` | `integer` | The PID of the process the log was generated in.
`context.system.process_name` | `string` | The name of the process the log was generated in.


## Using this data

1. [Search it](/timber-app/console-log-viewer/searching) with queries like: `system.hostname:server123.myhost.com`
2. [Alert on it](/timber-app/console-log-viewer/alerts) with threshold based alerts
3. [Graph & visualize it](/timber-app/console-log-viewer/graphing)
4. [Access this data by viewing the log's metadata](/timber-app/console-log-viewer/view-metdata-and-context)

---

### Related Docs

1. [**Metadata, context, and events**](/timber-concepts/metadata-context-and-events)
2. [**Timber libraries**](/timber-for-languages)
