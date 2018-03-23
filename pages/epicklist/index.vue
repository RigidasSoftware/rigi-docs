<template>
<div>
  <h1 class="uk-heading-primary">ePickList</h1>
  <p>ePickList (EPL) is a Linnworks application that generates an electronic pick list for your orders. EPL has been designed to improve your warehouse picking in two key areas:</p>
  <ul class="uk-list uk-list-bullet">
    <li><b>Paper Waste</b>: without having to print paper pick lists, you stand to save time &amp; money by using an electronic alternative.</li>
    <li><b>Human Error</b>: by implementing restrictions, such as forced barcode scanning and user permissions, you can cut down on human error, like when warehouse staff accidentally pick the wrong item for an order.</li>
  </ul>
  <p>Using EPL, you will be able to create interactive pick lists, that are simple and easy for warehouse staff to use. Once you have picked all the items you need to, ePickList can flag those picked orders, so that you can identify and manage them after a pick.</p>

  <hr class="uk-margin-large">
  <h1 id="pick-modes">Pick Modes</h1>
  <div>
    <div id="bulkorderpick"></div>
    <h2>Bulk Order Pick</h2>
    <p>EPL is best used when picking for multiple orders all at the same time. When EPL generates a bulk pick list, it groups all items together, regardless of order relation, so your warehouse staff are making the most of their allotted time.</p>
    <p>To switch to bulk picking mode, tap the menu toggle at the top right of the screen, and select <b>Pick by View</b>.</p>
    <p>While orders are being picked, EPL will assign the <b>Pick List Printed</b> flag to the order in Linnworks.net. This can be useful, as configuring a Linnworks.net view to only show orders that have not had their pick list printed, means that you can hide all orders that are currently being picked from all future lists. This is great when you have more than one picker using the app at the same time.</p>
    <p>Aborting the pick will remove the <b>Pick List printed</b> flag from the order, and successfully picking enough items to fulfil an order will trigger any pick actions that you have configured to run against that order.</p>
    <p>Once you have picked enough items to fulfil at least one order, you have the option to end the pick list early. For orders that have not been picked, this is the same as aborting the pick, however orders that have been picked will still retain their pick action.</p>
  </div>

  <div id="singleorderpick"></div>
  <div>
      <h2>Single Order Pick</h2>
      <p>To pick for a single order at a time, use the menu toggle located at the top right of the screen to select ‘pick by order’ mode.</p>
      <p>Simply scan or type a Linnworks order ID into the search field, and EPL will return a full list of order items, ready for picking.</p>
      <p>While an order is being picked, EPL will assign the <b>Pick List Printed</b> flag to the order in Linnworks.net.</p>
      <p>Aborting the pick will remove the <b>Pick List printed</b> flag from the order, and finishing a pick will trigger any pick actions that you have configured.</p>
  </div>

  <div id="jobpick"></div>
  <div>
    <h2>Job Pick</h2>
    <p>If you are using the Linnworks Order Workflow functionality, you can use ePickList to generate a pick list for all orders in a specified workflow job.</p>
    <p>To do this, first make sure you are in <b>Job pick</b> mode, by selecting it from the top right menu.</p>
    <p>Once you have configured your pick settings, you can search for a Job Name using the search bar located at the bottom of the screen.</p>
    <p>The job name can either be manually typed, or scanned from a barcode. Once ePickList has found the correct job, the pick list will be loaded, and you can begin picking.</p>
    <p><b>NOTE:</b> This functionality is not available to all Linnworks users. For more information about the Order Workflows feature, please contact Linnworks Support.</p>
  </div>
  <hr class="uk-margin-large">
  <h1>Settings</h1>
  <div id="settings">
    <p>The settings screen can be found by tapping on the menu icon (three dots) on the top right of the application, and selecting "Settings". This allows for complete control of what orders are picked by ePickList at any given time.</p>
  </div>
  <div id="settings_picksource"></div>
  <div>
    <h2>Source</h2>
    <h3>General Settings</h3>
    <h4>Location</h4>
    <p>This setting allows you to select which Linnworks warehouse location you want to pick from. You can only pick orders that exist in the selected location</p>
    
    <h3>Bulk Order Pick</h3>
    <p>When generating a pick list for multiple orders in bulk, EPL makes use of your existing Linnworks.net open order views.</p>
    <p>Because Linnworks.net open order views are user specific, the first thing you'll need to do is select a user. EPL will now only be looking at this user’s views.</p>
    <p>Once you have selected a view, EPL will only allow you to pick orders from that view. It may be worth setting up a <strong>ready to pick</strong> view in Linnworks, so that you know you are only selecting orders that are actually ready to be picked.</p>
    <p>Alternatively, you can use the EPL Recommended view. This isn’t a view that exists in your Linnworks account, but is a view we have created to allow you to get started quickly, without having to manage your Linnworks.net views. This view has predefined filters. To be included in this view, the order must</p>
    <ul class="uk-list uk-list-bullet">
      <li>Be Paid</li>
      <li>Not be locked or parked</li>
      <li>Have enough of its items in stock to be fulfilled</li>
      <li>Not already have its <b>pick list printed</b> flag set</li>
    </ul>
    <h4>User</h4>
    <p>The Linnworks user whose views will be used to filter orders. Remember, different users can have views with the same name, so be sure you've got the right user selected!</p>
    <h4>Open Order View</h4>
    <p>The Linnworks.net order view to load orders from. If you're setting up a view just for EPL, you needn't worry about things like what columns are visible; just make sure the filters only return the orders you want to pick, and we'll handle the rest.</p>
    <h4>Number of Orders</h4>
    <p>An order view can contain hundreds, or even thousands of orders at a time. To make sure no single picker is being set the impossible task of picking items for every single one of these in one go, you can set the number of orders ePickList will select from this view, from 1 up to 999. </p>

    <h3>Workflow Job Pick</h3>
    <h4>Listed Group</h4>
    <p>A workflow group from the Linnworks workflow screen. The job pick screen will display the next five jobs to be completed from the chosen group.</p>

    <h4>Job Restrictions</h4>
    <p>The pick restrictions sub screen allows some fine tuning over which specific workflow jobs can be picked up by the device. Scanning a job that is not allowed in a restriction will result in an error.</p>
    <ul>
      <li>Restrict all picks to be from the chosen worfklow group</li>
      <li>Allow pending jobs to be picked</li>
      <li>Allow completed jobs to be picks</li>
    </ul>

  </div>


  <div id="settings_generate"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Generation</h2>
    <p>The generation settings screen provides some fine-tuning over how a pick is created</p>

    <h4>Composite Mode</h4>
    <p>Choose how composite items should be added to the pick list.</p>
    <ul class="uk-list uk-list-bullet">
      <li>The <strong>Parent</strong> option will use the top level parent of a composite. You'll want to select this option if your composite items are pre-bundled and are considered one item.</li>
      <li>The <strong>Child</strong> instead uses the granular level items. When a composite is bundled only at the packing station, you'll want this option so you can see the individual items needed to complete the bundle.</li>
    </ul>

    <h4>Auto Pick Unlinked Items</h4>
    <p>If an item is unlinked, should it be automatically marked as picked? We leave this choice up to you. Service items and items that can't be physically scanned tend to fall under this category, so if you've got a fair few of those, it may be worth enabling this option.</p>

    <h4>Batch Assignment</h4>
    <p>Choose how batches should be treated</p>
    <b>Use existing assignment</b><br>
    <p>This is the default Linnworks implementation for batches. It will only assign batches for orders that have not been assigned yet. Any previously assigned batches will not be changed.</p>
    <b>Get latest batches. Retain manual changes</b><br>
    <p>This will get the latest batch information for all batches that have not been manually set in the open orders screen.</p>
    <b>Get latest batches for all</b><br>
    <p>This will get the latest batches for everything, overwriting manual changes as well</p>

  </div>


  <div id="settings_display"></div>
  <hr class="uk-margin-large">
  <div>

    <h2>Display</h2>
    <p>How items should be displayed during the pick</p>

    <h4>Pick Sort</h4>
    <p>EPL allows you to sort a picklist using either the item SKUs or the physical bin/rack.</p>

    <h4>Move Picked Items to Bottom</h4>
    <p>Find yourself scrolling past items you've already picked? Enabling this setting moves fully picked items to the bottom of the list, keeping them out of the way for a quicker pick.</p>

    <h4>Show Images</h4>
    <p>Enabling this setting adds an image column to the pick list, displaying the item's main Linnworks image to help you find it. This is especially useful on a larger phone or a tablet, but we really wouldn't recommend it on a smaller screen, where space is valuable.</p>

    <h4>Show Stock Levels</h4>
    <p>Adds the item's stock level as a column on the pick list. <strong> EPL gets these levels when the pick list is first generated, and does not automatically update, so the levels are only valid at the time of generation.</strong></p>
    <ul class="uk-list uk-list-bullet">
      <li>Show a stock level column on the pick. If you're using a device with too small a screen, the stock level won't show here even with this setting selected.</li>
      <li>Show the stock level in the item details screen</li>
    </ul>
  </div>

  <div id="settings_afterpick"></div>
  <hr class="uk-margin-large">
  <div>

    <h2>After Pick</h2>
    <p>Actions that occur after completing a pick</p>
    
    <h3>Summary</h3>
    <h4>Show Pick Summary</h4>
    <p>Display a post-pick summary of all picked and unpicked orders, along with any items that were flagged along the way.</p>

    <h3>Picked Orders</h3>
    <p>This section lets you perform actions on an order once it's been successfully picked</p>

    <h4>Pick Tag</h4>
    <p>Picked orders will have the selected Linnworks order tag assigned to them</p>

    <h4>Pick Folder</h4>
    <p>Picked orders will be assigned to the selected Linnworks folder</p>

    <h4>Invoice Printing</h4>
    <p>Picked orders will have an invoice printed. Invoices can be sent to a specific virtual printer within Linnworks, or to the default for the order.</p>

  </div>

  <div id="settings_scanning"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Scanning</h2>
    <p>epicklist is best used with a handheld scanner. These options enable a smoother experience.</p>
    
    <h4>Scan Required</h4>
    <p>Enable this option if you want to force the picker to scan the correct item SKU or Barcode before an item can be marked as picked. If not enabled, the picker will simply be able to set an item as picked by tapping the button to the right of the item row.</p>

    <h4>Auto Focus to Input Box</h4>
    <p>After each pick, focus will always be brought back to the search field. Coupled with the fact that EPL automatically clears the keyboard on a successful scan, this means that barcode scanners can be used to continually scan without interruption.</p>

    <h4>Hide Virtual Keyboard</h4>
    <p>An Android only option, this setting will prevent the on-screen keyboard from showing when using the scanner, allowing a larger screen space to be shown for picking</p>
  </div>      

  <hr class="uk-margin-large">
  <h1 id="pick-screen">Pick Screen</h1>
  <div>
    <div id="pickamount"></div>
    <h2>Pick Amount</h2>
    <p>When working on a pick list, tap the menu icon at the top right of the screen to change the "pick amount".</p>
    <ul class="uk-list uk-list-bullet">
      <li><b>One</b>: a tap or scan will add a single item to the amount required for that pick</li>
      <li><b>Many</b>: a tap or scan will open a keyboard, allowing the user to select how many of the item are being picked</li>
      <li><b>All</b>: a tap or scan will mark the entire item row as picked, picking all of that item in one go</li>
    </ul>
  </div>

  <div id="itemview"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Item View</h2>
    <p>When picking, you can tap on the SKU of an item to see more information about it. On this screen you can view</p>
    <ul class="uk-list uk-list-bullet">
      <li>An image of the item (the Linnworks main image)</li>
      <li>The item's SKU, title, barcode and bin/rack code</li>
      <li>How many need to be picked, and how many you have already picked</li>
      <li>A list of order IDs that require this item</li>
      <li>Where applicable, batch information</li>
    </ul>
    <p>You can also tap the flag icon at the top right of this screen to report the item...</p>
  </div>

  <div id="reportitem"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Reporting an Item</h2>
    <p>When picking, you can tap on the SKU of an item to see more information. On this screen, tapping the flag icon will let you report this item.</p>
    <p>When reporting an item, tap the 'reason' section to choose why you are reporting this item. There are two reasons you may want to report an item:</p>
    <ul class="uk-list uk-list-bullet">
      <li><b>Cannot find product:</b> For when you can't find the item in the bin/rack location specified</li>
      <li><b>Not enough to fulfil:</b> For when you can find the item, but there isn't enough in the bin/rack location specified to fully pick the item</li>
    </ul>
    <p>Reporting an item will leave a note on all the orders that could not be fulfilled, and flag these items in the ePickList Dashboard</p>
  </div>

  <div id="batcheditems"></div>
  <hr class="uk-margin-large">
  <div>
    <h2>Batched Items</h2>
    <p>If you are using the Stock Item Batching functionality in Linnworks, Linnworks will automatically assign your order items to the appropriate batches when ePickList generates a new pick.</p>
    <p>Once an order item has been assigned to a batch, you will see the batch number highlighted in green, located underneath the amount needed to be picked.</p>
    <p>If you decide that you cannot pick from the batches that Linnworks has assigned to these order items, you can change the batch assignment from the Report Item screen.</p>
    <p>On this screen you will be able to see all available batches for this item. Tapping one will allow you to re-arrange the batch allocation.</p>
  </div>
  
  <hr class="uk-margin-large">
  <h1>Admin</h1>
  <div>
    <div id="epldashboard"></div>
    <h2>EPL Dashboard</h2>
    <p>In Linnworks, you can see an overview of all your EPL picks from the EPL Dashboard.</p>
    <p>To view the dashboard in Linnworks.net, click the Apps button in the Linnworks.net left hand menu, and select ePickList. On this screen you can see every pick you have generated using ePicklist.</p>
    <p>The search bar allows you to find a specific pick by entering a pick reference. You can use the toggles to the right to view Active, Complete or Aborted picks.</p>
    <p>Clicking on a pick will allow you to see a list of orders and items included in that pick.</p>
    <p>The dashboard contains live information. Every action taken by a picker in EPL is reported instantly to this screen.</p>
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
