---
title: Your Application's Dynamic Schema
description: Each application within Timber has it's own dynamic schema.
---
# Your Application's Dynamic Schema

Each application within Timber has it's own dynamic schema. Here's a short list that describes it's behaviour:

1. Your schema is maintained on the fly, as data is received.
2. Your schema is typed, subsequent values for the same field will be coerced into this type if it does not match.
3. Your schema is only limited as described in the [service limits](/service/limits) doc.
4. Your schema is automatically maintained, if a field has not been received within your plan's retention window, it will be removed.
