# Clearance

The [Timber for Ruby](https://github.com/timberio/timber-ruby) [Clearance](https://github.com/thoughtbot/clearance) integration adds user context to your application automatically. Making it easy to quickly diagnose and resolve user reported issues.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`context.user`](/concepts/log-event-json-schema/context/user-context)|

## What you can do

1. [Tail a user](/app/console/tail-a-user)

## Installation

If you're on Rails this is installed automatically. There is nothing you need to do. For everything else, please follow the [Rack installation instructions](/languages/ruby/integrations/rack). User context is captured through a simple middleware.

## Disable

Disabling this integration is accomplished by disabling the user context Rack middleware:

```ruby
# config/initializers/timber.rb
Timber.config.integrations.rack.user_context.disable = true
```

---

### Other Related docs

1. [**Metadata, context, and events**](/concepts/metadata-context-and-events)
2. [**The Timber Log JSON Schema**](/concepts/log-event-json-schema)
3. [**Structuring through augmentation**](/concepts/structuring-through-augmentation)
