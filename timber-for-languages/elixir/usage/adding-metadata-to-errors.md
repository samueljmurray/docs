By default, Timber will capture and structure all of your errors and exceptions, there
is nothing additional you need to do. You'll get the exception `message`, `name`, and `backtrace`.
But, in many cases you need additional context and data. Timber supports additional fields
in your exceptions, simply add fields as you would any other struct.


## How to use it

```elixir
defmodule StripeCommunicationError do
  defexception [:message, :customer_id, :card_token, :stripe_response]
end

raise(
  StripeCommunicationError,
  message: "Bad response #{response} from Stripe!",
  customer_id: "xiaus1934",
  card_token: "mwe42f64",
  stripe_response: response_body
)
```


## How it works

When Timber transforms your exception into an [error event](/timber-concepts/log-event-json-schema/events/error-event) it maps the exception's attributes to the `metadata_json` attribute. `metadata_json` is a single `string` field that repsents your error's data in JSON format. The reason we went with this approach is to avoid adding noise to your schema, which would create an excessive amount of fields and attributes for indexing, when really these are needed for inspection purposes. The resulting JSON document looks like:

```json
{
  "message": "Bad response 500 from Stripe!",
  "level": "error",
  "event": {
    "error": {
      "type": "StripeCommunicationError",
      "metadata_json": {
        customer_id: "xiaus1934",
        card_token: "mwe42f64",
        stripe_response: "{\"message\": \"Internal Server Error\"}"
      }
    }
  }
}
```
