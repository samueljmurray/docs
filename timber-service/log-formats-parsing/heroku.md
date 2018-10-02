# Heroku

Timber parses the [Heroku log format](https://devcenter.heroku.com/articles/log-drains#https-drains) which is outlined as following the [Syslog 5424 specification](https://www.ietf.org/rfc/rfc5424.txt). In practice these messages look like:

```
83 <40>1 2012-11-30T06:45:29+00:00 host app web.3 - State changed from starting to up
119 <40>1 2012-11-30T06:45:26+00:00 host app web.3 - Starting process with command `bundle exec rackup config.ru -p 24405`
```

Timber will map these fields to their appropriate [Timber log event JSON schema fields](https://timber.io/concepts/log-event-json-schema). Specifically, the [`context.platform` fields](/concepts/log-event-json-schema/context/platform-context) which have Heroku specific fields for the dyno type and ID.
