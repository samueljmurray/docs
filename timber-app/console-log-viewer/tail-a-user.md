*ⓘ This feature requires the use of [one of our libraries](/timber-for-langauges).*

Tailing a user allows you to filter the logs to a specific user. It uses [context](/timber-concepts/metadata-context-and-events), specifically the [`context.user` document](/timber-concepts/log-event-json-schema/context/user) to segment logs by a specific user.


## Steps

1. Issue any of the following queries: `user.id:1234`, `user.name:"Ben Johnson"`,
   or `user.email:hi@timber.io`.
2. Or, click the user tag that prefixes the line.


## Demo

![App - Tail a user](//images.contentful.com/h6vh38q7qvzk/xeNSQHY7DwsguSCcQswGe/0602f6b300140dc817cafd54b51ef02c/Screen_Recording_2017-08-12_at_12.49_PM.gif)

---

### Related docs

1. [**The Timber log JSON schema**](/timber-concepts/log-event-json-schema)
2. [**User context**](/timber-concepts/log-event-json-schema/context/user)
3. [**Metadata, context, & events**](/timber-concepts/metadata-context-and-events)
