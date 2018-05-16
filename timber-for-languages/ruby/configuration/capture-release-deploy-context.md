---
title: Capture Release & Deploy Context
---
[Timber::Contexts::Release](http://www.rubydoc.info/github/timberio/timber-ruby/Timber/context/Release)
tracks the current application release and version.


## How to use it

If you're on Heroku, simply enable the
[dyno metadata](https://devcenter.heroku.com/articles/dyno-metadata) feature. If you are not,
set the following environment variables and this context will be added automatically:

1. `RELEASE_COMMIT` - Ex: `2c3a0b24069af49b3de35b8e8c26765c1dba9ff0`
2. `RELEASE_CREATED_AT` - Ex: `2015-04-02T18:00:42Z`
3. `RELEASE_VERSION` - Ex: `v2.3.1`

All variables are optional, but at least one must be present.
