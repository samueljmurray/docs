---
title: Forwarding from rsyslog to Timber
installation_instructions:
  platform: syslog
  subplatform: rsyslog
---
# Rsyslog

The following are general instructions for integrating rsyslog v8+ with Timber.
These instruction will cause _all_ syslog messages to be forwarded to Timber.
This is probably _not_ what you want. Please review the instructions on using
[filter
conditions](https://www.rsyslog.com/doc/v8-stable/configuration/filters.html) to
limit the messages that are forwarded with the action.

1. You will need to ensure you have any extra packages necessary for rsyslog to
   support TLS communication. On Ubuntu, this means installing the
   `rsyslog-gnutls` package using `apt-get install rsyslog-gnutls`. The package
   and method to do this will vary based on your distribution.
2. Create the directory `/etc/ryslog.d/keys/ca.d`; you will place the Timber
   public certificate in this file (the connection effecitvely uses certificate
   pinning)
3. Download the Timber.io public certificate to
   `/etc/rsyslog.d/keys/ca.d/io.timber-wildcard.pem` from
   https://files.timber.io/certificates/latest/io.timber-wildcard.pem
4. Copy the following into `/etc/rsyslog.d/60-timber.conf`, replacing the API
   key as appropriate:

```
global(defaultNetstreamDriverCAFile="/etc/rsyslog.d/keys/ca.d/io.timber-wildcard.pem")

template(name="TimberFormat" type="list") {
  constant(value="<")
  property(name="pri")
  constant(value=">")
  constant(value="1")
  constant(value=" ")
  property(name="timestamp" dateFormat="rfc3339")
  constant(value=" ")
  property(name="hostname")
  constant(value=" ")
  property(name="app-name")
  constant(value=" ")
  property(name="procid")
  constant(value=" ")
  property(name="msgid")
  constant(value=" ")
  property(name="structured-data" regex.expression="[^-]" regex.nomatchmode="BLANK" regex.submatch="0")
  constant(value="[authentication@51576 api_key=\"{{timber_api_key}}\"]")
  constant(value=" ")
  property(name="msg" droplastlf="on")
}

action(
  type="omfwd"
  protocol="tcp"
  target="logs.timber-staging.io"
  port="6514"
  template="TimberFormat"
  TCP_Framing="octet-counted"
  StreamDriver="gtls"
  StreamDriverMode="1"
  StreamDriverAuthMode="x509/name"
  StreamDriverPermittedPeers="*.timber.io"
  queue.spoolDirectory="/var/spool/rsyslog"
  queue.filename="timber"
  queue.maxdiskspace="75m"
  queue.type="LinkedList"
  queue.saveonshutdown="on"
)
```

4. Now restart the `rsyslog` service (usually `systemctl restart rsyslog`)
5. Your logs will be forwarded to Timber. You will need to update the Timber
   public certificate when a new one is issued.

## Known Issues

### Connection Dropping

rsyslog will not properly detect when the connection has been closed by Timber.
There is an [open issue](https://github.com/rsyslog/rsyslog/issues/1503) for
this in the rsyslog issue tracker. Because of this issue, lines sent after a
connection is closed may be irrecoverable. This is an issue with rsyslog that we
hope will be fixed soon!
