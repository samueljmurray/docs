# System

The system integration captures system level context upon initialization, augmenting your logs with structured data like `hostname`, `ip`, `pid`, and more. It uses native Ruby libraries to capture this data.

1. [**Structured data**](#structured-data)
2. [**What you can do**](#what-you-can-do)
3. [**Installation**](#installation)
4. [**Disable**](#disable)

## Structured data

|You'll Get|
|:------|
|<i>+</i>[`context.system`](/concepts/log-event-json-schema/context/system-context)|

## What you can do

1. [**Search your logs with this data**](/app/console/searching) - `system.hostname:server123.myhost.com`
2. [**Access this data by viewing a log's metadata & context**](/app/console/view-metadata-and-context)

## Installation

This integration is installed automatically upon initialization. There is nothing you need to do.

## Disable

Currently this integration cannot be disabled due to the [very basic nature of the data it captures](/concepts/log-event-json-schema/context/system-context). If you have a specific use case that requires this, please [contact support](mailto:support@timber.io) as we'd be happy to add this option for you.
