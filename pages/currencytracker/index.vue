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
          <li><strong>AED</strong>	United Arab Emirates Dirham</li>
          <li><strong>AFN</strong>	Afghan Afghani</li>
          <li><strong>ALL</strong>	Albanian Lek</li>
          <li><strong>AMD</strong>	Armenian Dram</li>
          <li><strong>ANG</strong>	Netherlands Antillean Guilder</li>
          <li><strong>AOA</strong>	Angolan Kwanza</li>
          <li><strong>ARS</strong>	Argentine Peso</li>
          <li><strong>AUD</strong>	Australian Dollar</li>
          <li><strong>AWG</strong>	Aruban Florin</li>
          <li><strong>AZN</strong>	Azerbaijani Manat</li>
          <li><strong>BAM</strong>	Bosnia-Herzegovina Convertible Mark</li>
          <li><strong>BBD</strong>	Barbadian Dollar</li>
          <li><strong>BDT</strong>	Bangladeshi Taka</li>
          <li><strong>BGN</strong>	Bulgarian Lev</li>
          <li><strong>BHD</strong>	Bahraini Dinar</li>
          <li><strong>BIF</strong>	Burundian Franc</li>
          <li><strong>BMD</strong>	Bermudan Dollar</li>
          <li><strong>BND</strong>	Brunei Dollar</li>
          <li><strong>BOB</strong>	Bolivian Boliviano</li>
          <li><strong>BRL</strong>	Brazilian Real</li>
          <li><strong>BSD</strong>	Bahamian Dollar</li>
          <li><strong>BTC</strong>	Bitcoin</li>
          <li><strong>BTN</strong>	Bhutanese Ngultrum</li>
          <li><strong>BWP</strong>	Botswanan Pula</li>
          <li><strong>BYR</strong>	Belarusian Ruble</li>
          <li><strong>BZD</strong>	Belize Dollar</li>
          <li><strong>CAD</strong>	Canadian Dollar</li>
          <li><strong>CDF</strong>	Congolese Franc</li>
          <li><strong>CHF</strong>	Swiss Franc</li>
          <li><strong>CLF</strong>	Chilean Unit of Account (UF)</li>
          <li><strong>CLP</strong>	Chilean Peso</li>
          <li><strong>CNY</strong>	Chinese Yuan</li>
          <li><strong>COP</strong>	Colombian Peso</li>
          <li><strong>CRC</strong>	Costa Rican Colón</li>
          <li><strong>CUC</strong>	Cuban Convertible Peso</li>
          <li><strong>CUP</strong>	Cuban Peso</li>
          <li><strong>CVE</strong>	Cape Verdean Escudo</li>
          <li><strong>CZK</strong>	Czech Republic Koruna</li>
          <li><strong>DJF</strong>	Djiboutian Franc</li>
          <li><strong>DKK</strong>	Danish Krone</li>
          <li><strong>DOP</strong>	Dominican Peso</li>
          <li><strong>DZD</strong>	Algerian Dinar</li>
          <li><strong>EGP</strong>	Egyptian Pound</li>
          <li><strong>ERN</strong>	Eritrean Nakfa</li>
          <li><strong>ETB</strong>	Ethiopian Birr</li>
          <li><strong>EUR</strong>	Euro</li>
          <li><strong>FJD</strong>	Fijian Dollar</li>
          <li><strong>FKP</strong>	Falkland Islands Pound</li>
          <li><strong>GBP</strong>	British Pound Sterling</li>
          <li><strong>GEL</strong>	Georgian Lari</li>
          <li><strong>GGP</strong>	Guernsey Pound</li>
          <li><strong>GHS</strong>	Ghanaian Cedi</li>
          <li><strong>GIP</strong>	Gibraltar Pound</li>
          <li><strong>GMD</strong>	Gambian Dalasi</li>
          <li><strong>GNF</strong>	Guinean Franc</li>
          <li><strong>GTQ</strong>	Guatemalan Quetzal</li>
          <li><strong>GYD</strong>	Guyanaese Dollar</li>
          <li><strong>HKD</strong>	Hong Kong Dollar</li>
          <li><strong>HNL</strong>	Honduran Lempira</li>
          <li><strong>HRK</strong>	Croatian Kuna</li>
          <li><strong>HTG</strong>	Haitian Gourde</li>
          <li><strong>HUF</strong>	Hungarian Forint</li>
          <li><strong>IDR</strong>	Indonesian Rupiah</li>
          <li><strong>ILS</strong>	Israeli New Sheqel</li>
          <li><strong>IMP</strong>	Manx pound</li>
          <li><strong>INR</strong>	Indian Rupee</li>
          <li><strong>IQD</strong>	Iraqi Dinar</li>
          <li><strong>IRR</strong>	Iranian Rial</li>
          <li><strong>ISK</strong>	Icelandic Króna</li>
          <li><strong>JEP</strong>	Jersey Pound</li>
          <li><strong>JMD</strong>	Jamaican Dollar</li>
          <li><strong>JOD</strong>	Jordanian Dinar</li>
          <li><strong>JPY</strong>	Japanese Yen</li>
          <li><strong>KES</strong>	Kenyan Shilling</li>
          <li><strong>KGS</strong>	Kyrgystani Som</li>
          <li><strong>KHR</strong>	Cambodian Riel</li>
          <li><strong>KMF</strong>	Comorian Franc</li>
          <li><strong>KPW</strong>	North Korean Won</li>
          <li><strong>KRW</strong>	South Korean Won</li>
          <li><strong>KWD</strong>	Kuwaiti Dinar</li>
          <li><strong>KYD</strong>	Cayman Islands Dollar</li>
          <li><strong>KZT</strong>	Kazakhstani Tenge</li>
          <li><strong>LAK</strong>	Laotian Kip</li>
          <li><strong>LBP</strong>	Lebanese Pound</li>
          <li><strong>LKR</strong>	Sri Lankan Rupee</li>
          <li><strong>LRD</strong>	Liberian Dollar</li>
          <li><strong>LSL</strong>	Lesotho Loti</li>
          <li><strong>LTL</strong>	Lithuanian Litas</li>
          <li><strong>LVL</strong>	Latvian Lats</li>
          <li><strong>LYD</strong>	Libyan Dinar</li>
          <li><strong>MAD</strong>	Moroccan Dirham</li>
          <li><strong>MDL</strong>	Moldovan Leu</li>
          <li><strong>MGA</strong>	Malagasy Ariary</li>
          <li><strong>MKD</strong>	Macedonian Denar</li>
          <li><strong>MMK</strong>	Myanma Kyat</li>
          <li><strong>MNT</strong>	Mongolian Tugrik</li>
          <li><strong>MOP</strong>	Macanese Pataca</li>
          <li><strong>MRO</strong>	Mauritanian Ouguiya</li>
          <li><strong>MUR</strong>	Mauritian Rupee</li>
          <li><strong>MVR</strong>	Maldivian Rufiyaa</li>
          <li><strong>MWK</strong>	Malawian Kwacha</li>
          <li><strong>MXN</strong>	Mexican Peso</li>
          <li><strong>MYR</strong>	Malaysian Ringgit</li>
          <li><strong>MZN</strong>	Mozambican Metical</li>
          <li><strong>NAD</strong>	Namibian Dollar</li>
          <li><strong>NGN</strong>	Nigerian Naira</li>
          <li><strong>NIO</strong>	Nicaraguan Córdoba</li>
          <li><strong>NOK</strong>	Norwegian Krone</li>
          <li><strong>NPR</strong>	Nepalese Rupee</li>
          <li><strong>NZD</strong>	New Zealand Dollar</li>
          <li><strong>OMR</strong>	Omani Rial</li>
          <li><strong>PAB</strong>	Panamanian Balboa</li>
          <li><strong>PEN</strong>	Peruvian Nuevo Sol</li>
          <li><strong>PGK</strong>	Papua New Guinean Kina</li>
          <li><strong>PHP</strong>	Philippine Peso</li>
          <li><strong>PKR</strong>	Pakistani Rupee</li>
          <li><strong>PLN</strong>	Polish Zloty</li>
          <li><strong>PYG</strong>	Paraguayan Guarani</li>
          <li><strong>QAR</strong>	Qatari Rial</li>
          <li><strong>RON</strong>	Romanian Leu</li>
          <li><strong>RSD</strong>	Serbian Dinar</li>
          <li><strong>RUB</strong>	Russian Ruble</li>
          <li><strong>RWF</strong>	Rwandan Franc</li>
          <li><strong>SAR</strong>	Saudi Riyal</li>
          <li><strong>SBD</strong>	Solomon Islands Dollar</li>
          <li><strong>SCR</strong>	Seychellois Rupee</li>
          <li><strong>SDG</strong>	Sudanese Pound</li>
          <li><strong>SEK</strong>	Swedish Krona</li>
          <li><strong>SGD</strong>	Singapore Dollar</li>
          <li><strong>SHP</strong>	Saint Helena Pound</li>
          <li><strong>SLL</strong>	Sierra Leonean Leone</li>
          <li><strong>SOS</strong>	Somali Shilling</li>
          <li><strong>SRD</strong>	Surinamese Dollar</li>
          <li><strong>STD</strong>	São Tomé and Príncipe Dobra</li>
          <li><strong>SVC</strong>	Salvadoran Colón</li>
          <li><strong>SYP</strong>	Syrian Pound</li>
          <li><strong>SZL</strong>	Swazi Lilangeni</li>
          <li><strong>THB</strong>	Thai Baht</li>
          <li><strong>TJS</strong>	Tajikistani Somoni</li>
          <li><strong>TMT</strong>	Turkmenistani Manat</li>
          <li><strong>TND</strong>	Tunisian Dinar</li>
          <li><strong>TOP</strong>	Tongan Paʻanga</li>
          <li><strong>TRY</strong>	Turkish Lira</li>
          <li><strong>TTD</strong>	Trinidad and Tobago Dollar</li>
          <li><strong>TWD</strong>	New Taiwan Dollar</li>
          <li><strong>TZS</strong>	Tanzanian Shilling</li>
          <li><strong>UAH</strong>	Ukrainian Hryvnia</li>
          <li><strong>UGX</strong>	Ugandan Shilling</li>
          <li><strong>USD</strong>	United States Dollar</li>
          <li><strong>UYU</strong>	Uruguayan Peso</li>
          <li><strong>UZS</strong>	Uzbekistan Som</li>
          <li><strong>VEF</strong>	Venezuelan Bolívar Fuerte</li>
          <li><strong>VND</strong>	Vietnamese Dong</li>
          <li><strong>VUV</strong>	Vanuatu Vatu</li>
          <li><strong>WST</strong>	Samoan Tala</li>
          <li><strong>XAF</strong>	CFA Franc BEAC</li>
          <li><strong>XAG</strong>	Silver (troy ounce)</li>
          <li><strong>XAU</strong>	Gold (troy ounce)</li>
          <li><strong>XCD</strong>	East Caribbean Dollar</li>
          <li><strong>XDR</strong>	Special Drawing Rights</li>
          <li><strong>XOF</strong>	CFA Franc BCEAO</li>
          <li><strong>XPF</strong>	CFP Franc</li>
          <li><strong>YER</strong>	Yemeni Rial</li>
          <li><strong>ZAR</strong>	South African Rand</li>
          <li><strong>ZMK</strong>	Zambian Kwacha (pre-2013)</li>
          <li><strong>ZMW</strong>	Zambian Kwacha</li>
          <li><strong>ZWL</strong>	Zimbabwean Dollar</li>
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
