---
title: Silence & Temporarily Adjust The Level
---
At times you may want to temporarily silence or adjust the log level.

## How to use it

```ruby
logger.level = :info

# silence, by default, raises the level to error
logger.silence do
  logger.info("info message") # will _not_ be logged
  logger.error("error message") # _will_ be logged
end

logger.info("info message") # _will_ be logged
```

You can also specify a different level:

```ruby
logger.silence(Logger::FATAL) do
  logger.error("error message") # will _not_ be logged
end
```

## How it works

This is currently accomplished by using the [ActiveSupport `LoggerSilence` module](https://github.com/rails/rails/blob/master/activesupport/lib/active_support/logger_silence.rb), which means you must have ActiveSupport included as a dependency if you'd like to use this. If you are not on Rails and want access to this feature, please [open an issue](https://github.com/timberio/timber-ruby/issues/new) to provide this feature directly in the `timber` library itself.

