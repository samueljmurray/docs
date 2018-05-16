---
title: Parsing & Special Fields
---
The Timber logstash output plugin intelligently transforms Logstash events to conform to the [Timber JSON schema](/concepts/log-event-json-schema). If you aren't familiar with our JSON schema and it's purpose, please read the [log JSON schema document](/concepts/log-event-json-schema). During this process Timber will look for certain fields to transform the event properly.

## How it works

To start, let's look at a default Logstash event structure:

```json
{
  "@timestamp": "2017-01-01T02:43:35.343665Z",
  "message": "Hello world",
  "host": "my.host.com",
  "additional_key": "additional_value"
}
```

Instead of blindly forwarding this to the Timber service, Timber transforms this event to conform to our [log JSON schema](/concepts/log-event-json-schema):

```json
{
  "$schema": "https://raw.githubusercontent.com/timberio/log-event-json-schema/v3.1.1/schema.json",
  "dt": "2017-01-01T02:43:35.343665Z",
  "message": "Hellow world",
  "context": {
    "system": {
      "hostname": "my.host.com"
    }
  },
  "meta": {
    "additional_key": "additional_value"
  }
}
```

Notice how Timber maps certain Logstash fields to our own [log JSON schema](/concepts/log-event-json-schema). In the next section we'll list these special fields and how you can take advantage of them.


## Special Logstash fields

If your Logstash event contains any of the following fields, Timber will map them automatically:

* `@timestamp` - Treated as the official log timestamp.
* `message` - Treated as the official log message.
* `host` - Set as `hostname` in the Timber [`system` context](/concepts/log-event-json-schema/context/system-context).
* `timber` - Additional Timber fields. This _must_ be a map and it _must_ conform to the [Timber JSON schema](https://github.com/timberio/log-event-json-schema).


## Using our libraries to capture additional fields

By using our [libraries](/languages) you can automatically enhance and augment your logs with application level context and metadata. This is captured within your application and included in your log messages. There is nothing additional you need to do with Logstash. If you install the Timber library it will work as expected.

## Setting Timber schema fields within Logstash

We've provided the `timber` field to faciliate this. This field _must_ be a map and it _must_ conform to the [Timber JSON schema](https://github.com/timberio/log-event-json-schema).

For example:

```json
{
  "@timestamp": "2017-01-01T02:43:35.343665Z",
  "message": "Hello world",
  "host": "my.host.com",
  "additional_key": "additional_value",
  "timber": {
    "$schema": "https://raw.githubusercontent.com/timberio/log-event-json-schema/v3.1.1/schema.json",
    "context": {
      "user": {
        "id": "abcd123"
      }
    }
  }
}
```

The above Logstash event will result in the following Timber event:

```json
{
  "$schema": "https://raw.githubusercontent.com/timberio/log-event-json-schema/v3.1.1/schema.json",
  "dt": "2017-01-01T02:43:35.343665Z",
  "message": "Hello world",
  "context": {
    "system": {
      "hostname": "my.host.com"
    },
    "user": {
      "id": "abcd123"
    }
  },
  "meta": {
    "additional_key": "additional_value"
  }
}
```

Keep in mind, the map in your `timber` key _must_ be valid Timber JSON.


## What happens to other fields?

As you'll notice in the above examples, other non-special fields will be moved to the `meta` field. This is a namespace for generic structured data, similar to how Kibana works by default. You can access and search them as you would in Kibana. For the above example: `additional_key:additional_value`.
