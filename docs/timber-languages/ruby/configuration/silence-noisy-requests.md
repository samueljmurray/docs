# Silence Noisy Requests

Silencing noisy requests can be helpful for silencing load balance health checks, bot scanning, or activity that generally is not meaningful to you.


## How to use it

The following will silence all `[GET] /_health` requests:

```ruby
# config/initializers/timber.rb

Timber.config.integrations.rack.http_events.silence_request = lambda do |rack_env, rack_request|
  # rack_request.path returns a string *without* the query string.
  # The request of the lambda must be a boolean
  rack_request.path == "/_health"
end
```

We require a block because it gives you complete control over how you want to silence requests.
The first parameter being the traditional [Rack env](http://www.rubydoc.info/github/rack/rack/master/file/SPEC#The_Environment) hash, the second being a
[Rack Request](http://www.rubydoc.info/gems/rack/Rack/Request) object. Use any of this data to intelligently silence logging requests.
