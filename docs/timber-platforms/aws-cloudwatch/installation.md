<a href="https://console.aws.amazon.com/lambda/home?region=us-east-1#/create" target="_blank">Create a new lambda function</a> and follow one of the instruction sets.


1\. Select *Author from scratch*, fill out the form with the following, and click *Create function*: **<small style="float: right"><a href="http://res.cloudinary.com/timber/image/upload/v1527708912/aws-lambda-creation_l5zqqv.gif" target="_blank" class="view-example">view example</a></small>**

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
       <td style="text-align: right">Role</td>
       <td><code>Create new role from template(s)</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Role Name</td>
       <td><code>cloudwatchLogsToTimberRole<code></td>
     </tr>
     <tr>
       <td style="text-align: right">Policy Templates</td>
       <td><code>Basic Edge Lambda Permissions<code></td>
     </tr>
   </table>

2\. Fill out the *Function code* form **<small style="float: right"><a href="http://res.cloudinary.com/timber/image/upload/v1527708951/aws-lambda-function-code_oqeoe8.gif" target="_blank" class="view-example">view example</a></small>**

  <table style="font-size: 0.8em">
     <tr>
       <td style="text-align: right">Code entry type</td>
       <td><code>Upload a file from Amazon S3</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Runtime</td>
       <td><code>Python 3.6</code></td>
     </tr>
     <tr>
       <td style="text-align: right">Handler</td>
       <td><code>main.lambda_handler</code></td>
     </tr>
     <tr>
       <td style="text-align: right">S3 link URL</td>
       <td><a href=http://s3.amazonaws.com/packages.timber.io/cloudwatch-logs-lambda-function/timber-cloudwatch-logs-lambda-function-latest.zip>http://s3.amazonaws.com/packages.timber.io/cloudwatch-logs-lambda-function/timber-cloudwatch-logs-lambda-function-latest.zip</a></td>
     </tr>
  </table>

3\. Add TIMBER_API_KEY as an environment variable with value {{my-timber-api-key}}

OR

1\. Select *Serverless Application Repository*, search for `timber-logging`, and create the timber-logging function with your `TIMBER_API_KEY`. **<small style="float: right"><a href="http://res.cloudinary.com/timber/image/upload/v1527709016/aws-lambda-creation-blueprint_s0pgkh.gif" target="_blank" class="view-example">view example</a></small>**

Then:

1\. Add a trigger for your CloudWatch Logs group from the Lambda UI **<small style="float: right"><a href="http://res.cloudinary.com/timber/image/upload/v1527709061/aws-lambda-add-cloudwatch-trigger_tdf8un.gif" target="_blank" class="view-example">view example</a></small>**

  _Note you will have to create a trigger for every CloudWatch Logs group you want to send to Timber._

OR

1\. Navigate to your [CloudWatch log groups](https://console.aws.amazon.com/cloudwatch/home?region=us-east-1#logs:): **<small style="float: right"><a href="//images.contentful.com/h6vh38q7qvzk/6N01JxcZHOYckUEeUmUCIi/05d4b2f4b296e330b4e93ef191ecee85/Screen_Recording_2017-08-27_at_10.13_AM.gif" target="_blank" class="view-example">view example</a></small>**

   1. Select the desired CloudWatch log group.
   2. Click the `actions` menu and select `Stream to AWS Lambda`.
   3. For `Lambda Function`, select the `cloudwatchLogsToTimber` function you just created. Click `next`.
   4. For `Log Format`, select `other` and leave the rest of the fields blank. Click `next`.
   5. Review the details and click `Start streaming`.
