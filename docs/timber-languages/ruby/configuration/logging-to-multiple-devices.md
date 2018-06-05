# Logging to Multiple Devices

Timber has built in support for logging to a file, STDOUT, or any IO device, as well as loggin to multiple devices simultaneously.


## How to use it

### Example 1: Logging to Timber & a file

```ruby
# Update your existing Timber::Logger instantation in
# config/environments/production.rb

http_device = Timber::LogDevices::HTTP.new("{{my-timber-api-key}}")
file_logger = Logger.new("#{Rails.root}/log/#{Rails.env}.log")
logger = Timber::Logger.new(http_device, file_logger)
```

Timber accepts a file `Logger` object because it gives you complete control over the log format for the file separately, allowing you to configure that logger separately.

### Example 2: Logging to Timber & STDOUT

```ruby
# Update your existing Timber::Logger instantation in
# config/environments/production.rb

http_device = Timber::LogDevices::HTTP.new("{{my-timber-api-key}}")
logger = Timber::Logger.new(http_device, STDOUT)
```

Just like the file example above, you could optionally wrap `STDOUT` in a `Logger` to control it's format and configure it separately.

## Consider the Timber agent

For the type-A minded, consider using the [Timber agent](/platforms/other/agent) to forward logs from your server/platform. Since you require an actual log file you can setup the Timber agent to tail that file and forward logs. This would alleviate your application from having to ship logs.

Please note, this is _not_ necessary, and it does not result in any application performance improvements! The Timber HTTP log device is designed to be *highly* efficient using threads, batching, and msgpack. For more information on how to choose a log delivery method, see our [HTTP, STDOUT, or Files doc](/guides/http-stdout-or-log-files).
