export default function (props) {
  const { Head, Page } = props

  return (
    <div>
      <Head>
        <meta name="google-site-verification" content="9ab5KRCpeJ6XCGXDlDhNjuaflSgfAEcy7zSlRNuCqDQ" />
      </Head>

      <Page />

      <script
        dangerouslySetInnerHTML={{ __html: `
          !function(){var analytics=window.analytics=window.analytics||[];if(!analytics.initialize)if(analytics.invoked)window.console&&console.error&&console.error("Segment snippet included twice.");else{analytics.invoked=!0;analytics.methods=["trackSubmit","trackClick","trackLink","trackForm","pageview","identify","reset","group","track","ready","alias","debug","page","once","off","on"];analytics.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);e.unshift(t);analytics.push(e);return analytics}};for(var t=0;t<analytics.methods.length;t++){var e=analytics.methods[t];analytics[e]=analytics.factory(e)}analytics.load=function(t){var e=document.createElement("script");e.type="text/javascript";e.async=!0;e.src=("https:"===document.location.protocol?"https://":"http://")+"files.timber.io/js/timber.min.js";var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(e,n)};analytics.SNIPPET_VERSION="4.0.0";
          analytics.load("ocCzUkf4zAaUOzyCbWelskTptGgenOAU");
          analytics.page();
          }}();
        ` }}
      />
    </div>
  )
}
