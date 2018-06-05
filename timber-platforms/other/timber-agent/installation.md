# Installation

1. Download the archive for your architecture:

    ```shell
    curl -LO {{choose-url-below}}
    ```

    * [Darwin AMD64 latest](https://packages.timber.io/agent/0.x.x/darwin-amd64/timber-agent-0.x.x-darwin-amd64.tar.gz)
    * [FreeBSD AMD64 latest](https://packages.timber.io/agent/0.x.x/freebsd-amd64/timber-agent-0.x.x-freebsd-amd64.tar.gz)
    * [Linux AMD64 latest](https://packages.timber.io/agent/0.x.x/linux-amd64/timber-agent-0.x.x-linux-amd64.tar.gz)
    * [NetBSD AMD64 latest](https://packages.timber.io/agent/0.x.x/netbsd-amd64/timber-agent-0.x.x-netbsd-amd64.tar.gz)
    * [OpenBSD AMD64 latest](https://packages.timber.io/agent/0.x.x/openbsd-amd64/timber-agent-0.x.x-openbsd-amd64.tar.gz)

    All releases can be found [here](https://github.com/timberio/agent/releases). More special download links can be found [here](/platforms/other/agent/versioning).

2. Unpack the archive to a common location like `/opt`:

    ```shell
    tar -xzf timber-agent-0.x.x-darwin-amd64.tar.gz0 -C /opt
    ```

3. Move `timber.toml` to `/etc`:

    ```shell
    cp /opt/timber-agent/support/config/timber.basic.toml /etc/timber.toml
    ```

4. In `/etc/timber.toml` replace `MY_TIMBER_API_KEY` with your API key. **<small style="float: right">[don't have a key?](/app/applications/obtaining-your-api-key)</small>**

    ```shell
    sed -i 's/MY_TIMBER_API_KEY/{{my-timber-api-key}}/g' file.txt
    ```

    Be sure to replace `{{my-timber-api-key}}` in the command above with your _actual_ API key.

5. In `/etc/timber.toml` update the `[[files]]` entries to forward your chosen files.

6. Start the `timber-agent`:

    ```shell
    /opt/timber-agent/bin/timber-agent timber-agent capture-files
    ```

    Checkout the [usage guide](/platforms/other/agent/usage) as well as the [startup scripts](https://github.com/timberio/agent/tree/master/support/scripts/startup) to assist with starting and stopping the agent.
