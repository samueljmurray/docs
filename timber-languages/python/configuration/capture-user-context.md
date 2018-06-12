# Capture User Context

By default Timber automatically captures [user context](/concepts/log-event-json-schema/context/user-context) using our [Python Libary](https://github.com/timberio/timber-python#context).

By default, all `TimberHandler` instances use the same context object (`timber.context`), but if you'd like to use multiple loggers/handlers, each with a different context, it is possible to explicitly create and pass your own by following the instructions below.

```python
import logging
import timber

logger = logging.getLogger(__name__)

context = timber.TimberContext()
timber_handler = timber.TimberHandler(api_key='...', context=context)
logger.addHandler(timber_handler)

with context(job={'id': 123}):
  logger.critical('Background job execution started')
  # ... code here
  logger.critical('Background job execution completed')
```