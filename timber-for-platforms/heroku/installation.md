In your `shell` *execute* the following command to add the Timber [log drain](https://devcenter.heroku.com/articles/log-drains):

```shell
heroku drains:add https://{{my-timber-api-key}}@logs.timber.io/frames -a myapp
```

*Optionally* [enable Heroku features](/docs/platforms/heroku/configuration) to enhance your logs.

---

### Related Docs

1. [**Obtaining your API key**](/docs/app/applications/obtaining-api-key)
2. [**Configuration**](/docs/platforms/heroku/configuration)
3. [**Timber for languages**](/docs/languages)
4. [**Troubleshooting**](/docs/platforms/heroku/troubleshooting)
