---
title: Send Logs Over HTTP
---
Timber offers a [fully featured API](https://api-docs.timber.io/) and our [`POST /log_line` endpoint](https://api-docs.timber.io/#2c830bbd-cc4f-f50c-ea5e-a1756a967a75) makes it simple to send logs to your Timber account. To demonstrate, here's a simple [curl](https://curl.haxx.se/) command that send logs in `text/plain` format:

```shell
curl -X POST https://logs.timber.io/frames \
  -H 'authorization: Basic base64_encode({{my-timber-api-key}})' \
  -H 'content-type: text/plain' \
  -d 'Log line 1
Log Line 2
Log line 3'
  -v
```

Be sure to `base64` encode your API key before inserting. For example, if your API key is `925_d317185e7ae25f2f:46572b152d4f3bbe79ceba443e994868b1a841c47cf13e1c27761a23d128f158` then the curl command should look like:

```shell
curl -X POST https://logs.timber.io/frames \
  -H 'authorization: Basic OTI1X2QzMTcxODVlN2FlMjVmMmY6NDY1NzJiMTUyZDRmM2JiZTc5Y2ViYTQ0M2U5OTQ4NjhiMWE4NDFjNDdjZjEzZTFjMjc3NjFhMjNkMTI4ZjE1OA==' \
  -H 'content-type: text/plain' \
  -d 'Log line 1\nLog Line 2\nLog line 3'
```

This is accomplished by:

1. Enter the Ruby shell by executing `irb`
2. Execute this code:

    ```ruby
    require "base64"
    Base64.urlsafe_encode64("925_d317185e7ae25f2f:46572b152d4f3bbe79ceba443e994868b1a841c47cf13e1c27761a23d128f158")
    ````
