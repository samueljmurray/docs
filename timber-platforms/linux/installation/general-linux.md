---
title: General Linux
related:
- /app/applications/obtaining-your-api-key
- /platforms/linux/installation/systemd-linux/line-by-line-explanation
- /platforms/linux/troubleshooting
---
1. We support all Linux-based systems through the [Timber Agent](/platforms/other/timber-agent) which collects logs from files on your server.

    For the majority of modern distributions, you can use the following shell script to install the agent on your machine. It assumes your system uses `systemd`. (Don't worry if you don't know what that means!)

    ```sh
    curl -o /opt/timber-agent.tar.gz https://packages.timber.io/agent/0.6.x/linux-amd64/timber-agent-0.6.x-linux-amd64.tar.gz
    cd /opt
    tar -xzf timber-agent.tar.gz
    rm timber-agent.tar.gz
    cp /opt/timber-agent/support/config/timber.basic.toml /etc/timber.toml
    $EDITOR /etc/timber.toml ## This command requires input from you
    cp /opt/timber-agent/support/scripts/logrotate.d/timber-agent-systemd /etc/logrotate.d/timber-agent
    cp /opt/timber-agent/support/scripts/startup/systemd/timber-agent.service /etc/systemd/system
    systemctl daemon-reload
    systemctl enable timber-agent
    systemctl start timber-agent
    ```

    *Be sure to replace the `path` settings in `/etc/timber.toml` with your desired log paths.*

    The script assumes that you have `root` permissions, so please prefix commands with `sudo` if necessary. It also assumes your `$EDITOR` environment variable is set. If not, replace `$EDITOR` with the command name of your preferred text-editor. Alternatively, create a configuration file on your local computer and upload it to your server.
