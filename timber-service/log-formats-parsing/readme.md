---
title: Log Formats & Parsing
sidebar_prepend:
  - prefixed-dates
  - prefixed-levels
  - component: Divider
---
*Note: If you are sending application logs to Timber we recommend using our [libraries](/languages). These libraries transparently augment your logs with [metadata & context](/concepts/metadata-context-and-events). They work in concert with our console to give you rich structured logs without the additional effort.*

---

At it's core, Timber is a traditional log aggregation system, and it recognizes a variety of log formats. Below is a list of a log formats that Timber recognizes. Each format has a page explaining how it's parsed and the data you can expect to be extracted:

* **Prefixed Arbitrary Formats**

  1. [**Prefixed Dates**](prefixed-dates)
  2. [**Prefixed levels**](prefixed-levels)

* **Libraries & Languages**

  1. [**Ruby - Standard Logger**](ruby-standard-logger)
  2. [**Node - Winston**](node-winston)

* **Systems & Services**

  1. [**Apache HTTP Server**](apache)
  2. [**Heroku Logplex**](heroku)
  3. [**Nginx**](nginx)
  4. [**Syslog**](syslog)
