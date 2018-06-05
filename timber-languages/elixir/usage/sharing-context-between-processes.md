# Sharing Context Between Processes

The `Timber.Context` is local to each process, this is by design as it prevents processes from
conflicting with each other as they maintain their contexts. But many times you'll want to share
context between processes because they are related (such as processes created by `Task` or `Flow`).
In these instances copying the context is easy.


## How to use it

```elixir
current_context = Timber.CurrentContext.load()

Task.async fn ->
  Timber.CurrentContext.save(current_context)
  Logger.info("Logs from a separate process")
end
```


## How it works

`current_context` in the above example is captured in the parent process, and because Elixir's variable scope is lexical, you can pass the referenced context into the newly created process. `Timber.CurrentContext.save/1` copies that context into the new process dictionary.
