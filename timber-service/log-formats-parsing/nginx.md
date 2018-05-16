Timber recognizes the [standard Nginx access and error log formats](https://www.nginx.com/resources/admin-guide/logging-and-monitoring/). In practice these look like:

Access log:

```
127.0.0.1 - - [19/Jun/2012:09:16:22 +0100] "GET /path/to/resource?limit=1000 HTTP/1.1" 200 11545 "-" "-" "52.34.34.232"
```

Error log:

```
2010/08/23 15:25:35 [error] 19997#0: *1 open() "/var/www/nginx-default/phpmy-admin/scripts/setup.php" failed (2: No such file or directory), client: 80.154.42.54, server: localhost, request: "GET /phpmy-admin/scripts/setup.php HTTP/1.1", host: "www.example.com"
```

Each of these fields will be mapped to their appropriate [Timber log event JSON schema](https://timber.io/concepts/log-event-json-schema) fields.
