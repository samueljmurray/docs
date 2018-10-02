# How It Works

Timber's alerting system is *stateful* and *threshold* based, giving you complete control over an alert's sensitivity. This makes alerts conducive for callbacks, where actions are taken based on state changes. For example, using web hooks to automatically scale infrastructure resources. The best way to demonstrate how alerts works is with a graph:

![Alerts - Demo](//images.contentful.com/h6vh38q7qvzk/bSGJvrOktG0ws0KO4McC2/0c59e40e5d94aee7f50e323b80244db9/Image_2017-08-14_at_10.30.51_PM.png)

The above example demonstrates the common error rate alert. You'll notice the alert only changes states twice, from `raised` to `cleared`, despite the fact it was raised for 40 minutes (well beyond the 10 minute window). We'll discuss the following concepts below:

1. [**States**](#states)
2. [**Windows**](#windows)
3. [**Notification**](#notifications)


## States

Timber alerts come in only 2 states:

1. `raised` - The alert has surpassed it's specified threshold.
1. `cleared` - The alert is under it's specified threshold.


## Windows

Windows control sensitivity. Consider the scenario where error rates suddenly rise but quickly resolve due to defensive programming practices. There is no need to raise an alert because your code worked as expected, it recovered and healed from the intermittent issue. But there is a length of time where a resolution is expected and if the error continues action must be taken. This is exactly the purpose of windows: to delineate when an alert is real or a false positive.


## Notifications

Notifications are only triggered on state changes. This ensures alerts are meaningful with reduced noise.
