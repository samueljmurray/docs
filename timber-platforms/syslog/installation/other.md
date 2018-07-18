---
title: Syslog Installation
---

These are the general instructions for forwarding syslog messages to Timber. We also provide detailed instructions for installing with [rsyslog] and [syslog-ng].

Timber's syslog collection service is available at `logs.timber.io` on port `6514`.

You must add the following to the structured data section of the syslog message:

```
[authentication@51576 api_key="{{timber_api_key}}"]
```

## TLS Configuration

The service expects TLS v1.2 and recognizes the following ciphers (in OpenSSL notation):

  * ECDHE-ECDSA-AES128-GCM-SHA256
  * ECDHE-ECDSA-AES128-SHA256
  * ECDHE-ECDSA-AES256-GCM-SHA384
  * ECDHE-ECDSA-AES256-SHA384
  * ECDHE-RSA-AES128-GCM-SHA256
  * ECDHE-RSA-AES128-SHA256
  * ECDHE-RSA-AES256-GCM-SHA384
  * ECDHE-RSA-AES256-SHA384

The [Timber TLS public certificate] is a wildcard certificate for `*.timber.io`
issued by RapidSSL (managed by DigiCert).

```
Expiration: 2018-12-09T12:00:00Z
MD5: 8E:46:8D:CD:4A:BF:35:70:41:9B:D3:E7:C3:01:A9:94
SHA1: 23:EC:0E:36:1C:52:D0:E7:D0:69:55:7F:D8:03:59:52:49:E0:80:C2
SHA256: 05:94:FE:0B:79:53:F3:3E:35:5C:42:6C:5B:DD:8C:F7:D6:B2:A7:A3:AD:7A:7B:AD:CF:B2:1E:F3:D5:1B:78:E4
```

If you require root and intermediate certificates, we recommend that you
download them directly from [DigiCert's Trusted Root Authority Certificates
website]. The intermediate certificate is the "RapidSSL RSA CA 2018" certificate
with serial number `08:A5:A2:46:CD:4B:5C:8C:83:D7:02:B4:BB:AB:53:49`. The root
certificate is the "DigiCert Global Root CA" with serial number
`08:3B:E0:56:90:42:46:B1:A1:75:6A:C9:59:91:C7:4A`.

DigiCert provides certificates in the DER format. To convert to PEM, use `openssl`:

```
openssl -inform der -in digicert.der -outform pem -out digicert.pem
```

[rsyslog]: syslog/install/rsyslog.html
[syslog-ng]: syslog/install/syslog-ng.html
[Timber TLS public certificate]: https://files.timber.io/certificates/latest/io.timber-wildcard.pem
[DigiCert's Trusted Root Authority Certificates website]: https://www.digicert.com/digicert-root-certificates.htm