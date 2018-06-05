# Sending Multiple Log Files

Depending on your Elastic Beanstalk stack, you'll want to track different log files. As a general rule, we do not recommend sending every log file to Timber as it can be noisy and unhelpful. Below is a list of common log files that are tracked in an Elastic Beanstalk environment.


## How to

At the top of the [Timber ebextensions file](https://raw.githubusercontent.com/timberio/agent/v0.2.0/support/scripts/platforms/aws_elastic_beanstalk/01_timber_install.config) you'll notice a `/etc/timber.toml` entry. Simply modify the `contents` of this file to track your selected log files:

```diff
# .ebextensions/01_timber_install.config
---
files:
  "/etc/timber.toml":
    mode: "000640"
    owner: root
    group: root
    encoding: plain
    content: |
      [[files]]
      path = "/var/log/new-log1.log"

+     [[files]]
+     path = "/var/log/new-log2.log" # <---- REPLACE WITH YOUR LOG FILE PATH

      # Add as many as you see fit.
# ...
```


## Common Log File Paths

Please refer to the [AWS docs on Elastic Beanstalk log locations](http://docs.aws.amazon.com/elasticbeanstalk/latest/dg/using-features.logging.html#health-logs-instancelocation) for a comprehensive guide and list. If you are unsure, it is recommended that you SSH onto the server to locate the actual paths of your log files.

  1. Apache HTTP Access Log - `/var/log/httpd/access_log`
  2. Apache HTTP Error Log - `/var/log/httpd/error_log`
  3. Nginx Access Log - `/var/log/nginx/access.log`
  4. Nginx Error Log - `/var/log/nginx/error.log`
  5. Nodejs - `/var/log/nodejs/nodejs.log`
  6. Passenger - `/var/app/support/logs/passenger.log`
  7. Rails - `/var/app/support/logs/production.log`
