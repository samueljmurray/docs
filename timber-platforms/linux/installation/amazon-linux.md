---
title: Amazon Linux
related:
- /app/applications/obtaining-your-api-key
- /platforms/linux/installation/amazon-linux/line-by-line-explanation
- /platforms/linux/troubleshooting
---
1. *Execute* this shell script on the desired [Amazon Linux](https://aws.amazon.com/amazon-linux-ami/) server to install the [Timber Agent](/platforms/other/timber-agent)

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
