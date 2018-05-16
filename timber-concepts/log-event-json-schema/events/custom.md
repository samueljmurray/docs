---
title: Log JSON Schema - event.custom
---
*Note: Our [libraries](/languages) provide a simple API to log custom events.*

The `custom` event allows you to extend beyond the events [already provided by Timber](/concepts/log-event-json-schema/events) by providing your own custom events.


## Example JSON Structure

```json
{
  "context": {
    "event": {
      "payment_rejected": {
        "amount": 100,
        "customer_id": "abcd1234",
        "error_code": "4623"
      }
    }
  }
}
```

Notice the `payment_rejected` key. This is your event type. Each custom event is required to have a single root key that defines it's namespace. This ensures event attributes do not clash names and types.

## Using this data

1. [Search it](/app/console-log-viewer/searching) with queries like: `payment_rejected.customer_id:abcd1234` or `has:payment_rejected.customer_id`
2. [Alert on it](/app/console-log-viewer/alerts) with threshold based alerts
3. [Graph & visualize it](/app/console-log-viewer/graphing)
4. [View this data and context on the log line itself](/app/console-log-viewer/view-metdata-and-context)

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
