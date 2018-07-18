---
title: Installation
related:
- /app/applications/obtaining-your-api-key
- /languages
- /platforms/logstash/troubleshooting
---
1. In your `shell` install the [Timber Logstash plugin](https://github.com/logstash-plugins/logstash-output-timber):

   ```shell
   bin/logstash-plugin install logstash-output-timber
   ```

2. *Create* a `/etc/logstash/conf.d/logstash-timber.conf` file with the following contents: <small style="float: right" class="platform-alt"><a href="/platforms/logstash/configuration">view all configuration options</a></small>

   ```
   output{
     timber{
       api_key => "{{my-timber-api-key}}"
     }
   }
   ```

3. In your `shell` restart logstash by *executing*:

   ```shell
   service logstash restart
   ```