Timber will parse the [Ruby standard logger format](https://ruby-doc.org/stdlib-2.1.0/libdoc/logger/rdoc/Logger.html#class-Logger-label-Format); this is defined as:

```
SeverityID, [DateTime #pid] SeverityLabel -- ProgName: message
```

Which, in practice, looks like:

```
I, [1999-03-03T02:34:24.895701 #19074]  INFO -- Main: info.
```

These fields are mapped to their appropriate [Timber log event JSON schema fields](/docs/concepts/log-json-schema).
