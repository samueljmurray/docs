---
title: Log Formats & Parsing
---
*Note: If you are sending application logs to Timber we recommend using our [libraries](/docs/languages). These libraries transparently augment your logs with [metadata & context](/docs/concepts/metadata-context-and-events). They work in concert with our console to give you rich structured logs without the additional effort.*

---

At it's core, Timber is a traditional log aggregation system, and it recognizes a variety of log formats. Below is a list of a log formats that Timber recognizes. Each format has a page explaining how it's parsed and the data you can expect to be extracted:

* **Prefixed Arbitrary Formats**

  1. [**Prefixed Dates**](/docs/concepts/log-formats-and-parsing/prefixed-dates)
  2. [**Prefixed levels**](/docs/concepts/log-formats-and-parsing/prefixed-levels)

* **Libraries & Languages**

  1. [**Ruby - Standard Logger**](/docs/concepts/log-formats-and-parsing/ruby-standard-logger)
  2. [**Node - Winston**](/docs/concepts/log-formats-and-parsing/node-winston)

* **Systems & Services**

  1. [**Apache HTTP Server**](/docs/concepts/log-formats-and-parsing/apache)
  2. [**Heroku Logplex**](/docs/concepts/log-formats-and-parsing/heroku)
  3. [**Nginx**](/docs/concepts/log-formats-and-parsing/nginx)
  4. [**Syslog**](/docs/concepts/log-formats-and-parsing/syslog)
