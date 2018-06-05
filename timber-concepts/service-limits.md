---
description: Learn about some of the limits Timber imposes to protect from abuse.
---
# Service Limits

The Timber service does impose limits to protect from abuse and ensure working order of our system as a whole.

## What we limit

1. Each application is limited to `200` custom event fields.
2. Each application is limited to `50` custom context fields.
3. Each application is limited to `50` alerts.
4. The maximum allowed log message byte size is `8192`.
5. Other log field limits can be found in our [log JSON schema](https://github.com/timberio/log-event-json-schema).


## What we do not limit

1. Users. Every organization can have an *unlimited* number of users.
2. Applications. Every organization can have an *unlimited* number of applications.
3. Daily volume limits. Timber does not enforce daily volume limits. Your cumulative monthly limit is based on your plan control your total volume.


## Service limit increases

You can request a service limit increase. Simply contact us using the chat box in the bottom right.
