# Usage

Run `timber-agent help` to see the available options:

```text
NAME:
   timber-agent - forwards logs to timber.io

USAGE:
   timber-agent [global options] command [command options] [arguments...]

VERSION:
   0.8.3

COMMANDS:
     capture-stdin  Captures log data sent over STDIN and forwards to Timber's log collection endpoint
     capture-files  Captures log data from files declared in configuration and forwards to Timber's log collection endpoint
     capture-kube   Captures log data from Kubernetes according to configuration and forwards to configured log collection endpoint
     help, h        Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h     show help
   --version, -v  print the version
```

### capture-stdin

```text
NAME:
   timber-agent capture-stdin - Captures log data sent over STDIN and forwards to Timber's log collection endpoint

USAGE:
   timber-agent capture-stdin [command options] [arguments...]

OPTIONS:
   --api-key value           timber API key to use when capturing stdin [$TIMBER_API_KEY]
   --config value, -c value  config file to use, for available options see https://timber.io/docs/platforms/other/agent/configuration-file (default: "/etc/timber.toml")
   --output-log-file FILE    the agent will write its own logs to FILE (will use STDOUT if not provided)
   --pidfile FILE            will store the pid in FILE when set
```

### capture-files

```text
NAME:
   timber-agent capture-files - Captures log data from files declared in configuration and forwards to Timber's log collection endpoint

USAGE:
   timber-agent capture-files [command options] [arguments...]

OPTIONS:
   --config value, -c value  config file to use, for available options see https://timber.io/docs/platforms/other/agent/configuration-file (default: "/etc/timber.toml")
   --daemonize               starts an instance of agent as a daemon (only available on Linux; see documentation)
   --output-log-file FILE    the agent will write its own logs to FILE (will use STDOUT if not provided)
   --pidfile FILE            will store the pid in FILE when set
   --statefile value         File path for storing global state, defaults to sane path based on OS
```

### capture-kube

```text
NAME:
   timber-agent capture-kube - Captures log data from Kubernetes according to configuration and forwards to configured log collection endpoint

USAGE:
   timber-agent capture-kube [command options] [arguments...]

OPTIONS:
   --api-key value           timber API key to use when capturing stdin [$TIMBER_API_KEY]
   --config value, -c value  config file to use, for available options see https://timber.io/docs/platforms/other/agent/configuration-file (default: "/etc/timber.toml")
   --daemonize               starts an instance of agent as a daemon (only available on Linux; see documentation)
   --output-log-file FILE    the agent will write its own logs to FILE (will use STDOUT if not provided)
   --pidfile FILE            will store the pid in FILE when set
   --statefile value         File path for storing global state, defaults to sane path based on OS
```
