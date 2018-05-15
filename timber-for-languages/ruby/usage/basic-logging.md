Use the [`Timber::Logger`](http://www.rubydoc.info/github/timberio/timber-ruby/Timber/Logger) just like you would the standard Ruby [`::Logger`](https://ruby-doc.org/stdlib-2.4.0/libdoc/logger/rdoc/Logger.html).


## How to use it

```ruby
logger.debug("Debug message")
logger.info("Info message")
logger.warn("Warn message")
logger.error("Error message")
logger.fatal("Fatal message")
```

We encourage standard / traditional log messages for non-meaningful events. And because Timber [_augments_](/docs/concepts/structuring-through-augmentation) your logs with metadata, you don't have to worry about making every log structured!
