---
title: Syslog
---
Timber can act as a collector for syslog events forwarded from your syslog
daemon or syslog infrastructure. We support the IETF [RFC 5425] standard, which
specifies sending syslog events over a TLS connection.

Forwarding syslog events to Timber via TLS requires you to add a structured data
element to every syslog event containing the authorization data. This
authorization data is then removed prior to storage.

## Limitations

### UTF-8

Timber assumes all messages are encoded as UTF-8, and if the byte sequences in
the message are not valid UTF-8 the entire event will be discarded.

### Size and Transfer Limit

Timber will accept events for processing and storage up to 8,192 bytes
(including the syslog metadata). The protocol will still accept larger events
but will immediately discard them. This is to ensure the overall health of the
system.

If a transmission indicates that it will be sending an event larger than 99,999
bytes, the connection will immediately be terminated.

### Idle Connection Timeout

If the connection does not send new data for 3 seconds, the connection will be closed.

### Terminal New Lines

If an event ends in a new line (either `\n` or `\r\n`), Timber will remove the
characters during processing. We have deviated from the published standard here
for practical reasons of dipslaying the logs. In most circumstances, the
terminal new line is added in error by the daemon (for example, `syslog-ng`) and
not intentionally by the user.


[RFC 5425]: https://tools.ietf.org/html/rfc5425
