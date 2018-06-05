# Heroku Dyno Metadata

*Note: This feature requires the use of [one of our libraries](/languages).*

When you enable the [Heroku dyno metadata feature](https://devcenter.heroku.com/articles/dyno-metadata) for your Heroku application you'll automatically get release and deploy environment variables added to your application's environment. Our [libraries](/languages) automatically pick up these variables andd them as context to your logs.

|You'll Get|
|:------|
|<i>+</i>[Release context](/concepts/the-timber-log-event-schema/events/releast-context)|


## How to use it

In your `shell` run this command:

```shell
heroku labs:enable runtime-dyno-metadata -a <app name>
```


## How it works

1. This Heroku features adds the `RELEASE_COMMIT`, `RELEASE_CREATED_AT`, and `RELEASE_VERSION` environment variables (among others).

2. [Our libraries](/languages) check for the presence of these environment variables and add then as [context](/concepts/metadata-context-and-events).

3. Every log message written within your application will now include the [`release` context](/concepts/the-timber-log-event-schema/context/release-context):

   ```json
   {
     "context": {
       "release": {
         "commit_hash": "abcd1234",
         "created_at": "2017-01-01T01:23:24.453345Z",
         "version": "v25"
       }
     }
   }
   ```

---

### Related Docs

* [**Configuration**](/platforms/heroku/configuration)
* [**Metadata, context, and events**](/concepts/metadata-context-and-events)
