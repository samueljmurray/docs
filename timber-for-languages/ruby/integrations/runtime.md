The runtime integration captures runtime level context as your logs are generated, such as the current thread ID.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`context.runtime`](/timber-concepts/log-event-json-schema/context/runtime-context)|

## What you can do

1. [**Search your logs with this data**](/timber-app/console-log-viewer/searching) - `system.hostname:server123.myhost.com`
2. [**Access this data by viewing a log's metadata & context**](/timber-app/console-log-viewer/view-metadata-and-context)

## Installation

This integration is installed automatically upon initialization. There is nothing you need to do.

## Disable

Currently this integration cannot be disabled due to the [very basic nature of the data it captures](/timber-concepts/log-event-json-schema/context/runtime-context). If you have a specific usecase that requires this, please [contact support](mailto:support@timber.io) as we'd be happy to add this option for you.
