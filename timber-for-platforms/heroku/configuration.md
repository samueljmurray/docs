Timber [integrates with a variety of Heroku systems](/docs/platforms/heroku/integrations), maximizing the utility of your Heroku logs. In order to take full advantage of these integrations, you must configure your app to enables these features:


## Capture Dyno CPU & Memory Usage

Through Heroku's [log runtime metrics feature](https://devcenter.heroku.com/articles/log-runtime-metrics) Timber can monitor the health of your dyno instances. To learn more, checkout our [dyno runtime metrics integration doc](/docs/platforms/heroku/integrations/dyno-runtime-metrics).

To enable, in your `shell` run this command:

```shell
heroku labs:enable log-runtime-metrics -a <app name>
```


## Capture Release & Deploy Context

*Note: You must be using [one of our libraries](/docs/languages) to make use of this data automatically.*

Through Heroku's [dyno metadata feature](https://devcenter.heroku.com/articles/dyno-metadata), Timber can automatically include release and deploy context in your logs. To learn more, checkout our [dyno metadata integration doc](/docs/platforms/heroku/integrations/dyno-metadata).

To enable, in your `shell` run this command:

```shell
heroku labs:enable runtime-dyno-metadata -a <app name>
```

---

### Related Docs

1. [**Dyno Metadata Integration**](/docs/platforms/heroku/integrations/dyno-metadata)
2. [**Dyno Runtime Metrics Integration**](/docs/platforms/heroku/integrations/dyno-runtime-metrics)
3. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
