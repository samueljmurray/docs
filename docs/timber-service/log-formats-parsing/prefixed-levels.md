# Prefixed Levels

If you are not using a formalized log format Timber makes a best effort to parse prefixed levels in your logs.

## Supported levels

Timber will support any [Syslog RFC 5424 level](https://en.wikipedia.org/wiki/Syslog#Severity_level), case insensitive. In addition to the formal Syslog levels, Timber will also support a `fatal` level since this is common in various languages. `fatal` will be mapped to `critical` to achieve normalization. The levels an application should be concerned with are:

1. `debug`
2. `info`
3. `warn`
4. `error`
5. `critical`
6. `fatal` (mapped to `critical` for normalization)


## Prefixed token patterns

Please see our [prefixed token patterns](/service/log-formats-parsing/prefixed-token-patterns) document on the various formats and structures we support.

## Examples

1. `INFO my log message`
2. `INFO: my log message`
3. `INFO - my log message`
4. `[INFO] my log message`
