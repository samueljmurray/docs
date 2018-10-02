# Configuration File

The Timber Agent configuration file is written in [TOML (v0.4.0)](https://github.com/toml-lang/toml/tree/v0.4.0). You can think of it as a super-powered cousin of INI syntax or a relaxed cousin of YAML. By default the Timber agent expects this file to be located at `/etc/timber.toml`, but you can adjust this path by passing the `--config` flag:

```shell
timber-agent --config /path/to/timber.toml
```

## Example

A simple config file looks like this:

```toml
default_api_key = "qcJtbeo4DJLsyTV83zkpWi1oh5s9N3Se"

[[files]]
path = "/var/log/yum.log"
```

When the Agent reads this configuration, it will start tailing `/var/log/yum.log` and forwarding its contents.


## Configuration Options

* ### `batch_period_seconds` (integer)

  The Timber Agent sends buffered log data on a regular time interval. You can set a custom `batch_period_seconds` if you would like to send more or less frequently. We recommend sending more frequently so that the data transmissions are smaller, but the majority of users should not have to modify this value.

  Defaults to `10`

* ### `default_api_key` (boolean)

  This is your main default API key. As you will see below, it is possible for each file to override the API key with a file specific API key. When this is _not_ present, the default API key is used. Most users will only specify this key. Per file API keys are used in advanced circumstances. You can read more about that below in the `[[files]]` option.

* ### `disable_ec2_metadata` (boolean)

  By default, the Timber Agent will check whether it is running on an AWS EC2 instance. If it is, it will pull down data about the instance from the metadata store and set it as context under the `context.platform.aws_ec2` key.

  If you would like to disable this behavior, set `disable_ec2_metadata` to `true`.

  Defaults to `false`

* ### `[[files]]` (array of tables)

  The `[[files]]` key is a repeatable key; each use of the key becomes an entry in the `files` array (a file definition), specifying the list of files you want the Agent to tail. Here's a more advanced example:

  ```toml
  default_api_key = "zVfL5A5GJKJAXf2GlmrRudjmHXFobdK2"

  [[files]]
  path = "/var/log/app/*.log"

  [[files]]
  path = "/path/to/another.log"
  api_key = "qcJtbeo4DJLsyTV83zkpWi1oh5s9N3Se"
  ```

  Each key for `[[files]]` is described below:

  * ### `api_key` (optional, string)

    This is an optional key that allows you to override the `default_api_key`. Note in the above example, both keys are present. If no `api_key` is specified, the `default_api_key` will be used. This gives you the ability to route specific files to different applications within Timber.

    No default

  * ### `path` (string)

    This is the absolute path to the file Timber should watch for logs. [File globbing](https://en.wikipedia.org/wiki/Glob_(programming)) is supported.

    No default

* ### `hostname` (string)

  When this field is blank, the Timber Agent automatically gets the hostname of your system from the operating system and adds it as context to every log line (at the key `context.system.hostname`).

  Setting a value for the `hostname` key will override this behavior, and  `context.system.hostname` will be set to the value you provide.

  Defaults to `""` (empty string)

* ### `poll` (boolean)

  The Agent tries to be intelligent about watching logs. By default it asks the underlying system to notify it of changes to the files being tailed. On Linux, this uses `inotify`, on BSD-variants it uses `kqueue`.

  If you set `poll` to `true`, the Agent will instead read the file on a regular basis to check for changes.

  If for some reason your system is incompatible or unreliable with file system events (for example, Docker on certain virtualization technologies has poor `inotify` compatibility), you should set `poll` to `true`.

  Defaults to `false`

* ### `read_from_start` (boolean)

  When a new log file is discovered the Agent defaults to tailing the file, processing and shipping only data written since the tailing began.

  Setting this option to true will have the Agent read new log files from the beginning, shipping the entire contents of the file.

  Log files already seen will either be read from their checkpoint stored in the Agent's state, or from the beginning if the Agent determines the file has been truncated. `read_from_start` does
  not affect this logic for existing files.

  Defaults to `false`
