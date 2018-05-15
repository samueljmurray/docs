---
title: Metrics & Timings
---
Aggregates destroy details, events tell stories. With Timber, logging metrics and timings is simply [logging an event](/docs/languages/elixir/usage/custom-events). Timber is based on modern big-data principles and can aggregate inordinately large data sets in seconds. Logging events (raw data as it exists), gives you the flexibility in the future to segment and aggregate your data any way you see fit. This is superior to choosing specific paradigms before hand, when you are unsure how you'll need to use your data in the future.


## How to use it

Below is a contrived example of adding a product to a shopping cart:

```ruby
timer = Timber.start_timer()

# ... add the item to the shopping cart ...

time_ms = Timber.duration_ms(timer)

Logger.info(
  "Product Lumberjack Beard Hat has been added to the cart",
  event: %{
    cart_add: %{
      product_id: "abcd1234",
      price: 100,
      time_ms: time_ms
    }
  }
)
```

1. [Search it](/docs/app/console/searching) with queries like: `type:cart_add` or `cart_add.price:>100`
2. [Alert on it](/docs/app/alerts) with threshold based alerts
3. [Graph & visualize it](/docs/app/graphs)
