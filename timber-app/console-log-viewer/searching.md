Searching your logs is arguably the most important feature a logging platform can provide, and Timber has taken great care to expose a simple, intuitive, yet powerful search syntax. It follows the [Lucene style syntax](https://lucene.apache.org/core/2_9_4/queryparsersyntax.html) with slight differences conducive to searching logs.

![App - Searching](//images.contentful.com/h6vh38q7qvzk/1PSwyA0Z9iGc64icYKA4Ei/26e68caa9316fc6364ec585b92e257d8/Screen_Recording_2017-08-12_at_12.44_PM.gif)


## Global Rules

1. All text searching is case *insensitive*.
2. Multiple successive terms combine to perform a phrase search and _narrow_ your results.
3. Special characters (`*` and `?`) can be escaped with a `\` or by wrapping the term in quotes `"paul*bunyan"` or `'paul*bunyan'`.


## Text Searching

<p></p>

| Condition | Example | Description
|:-|:-|:-
| **Keywords** <small>(intersection)</small> | `paul bunyan` | <small>Contains `paul` _and_ `bunyan`, _separately_.</small>
| **Exact matching** <small>(phrases)</small> | <span style="white-space: no-wrap">`"paul bunyan"`</span> | <small>Contains the phrase `paul bunyan`.</small>
| **Either / Or** | `paul OR bunyan` | <small>Contains `paul` _or_ `bunyan`.</small>
| **\* Wildcard** <small>(zero or _more_)</small> | `paul*bunyan` | <small>Contains `paul` and `bunyan` with zero or _more_ characters inbetween.</small>
| **? Wildcard** <small>(zero or _one_)</small> | `paul?bunyan` | <small>Contains `paul` and `bunyan` with zero or _one_ characters inbetween.</small>
| **Negation** <small>(single)</small> | `-paul` | <small>Does *not* contain `paul`.</small>
| **Negation** <small>(multiple)</small> | `-(paul bunyan)` | <small>Does *not* contain the phrase `paul bunyan`.</small>

<p></p>


## Attribute Searching

<p></p>

| Condition | Example | Description
|:-|:-|:-
| **Equals (:)** | `user.name:Paul` | <small>The field `user.name` equals `Paul`.</small>
| **Does not equal (:-)** | `user.name:-Paul` | <small>The field `user.name` does *not* equal `Paul`.</small>
| **Contains (*)** | `user.name:*Paul*` | <small>The field `user.name` contains `Paul`.</small>
| **Greater than (:>)** | `http_response.time_ms:>500` | <small>The field `http_response.time_ms` is greater than `500`.</small>
| **Greater than or eq to (:>=)** | `http_response.time_ms:>=500` | <small>The field `http_response.time_ms` is greater than or equal to `500`.</small>
| **Less than (:<)** | `http_response.time_ms:<500` | <small>The field `http_response.time_ms` is less than `500`.</small>
| **Less than (:<=)** | `http_response.time_ms:<=500` | <small>The field `http_response.time_ms` is less than or equal to `500`.</small>
| **Has** | `has:user.name` | <small>Has the field `user.name`.</small>
| **Missing** | `missing:user.name` | <small>Missing the field `user.name`.</small>

<p></p>


## Grouping & Negation

Any condition(s) can be grouped together with parenthesis and prefixed with a `-` negation operator. To demonstrate, here are a few examples with explanations:

* `user.name:*Paul* (500 OR error)` - The `user.name` field contains `Paul` *and* the log line contains `500` or `error`.
* `-(user.name:*Paul* (500 OR error))` - The inverse of the search above. This is similar to `!(..)` in programming.

---

### Related docs

1. [**Your application's dynamic schema**](/timber-concepts/application-schema)
2. [**The Timber Log JSON schema**](/timber-concepts/log-event-json-schema)
3. [**Metadata, context, & events**](/timber-concepts/metadata-context-and-events)
