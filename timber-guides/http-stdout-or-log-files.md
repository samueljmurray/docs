---
title: HTTP, STDOUT, or Log Files?
---
Configuring logging within your application and deciding on a log destinations can sometims be a complicated process. The purpose of this document is to help simplify this process and explain why you'd choose each destination. By no means is this is comprehensive list, but it does contain the popular methods used by most Timber customrs:

1. [**HTTP**](#http)
2. [**STDOUT**](#stdout)
3. [**Files**](#files)


## HTTP (simplest)

Through the use of Timber's [libraries](/timber-for-languages) you can ship logs directly from your application to the Timber service. This is the simplest of methods as it only requires setup within your app, the library will handle the rest. The downside is decreased durability. If network communication fails, logs are held in memory in a buffer. If the server restarts, or that buffer overflows, logs will be dropped.


## STDOUT

[Standard out](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_.28stdout.29) is an output stream that can be captured and redirected to a variety of sources. It's generally a best practice, but it is also a more advanced option as it requires server level configuration to capture the stream and redirect it to the desired destination.


## Files

Logging to a file is an age old practice. The advantage of using a file is durability. Your logs are written to disk and will not be lost in the case of a server restart. The downside is that you have to manage and monitor log files, making sure to rotate them so they don't consume excessive disk space. It is generally recommended that you application log to STDOUT where you can delegate the destination configuration to the server level.
