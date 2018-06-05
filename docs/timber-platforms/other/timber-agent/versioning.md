# Versioning

The versioning for the Timber Agent follows the [Semantic Versioning 2.0.0](http://semver.org/spec/v2.0.0.html) specification. As a quick overview:

- Patch version changes after 1.0.0 will be backwards compatible bug fixes.
- Minor version changes after 1.0.0 will be backwards compatible but may include new features.
- Major version changes after 1.0.0 will break backdward compatibility and may require changes to your configuration.

This should help you upgrade to new versions of the agent safely. You can always check the agent's [CHANGELOG](https://github.com/timberio/agent/blob/master/CHANGELOG.md) for an overview of what has changed in each version.

## Download URLs

The download URL for each version follows this format:

```
https://packages.timber.io/agent/{version}/{doublet}/timber-agent-{version}-{doublet}.tar.gz
```

The `{doublet}` is the combination of the target operating system and architecture. We currently only offer 64-bit architecture builds (`amd64`). The list of possible doublets is:


- `darwin-amd64` (compatible with macOS)
- `freebsd-amd64`
- `linux-amd64`
- `netbsd-amd64`
- `openbsd-amd64`

So, for example, to get the Linux 64-bit build of version 0.1.4, you would use the following URL:

```
https://packages.timber.io/agent/0.1.4/linux-amd64/timber-agent-0.1.4-linux-amd64.tar.gz
```

## Special Download URLs

We also offer special download URLs you can use to keep your Timber agent up-to-date with scripts. You can replace the elements of the `version` with `x` to get the latest version. For example, if you use the special version number `0.2.x`, you will always get the most recent version with a major/minor version of `0.2`. Likewise, the special version number `0.x.x` will always get the most recent version with a major version of `0`.

The full URL looks like this:

```
https://packages.timber.io/agent/0.2.x/linux-amd64/timber-agent-0.2.x-linux-amd64.tar.gz
```

Combinations like `x.2.0` or `0.x.0` will _not_ work. No numbers can follow an `x`.
