# AWS Beanstalk Installation

1. In your `shell` add the `TIMBER_API_KEY` env variable: **<small style="float: right">[prefer using the AWS console?](//images.contentful.com/h6vh38q7qvzk/4hM3wompS0gWSyuGKGQkok/a5ca83199a650e39ae6597d4d77fba76/Screen_Recording_2017-08-11_at_02.01_PM.gif)</small>**

   ```shell
   eb setenv TIMBER_API_KEY={{my-timber-api-key}}
   ```

2. In your `shell` add the [Timber ebextension file](https://raw.githubusercontent.com/timberio/agent/master/support/scripts/platforms/aws_elastic_beanstalk/01_timber_install.config) by executing:

   ```shell
   mkdir -p .ebextensions && curl -o .ebextensions/01_timber_install.config https://raw.githubusercontent.com/timberio/agent/master/support/scripts/platforms/aws_elastic_beanstalk/01_timber_install.config
   ```

3. Open `.ebextensions/01_timber_install.config` and replace the `path` variables with the paths of the log files you'd like to send. [**Unsure which paths to use?**](/platforms/aws-beanstalk/configuration/sending-multiple-log-files#common-log-file-paths)

4. Package your source bundle as usual and upload it to AWS Elastic Beanstalk.

---

### Related docs

1. [**Obtaining your API key**](/app/applications/obtaining-your-api-key)
2. [**Timber for languages**](/languages)
