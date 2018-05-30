*Note: Our [libraries](/languages) integrate with frameworks and libraries to log this event automatically.*

The `sql_query` event resresents a SQL query being issued from within your application.

## Example JSON Structure

This:

```
SELECT * FROM users (0.5ms)
```

Gets structured into:

```json
{
  "event": {
    "sql_query": {
      "sql": "SELECT * FROM users",
      "time_ms": 0.2
    }
  }
}
```


## Field descriptions

Name | Type | Description
-----|------|------------
`sql` | `string` | The raw SQL of the query. `required` `max-length: 5000`
`time_ms` | `number` | The time taken to execute the query in milliseconds. `required`


## Using this data

Example queries:

* Search: `sql_query.time_ms:>50`
* Only this event: `is:sql_query`

See our doc on [searching](/app/console-log-viewer/searching).

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
