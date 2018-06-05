# Amazon Linux

*Execute* this shell script on the desired [Amazon Linux](https://aws.amazon.com/amazon-linux-ami/) server to install the [Timber Agent](/platforms/other/agent)

```sh
curl -o /opt/timber-agent.tar.gz https://packages.timber.io/agent/0.6.x/linux-amd64/timber-agent-0.6.x-linux-amd64.tar.gz
cd /opt
tar -xzf timber-agent.tar.gz
rm timber-agent.tar.gz
cp /opt/timber-agent/support/config/timber.basic.toml /etc/timber.toml
$EDITOR /etc/timber.toml ## This command requires input from you
cp /opt/timber-agent/support/scripts/logrotate.d/timber-agent-sysv /etc/logrotate.d/timber-agent
cp /opt/timber-agent/support/scripts/startup/sysv-epel/timber-agent /etc/rc.d/init.d/
chkconfig --add timber-agent
service timber-agent start
```

*Be sure to replace the `path` settings in `/etc/timber.toml` with your desired log paths.*

<small>For a line-by-line explanation of what is happening, [read this doc](/platforms/linux/installation/amazon-linux/line-by-line-explanation).</small>

---

### Related docs

1. [**Obtaining your API key**](/app/applications/obtaining-your-api-key)
2. [**Line-by-line shell script explanation**](/platforms/linux/installation/amazon-linux/line-by-line-explanation)
3. [**Troubleshooting**](/platforms/linux/troubleshooting)
