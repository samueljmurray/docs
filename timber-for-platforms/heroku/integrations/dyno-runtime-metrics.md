When you enable the [Heroku log runtime metrics feature](https://devcenter.heroku.com/articles/log-runtime-metrics) for your Heroku application you'll automatically get dyno resource usage samples. Timber classifies these as normalized events across all platforms. Specifically, you'll get:

|You'll Get|
|:------|
|<i>+</i>[Resource sample event](/timber-concepts/the-timber-log-event-schema/events/resource-sample-event)|


## How to use it

In your `shell` run this command:

```
heroku labs:enable log-runtime-metrics -a <app-name>
```


## How it works

By enabling this feature Heroku will begin to log CPU and memory sample events periodically. For example:

```
source=web.1 dyno=heroku.2808254.d97d0ea7-cf3d-411b-b453-d2943a50b456 sample#memory_total=21.00MB sample#memory_rss=21.22MB sample#memory_cache=0.00MB sample#memory_swap=0.00MB sample#memory_pgpgin=348836pages sample#memory_pgpgout=343403pages
```

Timber will recognize this event, parse it, and classify it as a [`resource_sample` event](/timber-concepts/the-timber-log-event-schema/events/resource-sample-event) with a `memory` sub-document.

```json
{
  "level": "debug",
  "message": "source=web.1 dyno=heroku.2808254.d97d0ea7-cf3d-411b-b453-d2943a50b456 sample#memory_total=21.00MB sample#memory_rss=21.22MB sample#memory_cache=0.00MB sample#memory_swap=0.00MB sample#memory_pgpgin=348836pages sample#memory_pgpgout=343403pages",
  "context": {
    "platform": {
      "heroku": {
        "dyno_type": "web",
        "dyno_id": 1,
        "source": "heroku"
      }
    },
    "system": {
      "hostname": "heroku.2808254.d97d0ea7-cf3d-411b-b453-d2943a50b456"
    }
  },
  "event": {
    "resource_sample": {
      "memory": {
        "cache_mb": 0.0,
        "pgpgin": 348836.0,
        "pgpgout": 343403.0,
        "rss_mb": 21.22,
        "swap_mb": 0.0,
        "total_mb": 21.0
      }
    }
  }
}
```

---

### Related Docs

* [**Configuration**](/timber-for-platforms/heroku/configuration)
* [**Metadata, context, and events**](/timber-concepts/metadata-context-and-events)
