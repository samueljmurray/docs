# Tracking External Service Communication

We use this trick internally at Timber to track communication with external services.
It logs requests and responses to external services, giving us insight into response times and
failed requests.

### How to use it

Below is a contrived example of submitting an invoice to Stripe.

```elixir
alias Timber.Events.HTTPRequestEvent
alias Timber.Events.HTTPResponseEvent

method = :get
url = "https://api.stripe.com/v1/invoices"
body = "{\"customer\": \"cus_BHhZyYRirFrPkz\"}"
headers = %{}

Logger.info fn ->
  event = HTTPRequestEvent.new(direction: "outgoing", service_name: "stripe", method: method, url: url, headers: headers, body: body)
  message = HTTPRequestEvent.message(event)
  {message, [event: event]}
end

case :hackney.request(method, url, headers, body, with_body: true) do
  {:ok, status, resp_headers, resp_body} ->
    Logger.info fn ->
      event = HTTPResponseEvent.new(direction: "incoming", service_name: "stripe", status: status, headers: resp_headers, body: resp_body)
      message = HTTPResponseEvent.message(event)
      {message, [event: event]}
    end

  {:error, error} ->
    message = Exception.message(error)
    Logger.error(message, event: error)
    {:error, error}
end

```

*Note: Only `method` is required for `HTTPRequestEvent`, and `status` for `HTTPResponseEvent`.
`body`, if logged, will be truncated to `2048` bytes for efficiency reasons. This can be adjusted
with [`Timber.Config.http_body_size_limit/0`](https://hexdocs.pm/timber/Timber.Config.html#http_body_size_limit/0).*

1. [Search it](/app/console/searching) with queries like: `http_request.service_name:stripe`
2. [Alert on it](/app/console/alerts) with threshold based alerts
3. [View this log's metadata in the console](/app/console/view-a-logs-metadata-context)
4. ...read more in our [docs](/languages/elixir/usage/tracking-background-jobs-and-tasks)
