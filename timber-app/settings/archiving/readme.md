---
title: Archiving
description: Backup your logs.
---

# Archiving

Archiving allows you to backup and download your logs into a CSV format retaining all the metadata associated with each log line sent to Timber. For the moment S3 is just supported, but in the future more storage backends will be supported and the documentation for s3 can be found [here](/app/settings/archiving/s3).

Archiving is run every night and collects the last 24 hours of logs. Due to limits with our storage and the possible
large amounts of data the logs will not be in a complete order but will be partially in order by date.

Archiving is setup on an organization level and will produce archives for each application nightly that is within that organization. Each application will produce its own archived file in CSV format.
