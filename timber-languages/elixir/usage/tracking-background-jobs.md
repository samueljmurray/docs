*Note: This tip refers to traditional background jobs backed by a queue. For native Elixir
processes we capture the `context.runtime.vm_pid` automatically. Calls like `spawn/1` and
`Task.async/1` will automatially have their `pid` included in the context.*

For traditional background jobs backed by a queue you'll want to capture relevant
job context. This allows you to segement logs by specific jobs, making it easy to debug and monitor your job executions. The most important attribute to capture is the `id`:


## How to use it

```elixir
%Timber.Contexts.JobContext{queue_name: "my_queue", id: "abcd1234", attempt: 1}
|> Timber.add_context()

Logger.info("Task execution started")
# ...
Logger.info("Task execution completed")
```

In the console you can [search this context](/app/console-log-viewer/searching) with a query like `job.id:abcd1234`.


## How it works

This strategy leverages [context](/concepts/metadata-context-and-events). Every log line written contains the `job` context. When your logs are received by the Timber service, they'll have the context included. The resulting JSON document for an example log will look like:

```json
{
  "message": "Task execution started",
  "level": "info",
  "context": {
    "job": {
      "queue_name": "my_queue",
      "id": "abcd1234"
    }
  }
}
```
