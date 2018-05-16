1. In your `shell` install the [Timber Fluentd plugin](https://github.com/timberio/fluent-plugin-timber) by *executing*:

   ```shell
   gem install fluent-plugin-timber
   ```

2. In your `/etc/fluent/fluent.conf` file *add* the Timber configuration:

   ```sh
   <match your_match>
     @type timber
     api_key {{my-timber-api-key}}
     hostname "#{Socket.gethostname}"
     # ip 127.0.0.1
     buffer_chunk_limit 1m # Must be < 5m
     flush_at_shutdown true # Only needed with file buffer
   </match>
   ```

3. *Restart* Fluentd

---

### Related docs

1. [**Obtaining your API key**](/app/applications/obtaining-api-key)
2. [**Timber for languages**](/languages)
3. [**Troubleshooting**](troubleshooting)
