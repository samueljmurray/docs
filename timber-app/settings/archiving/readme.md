---
title: Archiving
description: Backup your logs.
---

# Archiving

Archiving allows you to backup and download your logs into a [NDJSON](http://ndjson.org/) format retaining all the metadata associated with each log line sent to Timber. For the moment S3 is just supported, but in the future more storage backends will be supported and the documentation for S3 can be found [here](/app/settings/archiving/s3).

Archiving is run every night and collects the last 24 hours of logs.

Archiving is setup on an organization level and will produce archives for each application nightly that is within that organization. Each application will produce its own archived file in `.tar.gz` format.
