1. In your `Mix.exs` file, *add* the `timber` dependency:

   ```elixir
   # Mix.exs

   def application do
     [applications: [:timber]]
   end

   def deps do
     [{:timber, "~> 2.5"}]
   end
   ```

2. In your `shell`, *run*:

   ```shell
   mix deps.get && mix timber.install {{my-timber-api-key}}
   ```
