---
description: Ensuring your logs are readable by appending metadata.
---
# Structuring Through Augmentation

*Note: This article specifically relates to our [libaries](/languages) and how they achieve log structuring within your application.*

A defining principle of Timber is ensuring your logs are readable. There is no doubt structured logging is neccessary to use your logs in meaningful ways, but it doesn't have to come at the price of making your logs unreadable. To solve this, Timber structures your logs through augmentation. What we mean by this is fairly simple. Instead of replacing your log messages with structured data, we preserve the original message and *append* metadata:

```
Sent 200 in 54.2ms @metadata { ... }
```

When this data is received by the Timber service, it will be stripped and parsed. This offers the best of both worlds: human readable logs with rich structured data. In fact, because users do not have to worry about making their logs an unreadable mess, this promotes the use of structured data even further.

The end result is beautiful readable logs with rich structured data:

![App - View Metadata & Context](//images.contentful.com/h6vh38q7qvzk/6iqcKJH8I0S42KKEQm4Giy/ef0b247abe28500ecd08205b741e82ae/Screen_Recording_2017-08-12_at_01.19_PM.gif)
