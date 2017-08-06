<template>
<div>
  <h1 class="uk-heading-primary">ePickList</h1>
  <p>ePickList (ePL) is a Linnworks application that generates an electronic pick list for your orders. ePL has been designed to improve your warehouse picking in two key areas:</p>
  <ul class="uk-list uk-list-bullet">
    <li><b>Paper Waste</b>: without having to print paper pick lists, you stand to save time &amp; money by using an electronic alternative.</li>
    <li><b>Human Error</b>: by implementing restrictions, such as forced barcode scanning and user permissions, you can cut down on human error, like when warehouse staff accidentally pick the wrong item for an order.</li>
  </ul>
  <p>Using ePL, you will be able to create interactive pick lists, that are simple and easy for warehouse staff to use. Once you have picked all the items you need to, ePickList can flag those picked orders, so that you can identify and manage them after a pick.</p>

  <div id="singleorderpick"></div>
  <hr class="uk-margin-large"/>
  <div>
      <h2>Single Order Pick</h2>
      <p>ePL has two distinct modes for order picking. To pick a single order at a time, use the menu toggle located at the top right of the screen to select ‘pick by order’ mode.</p>
      <p>Simply scan or type a Linnworks order ID into the search field, and ePL will return a full list of order items, ready for picking.</p>
      <p>While an order is being picked, ePL will assign the <b>Pick List Printed</b> flag to the order in Linnworks.net.</p>
      <p>Aborting the pick will remove the <b>Pick List printed</b> flag from the order, and finishing a pick will trigger any pick actions that you have configured.</p>

      <!--
      <div uk-lightbox class="uk-visible@m">
        <a href="/single-order-pick-desk.png">
          <img src="/single-order-pick-desk.png">
        </a>
      </div>
      
      <img src="/single-order-pick-mob.png" class="uk-hidden@m">
      -->
  </div>

  <div id="bulkorderpick"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Bulk Order Pick</h2>
    <p>ePL is best used when picking for multiple orders all at the same time. When ePL generates a bulk pick list, it groups all items together, regardless of order relation, so your warehouse staff are making the most of their allotted time.</p>
    <p>To switch to bulk picking mode, tap the menu toggle at the top right of the screen, and select <b>Pick by View</b>.</p>
    <p>While orders are being picked, ePL will assign the <b>Pick List Printed</b> flag to the order in Linnworks.net. This can be useful, as configuring a Linnworks.net view to only show orders that have not had their pick list printed, means that you can hide all orders that are currently being picked from all future lists. This is great when you have more than one picker using the app at the same time.</p>
    <p>Aborting the pick will remove the <b>Pick List printed</b> flag from the order, and successfully picking enough items to fulfil an order will trigger any pick actions that you have configured to run against that order.</p>
    <p>Once you have picked enough items to fulfil at least one order, you have the option to end the pick list early. For orders that have not been picked, this is the same as aborting the pick, however orders that have been picked will still retain their pick action.</p>
  </div>

  <div id="pickamount"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Pick Amount</h2>
    <p>When working on a pick list, tap the menu icon at the top right of the screen to change your pick amount.</p>
    <ul class="uk-list uk-list-bullet">
      <li><b>One</b>: a tap or scan will add a single item to the amount required for that pick</li>
      <li><b>Many</b>: a tap or scan will open a keyboard, allowing the user to select how many is being picked</li>
      <li><b>All</b>: a tap or scan will mark the entire item row as picked, picking all of that item in one go</li>
    </ul>
  </div>

  <div id="picksource"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Pick Source</h2>
    <h4>Single Order Pick</h4>
    <p>This setting allows you to select which Linnworks.net warehouse location you want to pick from. You can only pick orders that exist in the select location</p>
    <h4>Bulk Order Pick</h4>
      <p>When generating a pick list for multiple orders in bulk, ePL makes use of you existing Linnworks.net open order views.</p>
      <p>Because Linnworks.net open order views are user specific, first select a user. ePL will now only be looking at this user’s views.</p>
      <p>Once you have selected a view, ePL will only allow you to pick orders from that view. It may be worth setting up a ready to pick view in Linnworks, so that you know you are only selecting orders that are actually ready to be picked.</p>
      <p>Alternatively, you can use the EPL Recommended view. This isn’t a view that exists in your Linnworks account, but is a view we have created to allow you to get started quickly, without having to manage your Linnworks.net views. This view has predefined filters. To be included in this view, the order must</p>
    <ul class="uk-list uk-list-bullet">
      <li>Be Paid</li>
      <li>Not be locked or parked</li>
      <li>Have enough of its items in stock to be fulfilled</li>
      <li>Not already have its <b>pick list printed</b> flag set</li>
    </ul>
  </div>

  <div id="pickoptions"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Pick Options</h2>
    <p>In Pick Options, you can change how ePL behaves while you work on a pick</p>
    <ul class="uk-list uk-list-bullet">
      <li>Composite Mode lets you choose between showing composite children or parents</li>
      <li>Pick Sort allows you to customise how the order’s items are arranged on screen</li>
      <li>Auto Focus to Input Box means that after each pick, focus is always brought back to the search field. This option is perfect for paired barcode scanners</li>
      <li>Move Picked Items to Bottom will instruct ePL to move an item row all the way to the bottom of the pick list once it’s been fully picked.</li>
    </ul>
  </div>

  <div id="pickrequirements"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Pick Requirements</h2>
    <p>The Pick Requirements setting lets you choose if you want to force the picker to scan the correct item SKU or Barcode before an item can be marked as picked.</p>
  </div>

  <div id="pickactions"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Pick Actions</h2>
    <p>Under Pick Actions, you can decide what happens to the order once it’s picked. You can choose to assign the order to a folder, assign a tag to the order, or both! You can even decide whether or not you want ePL to trigger an invoice print once the order has been fully picked.</p>
  </div>

  <div id="settings"></div>
  <hr class="uk-margin-large"/>
  <div>
    <h2>Additional Settings</h2>
    <p>The Additional settings allows you to decide if you want images & stock levels visible in your pick. If you have a slow internet connection, it may be worth disabling these.</p>
  </div>

  <hr class="uk-margin-large-top"/>
  <a class="uk-align-right" href="#" uk-totop uk-scroll></a>
</div>
</template>

<script>
export default {
  head() {
      return {
        title: 'ePickList'
      }
  }
}
</script>