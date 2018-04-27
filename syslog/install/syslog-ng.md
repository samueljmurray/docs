---
title: Forwarding from syslog-ng to Timber
installation_instructions:
  platform: syslog
  subplatform: syslog-ng
---
The following are general instructions for integrating syslog-ng v3.5+ with
Timber. These instructions will cause _all_ syslog messages to be forwarded to
Timber. This is probably _not_ what you want. Please review the instructions on
[filtering
logs](https://syslog-ng.com/documents/html/syslog-ng-ose-latest-guides/en/syslog-ng-ose-guide-admin/html/reference-filters.html)
to limit the messages that are forwarded with the action.

1. Create the directory `/etc/syslog-ng/keys/ca.d`; you will need to install the
   DigiCert Global Root CA certificate here.
2. Download the DigiCert Global Root CA certificate to
   `/etc/syslog-ng/keys/ca.d/digicert_global_root_ca.der`; you can use `curl -o
   /etc/syslog-ng/keys/ca.d/digicert_global_root_ca.der
   https://www.digicert.com/CACerts/DigiCertGlobalRootCA.crt`.
3. Convert the DigiCert Global Root CA certificate to the PEM format: `openssl
x509 -inform der -outform pem -in
/etc/syslog-ng/keys/ca.d/digicert_global_root_ca.der -out
/etc/syslog-ng/keys/ca.d/digicert_global_root_ca.pem`
4. Get the hash of the DigiCert Global Root CA certificate: `openssl x509 -in
   /etc/syslog-ng/keys/ca.d/digicert_global_root_ca.pem -hash -noout`.
5. Use the result of line 4 (should be `3513523f`) with the suffix `.0` as the
   target for a symbolic link to the DigiCert Global Root CA in PEM format: `ln
   -s /etc/syslog-ng/keys/ca.d/digicert_global_root_ca.der
   /etc/syslog-ng/keys/ca.d/351323f.0`
6. Copy the following into `/etc/syslog-ng/conf.d/timber.conf`, replacing the API key as appropriate:

```
destination d_timber {
  syslog(
    "logs.timber.io"
    transport("tls")
    port(6514)
    tls(
      ca-dir("/etc/syslog-ng/ca.d")
      cipher-suites("ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256")
      trusted-dn("*, CN=*.timber.io")
    )
  );
};

rewrite add_timber_api_key {
  set("{{timber_api_key}}" value(".SDATA.authentication@51576.api_key"));
};

log {
  source(s_src);
  rewrite(add_timber_api_key);
  destination(d_timber);
};
```

6. Now restart the `syslog-ng` service (usually `systemctl restart syslog-ng`)

## Known Issues

### Connection Dropping

syslog-ng will not honor the notice from the server that a connection is being
closed. You may notice messages that it encountered an "EOF" unexpectedly on a
file-descriptor. While we have observed this, we have not seen any data loss
result from this issue.
