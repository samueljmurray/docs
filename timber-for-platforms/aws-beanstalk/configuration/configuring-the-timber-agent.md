[The Timber agent](/timber-for-platforms/other/agent) is what powers Elastic Beanstlak log delivery in the background. As a result, most confiration of Timber in the ElasticBeanstalk environment is done by [configuring the Timber agent](/timber-for-platforms/other/agent/configuration-file).


## How to

At the top of your Timber ebextension file you'll notice an entry for `/etc/timber.toml`. Simply modify the contents of this file based on the [available Timber agent configuration options](/timber-for-platforms/other/agent/configuration-file):

```toml
---
files:
  "/etc/timber.toml":
    mode: "000640"
    owner: root
    group: root
    encoding: plain
    content: |
      # insert configuration options here
```
