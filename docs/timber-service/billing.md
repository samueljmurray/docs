The documentation covers billing for the Timber hosted service.

## Billing plans

Timber's billing plans are publicly available on our [pricing page](/pricing). Each plan outlines it's retention and data volume limits, as well as the various features each plan includes. To ensure this page does not get out of sync, specific plan details can be found there. The most update to date details will be reflected there.

## Billing periods

Timber billing periods operate on a 30 day cycle, starting with the day the plan was activated. For example, if you upgraded to the 250gb plan on Oct 13, your billing period would start on October 13 and end on November 11. Unless you're [in a trail](#trials), you will be billed at the beginnning of your billing period.

## Trials

The first time you upgrade to a paid plan you will enter a 15 day trial period. This is a one time period that starts as soon as a paid plan is selected. If you stick with a paid plan, you will be charged at the end of your trial, and your [30 day billing period](#billing-periods) will begin. You can [upgrade and downgrade](#upgrades-&-downgrades) as much as you like during this period without affecting your trial. When your trial expires, you will be billed for the plan currently selected. If you do not want to pay for Timber, you must [cancel your account](#cancellations) or [downgrade](#upgrades-&-downgrades) to the Timber free plan before your trial ends.

## Upgrades & downgrades

You are free to upgrade and downgrade your account as much as you'd like. As noted in the [billing periods](#billing-periods) section, you will be billed at the beginning of your billing period. Changing plans will pro-rate your new

## Usage calculation

Usage is calculated every time you send data to the Timber service. The byte size of the raw request body is what's used to calculate usage. Timber defines 1GB as 1,000,000,000 bytes.

For example, if you send a request to `[POST] https://timber.io/frames`, and the byte size of the body is 2,000 bytes, then 2,000 bytes will be logged as usage for your account. Usage is applied against your current [billing period](#billing-periods) and reset when a new billing period begins.

## Usage overages

Each [billing plan](#billing-plans) defines a [billing period](#billing-periods) limit. This is the total amount of data you can send within a single billing period. In an effort to be customer friendly, Timber allows customers to send up to 120% of their billing period before denying additional data. This allows for ocassional and unexpected overages without interupting service. Once your account reaches 120% of the allowed usage, Timber will deny new data until you upgrade to a larger plan. Timber does not impose daily limits, the plan limit is the cumulative amount of data used since your billing period started.

## Cancellations

At any time you can cancel your Timber account. Simply head to the "General settings" section under "Settings". You will see a "delete your organization" link at the bottom of the page. You can also downgrade to the free plan if you'd like to keep your account without paying.

## Questions

If you have any questions regarding billing and your account, please do not hesitate to contact us. You can use the chat button in the bottom right of this page or email us a [support@timber.io](mailto:support@timber.io).
