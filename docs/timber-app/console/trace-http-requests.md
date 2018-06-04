---
title: Trace HTTP Requests
---
# Trace HTTP Requests

*ⓘ this feature requires the use of [one of our libraries](/languages).*

Modern applications are highly concurrent, which makes understanding the logs exceptionally difficult. The HTTP request tracing feature allows you to segment your logs by request ID, making it easy to view logs for specific HTTP requests. It quickly cuts out the noise enabling you to see only events related to that request. It uses [context](/concepts/metadata-context-and-events), specifically the [HTTP context document](/concepts/log-event-json-schema/context/http), to segment logs.


## Steps

1. Issue the query `http.request_id:abcd1234` inserting your request id.
2. Or, click the request ID tag that prefixes the line.


## Demo

![App - Trace HTTP Requests](//images.contentful.com/h6vh38q7qvzk/4WxU7bAD5CiWAyCC6COGcY/e4879ab24a0a85cf5911897fa3723870/Screen_Recording_2017-08-12_at_01.08_PM.gif)

---

### Related docs

1. [**The Timber log JSON schema**](/concepts/log-event-json-schema)
2. [**HTTP context**](/concepts/log-event-json-schema/context/http)
3. [**Metadata, context, & events**](/concepts/metadata-context-and-events)
