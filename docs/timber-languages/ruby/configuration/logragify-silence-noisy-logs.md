---
title: Logragigy. Silence Noisy Logs.
---
Timber allows you to silence noisy logs that aren't of value to you, just like [lograge](https://github.com/roidrage/lograge). As such, we've provided a convenience configuration option for anyone transitioning from lograge.


## How to use it

```ruby
# config/initializers/timber.rb

Timber.config.logrageify!()
```


## How it works

It turns this:

```
Started GET "/" for 127.0.0.1 at 2012-03-10 14:28:14 +0100
Processing by HomeController#index as HTML
  Rendered text template within layouts/application (0.0ms)
  Rendered layouts/_assets.html.erb (2.0ms)
  Rendered layouts/_top.html.erb (2.6ms)
  Rendered layouts/_about.html.erb (0.3ms)
  Rendered layouts/_google_analytics.html.erb (0.4ms)
Completed 200 OK in 79ms (Views: 78.8ms | ActiveRecord: 0.0ms)
```

Into this:

```
Get "/" sent 200 OK in 79ms
```

Internally this is equivalent to:

```ruby
# config/initializers/timber.rb

Timber.config.integrations.action_controller.silence = true
Timber.config.integrations.action_view.silence = true
Timber.config.integrations.active_record.silence = true
Timber.config.integrations.rack.http_events.collapse_into_single_event = true
```

Feel free to deviate and customize which logs you silence.


## Pro-tip: Keep controller call logs (recommended)

Keeping your controller logs can be very helpful as they include the request parameters. This helps to reproduce and debug issues when they arise.

```ruby
# config/initializers/timber.rb

Timber.config.integrations.action_view.silence = true
Timber.config.integrations.active_record.silence = true
Timber.config.integrations.rack.http_events.collapse_into_single_event = true
```

This does _not_ silence the controller call log event. This is because Timber captures the parameters passed to the controller, which are generally valuable when debugging.

For a full list of integration settings, see [Timber::Config::Integrations](http://www.rubydoc.info/github/timberio/timber-ruby/Timber/Config/Integrations)
