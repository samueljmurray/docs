The [Timber for Elixir](https://github.com/timberio/timber-ruby) [Phoenix](http://phoenixframework.org/) integration structures and enhances your Phoenix logs automatically.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)


## Structured data

|You'll Get|
|:------|
|<i>+</i>[`context.http`](/concepts/log-event-json-schema/context/http-context)|
|<i>+</i>[`context.session`](/concepts/log-event-json-schema/context/http-context)|
|<i>+</i>[`event.http_request`](/concepts/log-event-json-schema/events/http-request-event)|
|<i>+</i>[`event.http_response`](/concepts/log-event-json-schema/events/http-response-event)|


## What you can do

1. [Trace HTTP requests](/app/console/trace-http-requests)
2. [Inspect HTTP requests & their parameters](/app/console/inspect-http-requests)
3. [Inspect Plug logs and view their associated metadata](/app/console/view-metadata-and-context)
4. [Search on Plug structured data](/app/console/searching)
5. [Alert on Plug structured data](/app/alerts)


## Installation

*⚠ It is highly recommend to use the [installer](/languages/elixir/installation), it will install this integration automatically.*

1. In your `endpoint.ex` file insert the Timber plugs:

   ```diff
   defmodule MyApp.Endpoint do
     # ...

   - plug Plug.Logger

     # ...

   + plug Timber.Integrations.SessionContextPlug
   + plug Timber.Integrations.HTTPContextPlug
   + plug Timber.Integrations.EventPlug

     # The Timber should come *directly* before your app's
     # Router plug
     plug MyApp.Router
   end
   ```

## Disable

Disabling the `Plug` integration is as simple as skipping or reversing the above installation instructions. In the rare event that you'd like to disable `Plug` logs entirely, simply remove the `plug Plug.Logger` in your `endpoint.ex` file.

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
