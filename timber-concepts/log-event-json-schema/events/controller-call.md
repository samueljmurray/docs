---
title: Log Event JSON Schema - event.controller_call
---
*Note: Our [libraries](/docs/languages) integrate with frameworks and libraries to log this event automatically.*

The `controller_call` event represents an invocation of your controller within the HTTP
request cycle. The order of events generally looks like:

```
Started Get "/"
Processing by WelcomeController#index as html <-------------------------
Rendered welcome/index.html.erb within layouts/application (0.2ms)
Completed 200 OK in 2.46ms
```


## Example JSON Structure

Go from this:

```
Processing by WelcomeController#index as html
```

To this

```json
{
  "message": "Processing by WelcomeController#index as html",
  "event": {
    "controller_call": {
      "controller": "WelcomeController",
      "action": "index",
      "params_json": "{\"id\": 2, \"type\": \"user\"}"
    }
  }
}
```


## Field descriptions

Name | Type | Description
-----|------|------------
`controller` | `string` | The class name of the controller called.
`action` | `string` | The action name of the controller action called.
`params_json` | `string` | A JSON representation of the parsed parameters sent to the controller. This is great for request inspect to ensure the data being sent to your controllers is correct.


## Using this data

Example queries:

* Searching: `controller_call.controller:WelcomeController`
* Only this event: `is:controller_call`

See our doc on [searching](/docs/app/console/searching).

---

### Related Docs

1. [**Metadata, context, and events**](/docs/concepts/metadata-context-and-events)
2. [**Timber libraries**](/docs/languages)
