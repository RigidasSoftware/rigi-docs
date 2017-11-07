<template>
<div>
  <h1 class="uk-heading-primary">Currency Tracker</h1>
  <p>Currency Tracker is a Linnworks application that keeps your Linnworks currency rates up to date.</p>
  <p>Using Currency Tracker, your currency rates will be updated regularly, this will help to improve the accuracy of reports and will also enable you to keep prices competitive.</p>

  <div uk-lightbox class="uk-visible@m">
    <a href="/currency-tracker.desk.png">
      <img src="/currency-tracker.desk.png">
    </a>
  </div>

  <div uk-lightbox class="uk-hidden@m">
    <a href="/currency-tracker.mob.png">
      <img src="/currency-tracker.mob.png">
    </a>
  </div>

  <div id="trackuntrack"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Track/Untrack Currency Rates</h2>
    <p>Tracking a currency rate will automatically add the rate to the Manage Currencies list on the <b>General Settings</b> screen in Linnworks and every time the currency rate changes, Currency Tracker will automatically update it.</p>
    <p>To <b>track</b> a currency, open Currency Tracker, set the filter to '<b>Not-Tracked</b>' and click on the '<b>Track</b>' button for all of the rates you wish to track. You may have noticed that any currencies that are already in the <b>Manage Currencies</b> list on the <b>General Settings</b> screen in Linnworks are already tracked.</p>

    <div uk-lightbox class="uk-visible@m">
      <a href="/track.desk.png">
        <img src="/track.desk.png">
      </a>
    </div>

    <div uk-lightbox class="uk-hidden@m">
      <a href="/track.mob.png">
        <img src="/track.mob.png">
      </a>
    </div>

    <p>To <b>untrack</b> a currency, open Currency Tracker, set the filter to '<b>Tracked</b>' and click on the '<b>Untrack</b>' button for all of the rates you wish stop tracking. Please note that in order for Currency Tracker to stop tracking a currency, it must be <b>deleted</b> from Linnworks.</p>

    <div uk-lightbox class="uk-visible@m">
      <a href="/untrack.desk.png">
        <img src="/untrack.desk.png">
      </a>
    </div>

    <div uk-lightbox class="uk-hidden@m">
      <a href="/untrack.mob.png">
        <img src="/untrack.mob.png">
      </a>
    </div>
  </div>

  <div id="faq"></div>
  <hr class="FAQ">
  <div>
    <h2>FAQ</h2>

    <h4>How often are my currencies updated?</h4>
    <p>Linnworks currency rates are updated <b>hourly</b>. This will ensure that when new currency rates are available, they are updated quickly as there's no guarantee that our data source will update when we expect it to.</p>
    
    <h4>Where do the currency rates come from?</h4>
    <p>Currency Tracker uses data from the <a href="http://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html" target="_blank">European Foreign Exchange</a>, these rates are usually updated around 15:00 UTC on every working day.</p>
    
    <h4>How do I change my base currency?</h4>
    <p>You can find out how to change your Linnworks base currency using the <a href="http://www.linnworks.com/support/settings/linnworks-general-settings/general-settings/manage-currencies" target="_blank">Manage Currencies</a> Linnworks documentation.</p>
    
    <h4>Which currencies can be updated?</h4>
    <p>Currency Tracker can get exchange rates for the following currencies:</p>

    <div class="uk-grid-small uk-child-width-1-2" uk-grid>
      <div>
        <ul class="uk-list uk-list-bullet">
          <li>AUD</li>
          <li>BGN</li>
          <li>BRL</li>
          <li>CAD</li>
          <li>CHF</li>
          <li>CNY</li>
          <li>CZK</li>
          <li>DKK</li>
          <li>EUR</li>
          <li>GBP</li>
          <li>HKD</li>
          <li>HRK</li>
          <li>HUF</li>
          <li>IDR</li>
          <li>ILS</li>
          <li>INR</li>
        </ul>
      </div>
      <div>
        <ul class="uk-list uk-list-bullet">
          <li>JPY</li>
          <li>KRW</li>
          <li>MXN</li>
          <li>MYR</li>
          <li>NOK</li>
          <li>NZD</li>
          <li>PHP</li>
          <li>PLN</li>
          <li>RON</li>
          <li>RUB</li>
          <li>SEK</li>
          <li>SGD</li>
          <li>THB</li>
          <li>TRY</li>
          <li>USD</li>
          <li>ZAR</li>
        </ul>
      </div>
    </div>
  </div>
  
  <hr class="uk-margin-large-top"/>

  <a class="uk-align-right" href="#" uk-totop uk-scroll></a>
</div>
</template>

<script>
export default {
  head() {
      return {
        title: 'Currency Tracker'
      }
  }
}
</script>
