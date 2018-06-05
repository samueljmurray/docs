# Basic Logging

The Timber library works directly with the standard Elixir [Logger](https://hexdocs.pm/logger/Logger.html) and installs itself as a [backend](https://hexdocs.pm/logger/Logger.html#module-backends) during the setup process. In this way, basic logging is no different than logging without Timber.

In fact, standard logging messages are encouraged for debug statements and non-meaningful events. Timber does not require you to structure every log!

## How to use it

```elixir
Logger.debug("My log statement")
Logger.info("My log statement")
Logger.warn("My log statement")
Logger.error("My log statement")
```
