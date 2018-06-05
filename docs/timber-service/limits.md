---
description: Learn about some of the limits Timber imposes to protect from abuse.
---
# Limits

The Timber service imposes limits to protect from abuse and ensure working order of our system as a whole.

### What we do _not_ limit

1. Timber does _not_ limit users.
2. Timber does _not_ limit applications.
3. timber does _not_ limit hosts.


### Log ingestion limits

1. A maximum of `1mb` in size for a single request to the `[POST] logs.timber.io/frames` endpoint.
2. The cumulative byte size sum of all applications cannot exceed your organization's billing plan byte size limit.


### Log data limits

1. All type and validation limits as defined in our [log JSON schema](https://github.com/timberio/log-event-json-schema/blob/master/schema.json).
2. A maximum of `8192 bytes` is allowed for individual log messages.
3. A maximum of `64kb` for a single log line object. This includes the message and all fields.


### Application schema limits

If you aren't familiar with the applications within Timber and how Timber maintains it's schemaa, please read our [application schema document](/concepts/application-schema). Timber imposes the follow limits to _each_ application's schema:

1. A maximum of `300` fields in the `event.custom` namespace.
2. A maximum `50` fields in the `context.custom` namespace.
3. A maximum of `300` fields in the `meta` namespace.

### Alerts limits

1. A maximum of `100` alerts per application.

### Service limit increases

Customers can request a service limit increase by [contacting us](mailto:support@timber.io) and letting us know which limit they'd like increased.
