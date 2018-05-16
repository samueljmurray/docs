Under the hood, Timber uses the excellent [manticore HTTP client](https://github.com/cheald/manticore). Along with this come a variety of HTTP configuration options:


## How to use it

In your `/etc/logstash/conf.d/logstash-timber.conf` file place any of these options in the `timber` block like so:

```
output{
  timber{
    api_key => "{{timber-api-key}}"
    request_timeout => 60
    pool_max => 50
  }
}
   ```


## Available options

Please refer to the configuration options defined [in this file](https://github.com/logstash-plugins/logstash-output-timber/blob/master/lib/logstash/outputs/timber/http_client.rb).
