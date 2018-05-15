Timber recognizes the formats outlines in the [Syslog 5424](https://www.ietf.org/rfc/rfc5424.txt) and [Syslog 3164](https://www.ietf.org/rfc/rfc3164.txt) specifications. In practice these messages look like:

```
<34>1 2003-10-11T22:14:15.003Z mymachine.example.com su - ID47 - 'su root' failed for lonvick on /dev/pts/8
```

Each field is mapped to the appropriate [Timber log event JSON schema field](https://timber.io/docs/concepts/log-json-schema).
