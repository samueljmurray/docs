# Capture User Context

Capturing `user context` is a powerful feature that allows you to associate logs with users in your application. This is great for support as you can [quickly narrow logs to a specific user](/app/console/tail-a-user), making it easy to identify user reported issues.


## How to use it

Simply add the `UserContext` immediately after you authenticate the user:

```elixir
%Timber.Contexts.UserContext{id: "my_user_id", name: "John Doe", email: "john@doe.com"}
|> Timber.add_context()
```

All of the `UserContext` attributes are optional, but at least one much be supplied.

---

### Other Related docs

1. [**Metadata, context, & events**](/concepts/metadata-context-and-events)
2. [**User context**](/concepts/log-event-json-schema/context/user)
