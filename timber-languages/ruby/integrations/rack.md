# Rack

The [Timber for Ruby](https://github.com/timberio/timber-ruby) [Rack](http://rubyonrails.org/) integration [enhances and augments](/concepts/structuring-through-augmentation) your Rack logs automatically.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured Data

|You'll Get|
|:------|
|<i>+</i>[`context.session`](/concepts/log-event-json-schema/context/session-context)|
|<i>+</i>[`context.user`](/concepts/log-event-json-schema/context/user-context)|
|<i>+</i>[`event.http_request`](/concepts/log-event-json-schema/events/http-request-event)|
|<i>+</i>[`event.http_response`](/concepts/log-event-json-schema/events/http-response-event)|

## What you can do

1. [Trace HTTP requests](/app/console/trace-http-requests)
2. [Inspect HTTP requests & their parameters](/app/console/inspect-http-requests)
3. [Tail a user](/app/console/tail-a-user)
4. [Inspect Rack logs and view their associated metadata](/app/console/view-metadata-and-context)
5. [Search on Rack structured data](/app/console/searching)
6. [Alert on Rack structured data](/app/alerts)
7. [Graph & visualize Rack structured data](/app/graphs)

## Installation

*⚠ If you are using Rails, this integration is installed automatically. There is nothing you need to do.*


1. In your `config.ru` file, insert the Timber middleware:

   ```ruby
   # config.ru
   Timber::Integrations::Rack.middlewares.each do |middleware|
     use middleware
   end
   ```

## Disable

Timber allows you to disable this integration entirely, reverting all `Rack` logs to their previous unstructured, pre-Timber format. Please note, it is *highly* recommended to avoid doing this as it provides the means to perform very useful actions, such as [tracing HTTP requests](/app/console/trace-http-requests). If you are attempting to reduce log data, please see the [optimizing data usage doc](/guides/optimizing-data-usage).

To disable this integration, simply set the following configuration flag:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.rack.disable = true
```

For finer grained control, you can disable each specific Rack integration like so:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.rack.error_event.disable = true
Timber.config.integrations.rack.http_context.disable = true
Timber.config.integrations.rack.http_events.disable = true
Timber.config.integrations.rack.session_context.disable = true
Timber.config.integrations.rack.user_context.disable = true
```

Each is described below:

1. `error_event` disables the structuring of exceptions. By disabling this integration exceptions will appear as multi-line raw text logs.
2. `http_context` disables setting the [`http` context](/concepts/log-event-json-schema/context/http-context). It is highly recommended to avoid this, as it provides the mens to perform very useful features, like [tracing HTTP requests](/app/console/trace-http-requests).
3. `http_event` disables the structuring of [`http_request`](/concepts/log-event-json-schema/events/http-request-event) and [`http_response`](/concepts/log-event-json-schema/events/http-response-event) events.
4. `session_context` disables setting the [`session` context](/concepts/log-event-json-schema/context/session-context).
5. `user_context` disables setting the [`user` context](/concepts/log-event-json-schema/context/user-context).

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log JSON Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
