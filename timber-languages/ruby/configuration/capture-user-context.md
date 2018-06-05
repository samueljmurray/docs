# Capture User Context

By default Timber automatically captures [user context](/concepts/log-event-json-schema/context/user-context) for most of the popular authentication libraries (Warden, Devise and Clearance). See [Timber::Integrations::Rack::UserContext](http://www.rubydoc.info/github/timberio/timber-ruby/Timber/Integrations/Rack/UserContext) for a complete list.

In cases where Timber doesn't support your strategy, or you want to customize it further, you can do so by following the instructions below.

## How to use it

Please choose your appropriate method below:

1. [Rack level authentication](#rack-level-authentication) - preferred, but is not applicable to everyone.
2. [Controller level authentication](#controller-level-authentication) - will work with everything.

### Rack level authentication

If your application uses [Rack](https://rack.github.io/), we recommend this strategy because it captures and applies user context higher in the request call chain, *before* the initial "Received Get /" request log line. This ensures that all request logs contain user context, otherwise these initial request logs will not include user context. If you authenticate users in your controller, which is perfectly fine, please see the [controller level authentication](#controller-level-authentication) method below.

```ruby
# config/initializers/timber.rb

Timber.config.integrations.rack.user_context.custom_user_hash = lambda do |rack_env|
  user = rack_env['warden'].user
  if user
    {
      id: user.id, # unique identifier for the user, can be an integer or string,
      name: user.name, # identifiable name for the user,
      email: user.email, # user's email address
    }
  else
    nil
  end
end
```

The `rack_env` argument is your standard [Rack env](http://www.rubydoc.info/github/rack/rack/master/file/SPEC#The_Environment) hash.

*All* of the user hash keys are optional, but you must provide at least one.

### Controller level authentication

If you authenticate users within the controller, typically in a filter, then you'll want to use the below snippet.

Please note, the initial `Received GET /` and `Processing by WelcomeController` log lines will *not* contain user context. This is because these logs are written *before* the below code is executed. This is perfectly fine if you authenticate your users within the controller itself. If you want to avoid this, then you must move authentication into a Rack middleware, which is what [Warden](https://github.com/hassox/warden) does (the library Devise uses). This allows you to capture user context before the initial request log lines are written:

```ruby
class ApplicationController < ActionController::Base
  # Make sure this is called *after* you authenticate users
  around_filter :set_user_context

  private
    def set_user_context(&block)
      if !current_user.nil?
        # Ensure the attributes are mapped properly here
        user_context = Timber::Contexts::User.new(id: current_user.id, email: current_user.email, name: current_user.full_name)
        Timber.with_context(user_context, &block)
      else
        block.call
      end
    end
end
```

