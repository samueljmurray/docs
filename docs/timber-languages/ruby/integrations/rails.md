The [Timber for Ruby](https://github.com/timberio/timber-ruby) [Rails](http://rubyonrails.org/) integration [enhances and augments](/concepts/structuring-through-augmentation) your Rails logs automatically.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`event.controller_call`](/concepts/log-event-json-schema/events/controller-call-event)|
|<i>+</i>[`event.http_request`](/concepts/log-event-json-schema/events/http-request-event)|
|<i>+</i>[`event.http_response`](/concepts/log-event-json-schema/events/http-response-event)|
|<i>+</i>[`event.template_render`](/concepts/log-event-json-schema/events/template-render-event)|

## What you can do

1. [Trace HTTP requests](/app/console-log-viewer/trace-http-requests)
2. [Inspect HTTP requests & their parameters](/app/console-log-viewer/inspect-http-requests)
3. [Tail a user](/app/console-log-viewer/tail-a-user)
4. [Inspect Rails logs and view their associated metadata](/app/console-log-viewer/view-metadata-and-context)
5. [Search on Rails structured data](/app/console-log-viewer/searching)
6. [Alert on Rails structured data](/app/alerts)
7. [Graph & visualize Rails structured data](/app/graphs)

## Installation

This integration is installed automatically through the Timber `Railtie`. There is nothing manual you need to do beyond adding the `timber` gem in your `Gemfile`.

## Disable

Timber allows you to silence or disable this integration. The former silences the log entirely, where the latter reverts the log to it's original unstructured, pre-Timber format.

### Silencing

The following will completely silence the logs produced by this integration. In other words, the log lines will *not* appear in your logs:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.action_controller.silence = true
Timber.config.integrations.active_record.silence = true
Timber.config.integrations.action_view.silence = true
```

### Disable structured data

If you aren't familiar with how Timber structures data, please read the [structuring through augmentation document](/concepts/structuring-through-augmentation). This structuring can be disabled, reverting each integrations logs to it's original unstructured, pre-Timber format:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.action_controller.disable = true
Timber.config.integrations.active_record.disable = true
Timber.config.integrations.action_view.disable = true
```

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log JSON Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
