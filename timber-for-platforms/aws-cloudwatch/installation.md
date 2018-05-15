1. <a href="https://console.aws.amazon.com/lambda/home?region=us-east-1#/create/configure-function?firstrun=true" target="_blank">Create a new lambda function</a> and jump to the `configure function` step. Fill out the form with: **<small style="float: right"><a href="//images.contentful.com/h6vh38q7qvzk/5MW6EzxV1CukcosWq0KYW2/12dacd546104e5c710df25ce0c7306d2/Screen_Recording_2017-08-07_at_06.32_PM.gif" target="_blank" class="view-example">view example</a></small>**

   <table style="font-size: 0.8em">
     <tr>
       <td style="text-align: right">Name</td>
       <td><code>cloudwatchLogsToTimber</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Runtime</td>
       <td><code>Python 3.6</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Code entry type</td>
       <td><code>Upload a file from Amazon S3</code></td>
     </tr>
     <tr>
       <td style="text-align: right">S3 link URL</td>
       <td>http://s3.amazonaws.com/packages.timber.io/cloudwatch-logs-lambda-function/timber-cloudwatch-logs-lambda-function-latest.zip</td>
     </tr>
     <tr>
       <td style="text-align: right">Environment variables</td>
       <td>Add <code>TIMBER_API_KEY</code> with value <code>{{MY-TIMBER-API-KEY}}</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Handler</td>
       <td><code>main.lambda_handler</code></td>
     </tr>
     <tr>
       <td style="text-align: right">IAM user</td>
       <td>Assign an IAM user with basic lambda execution permissions.</td>
     </tr>
   </table>

2. Navigate to your [CloudWatch log groups](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:): **<small style="float: right"><a href="//images.contentful.com/h6vh38q7qvzk/6N01JxcZHOYckUEeUmUCIi/05d4b2f4b296e330b4e93ef191ecee85/Screen_Recording_2017-08-27_at_10.13_AM.gif" target="_blank" class="view-example">view example</a></small>**

   1. Select the desired CloudWatch log group.
   2. Click the `actions` menu and select `Stream to AWS Lambda`.
   3. For `Lambda Function`, select the `cloudwatchLogsToTimber` function you just created. Click `next`.
   4. For `Log Format`, select `other` and leave the rest of the fields blank. Click `next`.
   5. Review the details and click `Start streaming`.

---

### Related docs

1. [**Obtaining your API key**](/docs/app/applications/obtaining-api-key)
2. [**Troubleshooting**](/docs/platforms/aws-cloudwatch-logs/troubleshooting)
