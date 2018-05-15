Optimizing your log data usage not only reduces cost, but also increases the effectiveness of your logs by eliminating noise. Because logs come in a variety of shapes and sizes, we recommend the following methods, they are ordered by the least likely to reduce the log quality:

1. [Silence noisy endpoints](#silence-noisy-endpoints)
2. [Silence noisy logs](#slience-noisy-logs)
3. [Reduce structured data](#reduce-structured-data)

## Silence noisy endpoints

It's not uncommon for applications to offer endpoints that generate noisy request logs. Two perfect examples of this are load balancer health check and static asset endpoints. While both are very important to the function of your application, they offer little value when using your logs for application insight. If you're using any of the [Timber libraries](/docs/libraries) silencing these endpoints is easy:

* [Timber for Ruby: Silence noisy requests](/docs/languages/ruby/configuration/silence-noisy-requests)
* [Timber for Elixir: Blacklisting routes](/docs/languages/elixir/configuration/blacklisting-routes)

If you are not using a Timber library, please refer to your framework's logging documentation.

## Silence noisy logs

Regardless of where you send your log data, you'll want to eliminate noisy log lines that offer little value. A perfect example of this is Rails' template render logs, while helpful in the `development` environment, they are considerably unhelpful in `production`. We recommend silencing logs of this nature. If you're using any of the [Timber libraries](/docs/languages) you can silence specific integrations. We recommend starting with the following documentation depending on your language:

* [Timber for Ruby: Select which data you capture](/docs/languages/ruby/configuration/select-which-data-you-capture)
* [Timber for Elixir: Select which data you capture](/docs/languages/elixir/configuration/select-which-data-you-capture)

If you are not using a Timber library, please refer to the relevant documentation that is generating the log.

## Reduce structured data

If the above 2 methods do not reduce your logs to a satisfactory level, we recommend reducing the amount of structured data Timber captures. Keep in mind, this can significantly reduce the utility of your logs and this method should be seen as a last resort.

To begin, it's assumed you understand Timber's [metadata, context, and events concept](/docs/concepts/metadata-context-and-events). If you do not, we recommend reading that document. This is precisely the data you'll be eliminating, but you should do so in a careful manner that suits your specific application. Just like above, we recommend starting with the following documentation depending on your language:

* [Timber for Ruby: Select which data you capture](/docs/languages/ruby/configuration/select-which-data-you-capture)
* [Timber for Elixir: Select which data you capture](/docs/languages/elixir/configuration/select-which-data-you-capture)

Each integration offers a "disable" section that provides instructions for disabling each integration.
