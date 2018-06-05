# Elixir Installation

1. In your `Mix.exs` file, *add* the `timber` dependency: <small style="float: right" class="platform-alt"><a href="/platforms">prefer to integrate with your platform instead?</a></small>

   ```elixir
   # Mix.exs

   def application do
     [applications: [:timber]]
   end

   def deps do
     [{:timber, "~> 2.5"}]
   end
   ```

2. In your `shell`, *run*: <a href="/languages/elixir/installation/manual" style="float: right"><small>prefer manual installation?</small></a><span style="float: right"><small>&nbsp;&nbsp;&bull;&nbsp;&nbsp;</small></span><a href="//images.contentful.com/h6vh38q7qvzk/1FWCu73TgcYA2CS2QSMcks/becc66cd44c64329926067d1959265e4/b40ac281902864862bfd7678a5873cb7.gif" target="_blank" style="float: right"><small>view example</small></a>

   ```shell
   mix deps.get && mix timber.install {{my-timber-api-key}}
   ```

---

### Related docs

1. [**Manual installation**](/languages/elixir/installation/manual)
2. [**Obtaining your API key**](/app/applications/obtaining-your-api-key)
3. [**Troubleshooting**](/languages/elixir/troubleshooting)
