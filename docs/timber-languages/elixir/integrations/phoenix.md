The [Timber for Elixir](https://github.com/timberio/timber-ruby) [Phoenix](http://phoenixframework.org/) integration structures and enhances your Phoenix logs automatically.

1. [Structured data](#structured-data)
2. [What you can do](#what-you-can-do)
3. [Installation](#installation)
4. [Disable](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`event.controller_call`](/concepts/log-event-json-schema/events/controller-call-event)|
|<i>+</i>[`event.template_render`](/concepts/log-event-json-schema/events/template-render-event)|

*Note: the [`event.http_request`](/concepts/log-event-json-schema/events/http-request-event) and [`event.http_response`](/concepts/log-event-json-schema/events/http-response-event) fields are added by the [`Plug` integration](/languages/elixir/integrations/plug).*


## What you can do with this data

1. [**Inspect HTTP requests & their parameters**](/app/console-log-viewer/inspect-http-requests)
2. [**Inspect Phoenix logs and view their associated metadata**](/app/console-log-viewer/view-metadata-and-context)
3. [**Search on Phoenix structured data**](/app/console-log-viewer/searching)
4. [**Alert on Phoenix structured data**](/app/alerts)


## Installation

*⚠ It is highly recommend to use the [installer](/languages/elixir/installation), it will install this integration automatically.*

1. In your `config/config.exs` file add the Timber instrumenter:

   ```elixir
   # config/config.exs
   config :my_app, MyApp.Endpoint,
     instrumenters: [Timber.Integrations.PhoenixInstrumenter]
   ```

2. In your `web.ex` file, disable the default `Phoenix.Controller` logging since Timber is now handling this:

   ```diff
   defmodule MyApp.Web do
     #...
     def controller do
       quote do
   -     use Phoenix.Controller
   +     use Phoenix.Controller, log: false
         # ...
       end
     end
     #...
   end
   ```

3. In your `web.ex` file, disable the default `Phoenix.Channel` logging since Timber is now handling this:

   ```diff
   defmodule MyApp.Web do
     #...
     def channel do
       quote do
   -     use Phoenix.Channel
   +     use Phoenix.Channel, log_join: false, log_handle_in: false
         # ...
       end
     end
     #...
   end
   ```


## Disable

Disabling the Phoenix integration is as simple as skipping or reversing the installation steps above. By skipping installation you'll continue to see Phoenix logs but in the original pre-Timber form. In the rare case that you'd like to disable Phoenix logs entirely, simply follow steps 2 and 3 in the [installation section](#installation), but skip step 1.

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
