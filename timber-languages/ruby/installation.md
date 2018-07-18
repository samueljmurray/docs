---
related:
- /languages/ruby/installation/manual
- /app/applications/obtaining-your-api-key
- /languages/ruby/troubleshooting
video_url: https://images.ctfassets.net/h6vh38q7qvzk/2Fx4sgYcbe8kKi4smywIKK/f33553257e41014771d21eafa4e22cea/0211f1d87004a059441f536b87b72802.gif
---

1. In your `Gemfile`, *add* the `timber` gem: <small style="float: right" class="platform-alt"><a href="/platforms">prefer to integrate with your platform instead?</a></small>

    ```ruby
    gem 'timber', '~> 2.6'
    ```

2. In your `shell`

   ```shell
   bundle install && bundle exec timber install {{my-timber-api-key}}
   ```