# Custom Events

Custom events allow you to extend beyond events already defined in
the [`Timber.Events`](https://hexdocs.pm/timber/Timber.Events.html#content) namespace. If you aren't sure what an event is, please read the ["Metdata, Context, and Events" doc](/concepts/metadata-context-and-events).


## How to use it

```elixir
event_data = %{customer_id: "xiaus1934", amount: 1900, currency: "USD"}
Logger.info("Payment rejected", event: %{payment_rejected: event_data})
```

1. [Search it](/app/console/searching) with queries like: `type:payment_rejected` or `payment_rejected.amount:>100`
2. [Alert on it](/app/alerts) with threshold based alerts.
3. [Graph & visualize it](/app/graphs)
4. [View this event's data and context](/app/console/view-metadata-and-context)
5. [Facet on this event type](/app/console/faceting-your-logs)


## How it works

When this event is received by the Timber service we'll define a namespaced schema based on the event name. In this case, the namespace would be `payment_rejected`. The data structure of your log will look like:

```json
{
  "message": "Payment rejected",
  "level": "warn",
  "event": {
    "custom": {
      "payment_rejected": {
        "customer_id": "abcd1234",
        "amount": 100,
        "reason": "Card expired"
      }
    }
  }
}
```

---

### Related Docs

1. [**When to use custom events?**](/guides/when-to-use-custom-events)
2. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
3. [**Your application's dynamic schema**](/concepts/application-schema)
4. [**Service Limits**](/concepts/service-limits)
