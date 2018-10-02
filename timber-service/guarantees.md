---
description: Exactly once delivery and 11-9s of durability.
---
# Guarantees

The Timber service offers the following guarantees:

1. 11-9s of durability.

   Customer data is persisted and queried directly off of S3. In addition, Timber replicates all client data across regions protecting against the unlikely event of a catastrophic region failure. Timber data is also versioned protecting against accidental deletes for up to 3 days.

   It's important to note that these are not archives or snapshots, this data is live query-able data resulting in significantly less (if any) downtime in the event of a failure.

2. Exactly once delivery.

   Your data will be delivered and persisted exactly one time. Timber maintains a write ledger ensuring data does not get persisted multiple times in the event of failures or retries.
