1. Grab a coffee. Elixir is welcomely explicit (we love Elixir and use it internally at Timber), so the manual installation process requires more steps.

2. In your `Mix.exs` file, *add* the `timber` dependency:

   ```elixir
   # Mix.exs

   def application do
     [applications: [:timber]]
   end

   def deps do
     [{:timber, "~> 2.5"}]
   end
   ```

3. In your `shell`, *run*:

   ```shell
   mix deps.get
   ```

4. Setup the base Timber logger configuration by *choosing* the appropriate delivery method. If you are unsure, please read our [HTTP, STDOUT, or log files? guide](/guides/http-stdout-or-log-files):

   * To send your logs over HTTP (recommended and simplest), add the following in your `config/config.exs` file:

     ```elixir
     # config/config.exs
     config :logger,
       backends: [Timber.LoggerBackends.HTTP],
       utc_log: true
     
     config :timber,
       api_key: "{{my-timber-api-key}}"
     ```
   
   * To send your logs to `STDOUT` (you'll need to [integrate with the appropriate platform](/docs/platforms)), all the following in your `config/config.exs` file:
   
     ```elixir
     # config/config.exs
     config :logger,
       backends: [:console],
       utc_log: true
     
     config :logger, :console,
       format: {Timber.Formatter, :format},
       metadata: [:timber_context, :event, :application, :file, :function, :line, :module, :meta]
     ```

5. Install the `Timber.Integrations`, skip any that you application does not use:

   - [`Phoenix` integration](/languages/elixir/integrations/phoenix#installation)
   - [`Plug` integration](/languages/elixir/integrations/plug#installation)
   - [`Ecto` integration](/languages/elixir/integrations/ecto#installation)
 
6. All done! Be sure to commit these changes and deploy.