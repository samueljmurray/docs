If you are not using a formalized log format Timber makes a best effort to parse prefixed dates in your logs.

## Supported date formats

1. `ISO801`
2. `RFC1123`
3. `%Y/%m/%d %T` (strftime)

## Prefixed token patterns

Please see our [prefixed token patterns](/docs/concepts/log-formats-and-parsing/prefixed-token-patterns) document on the various formats and structures we support.

## Examples

1. `2017-01-01T03:32:24.245543Z my log message`
2. `2017-01-01T03:32:24.245543Z: my log message`
3. `2017-01-01T03:32:24.245543Z - my log message`
4. `[2017-01-01T03:32:24.245543Z] my log message`
