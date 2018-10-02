# User Context

*Note: This context is automatically added to your logs through our [libraries](/languages)*

The `user` context adds user level context data to your logs such as `id`, `name`, and `email`.


## Example JSON Structure

```json
{
  "context": {
    "user": {
      "id": "23",
      "name": "Ben Johnson",
      "email": "hi@timber.io"
    }
  }
}
```


## Field descriptions

Name | Type | Description
-----|------|------------
`context.user.id` | `string` | The unique identifier of the current user. `optional`, `max-length: 255`
`context.user.name` | `string` | The name of the current user. `optional`, `max-length: 255`
`context.user.email` | `string` | The email of the current user. `optional`, `max-length: 255`
`context.user.type` | `string` | The type of the current user. Helpful in the case of polymorphism. `optional`, `max-length: 255`
`context.user.meta` | `object` | Additional metadata about the user. `optional`


## Using this data

1. [Search it](/app/console/searching) with queries like: `user.id:123` or `has:user.id`
2. [Alert on it](/app/console/alerts) with threshold based alerts
3. [Graph & visualize it](/app/console/graphing)
4. [Access this data by viewing the log's metadata](/app/console/view-a-logs-metadata-context)

---

### Related Docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**Timber libraries**](/languages)
