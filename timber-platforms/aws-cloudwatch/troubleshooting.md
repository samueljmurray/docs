# AWS CloudWatch Troubleshooting

*If you're having trouble, don't hesitate to [contact us](mailto:support@timber.io)! We're passionate about providing good support and user experiences.*

### Step 1: Ensure lambda function delivery

1. Navigate to your Timber log delivery lambda function.
2. Click the `Actions` button and select `Configure test event`.
3. For the sample event template select `CloudWatch Logs`.
4. Click 'Save and Test`
5. In the `Log Output` section you should see output like this:

   ```
   START RequestId: 3ed0825a-7ade-11e7-8753-112924ed44f1 Version: $LATEST
   Received status 200
   END RequestId: 3ed0825a-7ade-11e7-8753-112924ed44f1
   REPORT RequestId: 3ed0825a-7ade-11e7-8753-112924ed44f1 Duration: 234.70 ms Billed Duration: 300 ms      Memory Size: 128 MB  Max Memory Used: 27 MB
   ```

   Notice the `Received status 200`. If you do not see that, you should see an error explaining why log delivery failed.


## Step 2: Ensure lambda is receiving the proper events

1. Navigate to your Timber log delivery lambda function.
2. Click the `Configure` tab and note the `Role` settings. Specifically the name of the role being used.
3. Ensure that the role has basic lambda execution permissions. Providing a deep dive into AWS Iam extends beyond the scope of Timber. We recommend [reading this AWS support document](http://docs.aws.amazon.com/lambda/latest/dg/with-s3-example-create-iam-role.html) which explains how to setup an Iam execution role for your lambda function. Fortunately they make it fairly easy.
