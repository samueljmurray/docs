---
description: We guarantee 11-9s of durability without using archives.
---
Timber guarantees 11-9s of durability because your data is persisted and queried directly off of S3. In addition, Timber replicates all client data across regions protecting against the unlikely event of a catostrophic region failure. Timber data is also [versioned](http://docs.aws.amazon.com/AmazonS3/latest/dev/Versioning.html) protecting against accidental deletes for up to 3 days.

It's important to note that these are not archives or snapshots, this data is live queryable data resulting in significantly less (if any) downtime in the event of a failure.
