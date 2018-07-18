---
title: Installation
related:
- /app/applications/obtaining-your-api-key
- /platforms/heroku/configuration
- /languages
- /platforms/heroku/troubleshooting
---
1. In your `shell` *execute* the following command to add the Timber [log drain](https://devcenter.heroku.com/articles/log-drains):

    ```shell
    heroku drains:add https://{{my-timber-api-key}}@logs.timber.io/frames -a myapp
    ```

    *Optionally* [enable Heroku features](/platforms/heroku/configuration) to enhance your logs.