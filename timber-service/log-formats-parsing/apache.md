Timber parses the [traditional Apache HTTP server log formats](https://httpd.apache.org/docs/2.4/logs.html#page-header), both the access and error log formats. In practice they look like this:

Access logs:

```
127.0.0.1 - frank [10/Oct/2000:13:55:36 -0700] "GET /apache_pb.gif HTTP/1.0" 200 2326
```

Error logs:

```
[Fri Sep 09 10:42:29.902022 2011] [core:error] [pid 35708:tid 4328636416] [client 72.15.99.187] File does not exist: /usr/local/apache2/htdocs/favicon.ico
```

These fields will be mapped to their appropriate [Timber log event JSON schema](/timber-concepts/log-event-json-schema) fields.
