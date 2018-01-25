<template>
<div class="uk-offcanvas-content">
    <div class="uk-grid-collapse" uk-grid>
        <div class="uk-width-1-1">
            <div class="uk-width-1-1 uk-navbar-container" uk-navbar>
                <div class="uk-width-1-1 uk-container uk-container-expand rigi-top-bar">
                    <nav class="uk-width-1-1 uk-navbar">
                        <div class="uk-navbar-left">
                            <a href="https://rigidassoftware.co.uk" class="uk-navbar-item uk-logo">
                                <img class="rigi-logo" src="~assets/naked-long-logo.png">
                            </a>
                        </div>
                        <div class="uk-navbar-right">
                            <a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"></a>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        <div class="uk-width-1-1">
            <div class="uk-grid-large uk-grid-match" uk-grid>
                <div class="uk-width-1-4@m uk-visible@m">
                    <div class="rigi-sidebar-left uk-margin-left uk-margin-top uk-margin-right" data-uk-sticky>
                        <h3>Documentation</h3>
                        <ul class="uk-nav uk-nav-default uk-margin-right">
                            <li class="uk-nav-header">General</li>
                            <li><a href="/general">Permissions</a></li>
                        </ul>
                        <ul class="uk-nav uk-nav-default uk-margin-right">
                            <li class="uk-nav-header">StockWise</li>
                            <li><a href="/stockwise">Concept</a></li>
                            <li><a href="/stockwise#searchingandscanning">Searching and Scanning</a></li>
                            <li><a href="/stockwise#locations">Locations</a></li>
                            <li><a href="/stockwise#stockenquiry">Stock Enquiry</a></li>
                            <li><a href="/stockwise#suppliers">Suppliers</a></li>
                            <li><a href="/stockwise#stockitemhistory">Stock Item History</a></li>
                            <li><a href="/stockwise#stockin">Stock In</a></li>
                            <li><a href="/stockwise#stockcount">Stock Count</a></li>
                            <li><a href="/stockwise#purchaseorders">Purchase Orders</a></li>
                            <li><a href="/stockwise#permissions">Admin Mode and Permissions</a></li>
                            <li><a href="/stockwise#settings">Settings</a></li>
                        </ul>
                        <ul class="uk-nav uk-nav-default uk-margin-right">
                            <li class="uk-nav-header">ePickList</li>
                            <li><a href="/epicklist">Concept</a></li>
                            <li class="uk-navbar-subtitle"><a href="/epicklist#pick-modes">Pick Modes</a></li>
                            <li><a href="/epicklist#singleorderpick">Single Order Pick</a></li>
                            <li><a href="/epicklist#bulkorderpick">Bulk Order Pick</a></li>
                            <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                            <li class="uk-navbar-subtitle"><a href="/epicklist#settings">Settings</a></li>
                            <li><a href="/epicklist#settings_picksource">Source</a></li>
                            <li><a href="/epicklist#settings_generate">Generation</a></li>
                            <li><a href="/epicklist#settings_display">Display</a></li>
                            <li><a href="/epicklist#settings_afterpick">After Pick</a></li>
                            <li><a href="/epicklist#settings_scanning">Scanning</a></li>
                            <li class="uk-navbar-subtitle"><a href="/epicklist#pick-screen">Pick Screen</a></li>
                            <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                            <li><a href="/epicklist#itemview">Item View</a></li>
                            <li><a href="/epicklist#reportitem">Report Item</a></li>
                            <li><a href="/epicklist#batcheditems">Batched Items</a></li>
                            <li class="uk-navbar-subtitle">Admin</li>
                            <li><a href="/epicklist#epldashboard">Dashboard</a></li>
                        </ul>
                        <ul class="uk-nav uk-nav-default uk-margin-right">
                            <li class="uk-nav-header">Currency Tracker</li>
                            <li><a href="/currencytracker">Concept</a></li>
                            <li><a href="/currencytracker#trackuntrack">Track/Untrack</a></li>
                            <li><a href="/currencytracker#faq">FAQ</a></li>
                        </ul>
                    </div>
                </div>
                <div class="uk-width-3-4@m uk-width-1-2@l uk-width-1-1">
                    <div class="uk-section uk-section-default">
                        <div class="uk-container uk-container-small">
                            <nuxt/>
                        </div>
                    </div>
                </div>

                <div class="uk-width-1-4 uk-visible@l">
                    <div class="rigi-sidebar-right">
                        <ul class="uk-nav uk-nav-default uk-margin-left uk-margin-right uk-margin-top">
                            <li>
                                <a href="https://github.com/RigidasSoftware/rigi-docs/issues" target="_blank">
                                    <span uk-icon="icon: warning" class="uk-margin-small-right uk-icon"></span>
                                    <span class="uk-text-middle">Report Issue</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://rigidassoftware.co.uk/#/contact" target="_blank">
                                    <span uk-icon="icon: commenting" class="uk-margin-small-right uk-icon"></span>
                                    <span class="uk-text-middle">Get Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/RigidasSoftware/rigi-docs" target="_blank">
                                    <span uk-icon="icon: pencil" class="uk-margin-small-right uk-icon"></span>
                                    <span class="uk-text-middle">Edit this page</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="offcanvas" uk-offcanvas="mode: push; overlay: false" class="uk-offcanvas">
         <div class="uk-offcanvas-bar">
            <div class="uk-panel">
                <h3>Documentation</h3>
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">StockWise</li>
                    <li><a href="/stockwise" uk-toggle="target:#offcanvas">Concept</a></li>
                    <li><a href="/stockwise#searchingandscanning" uk-toggle="target:#offcanvas">Searching and Scanning</a></li>
                    <li><a href="/stockwise#locations" uk-toggle="target:#offcanvas">Locations</a></li>
                    <li><a href="/stockwise#stockenquiry" uk-toggle="target:#offcanvas">Stock Enquiry</a></li>
                    <li><a href="/stockwise#suppliers" uk-toggle="target:#offcanvas">Suppliers</a></li>
                    <li><a href="/stockwise#stockitemhistory" uk-toggle="target:#offcanvas">Stock Item History</a></li>
                    <li><a href="/stockwise#stockin" uk-toggle="target:#offcanvas">Stock In</a></li>
                    <li><a href="/stockwise#stockcount" uk-toggle="target:#offcanvas">Stock Count</a></li>
                    <li><a href="/stockwise#purchaseorders" uk-toggle="target:#offcanvas">Purchase Orders</a></li>
                    <li><a href="/stockwise#permissions" uk-toggle="target:#offcanvas">Admin Mode and Permissions</a></li>
                    <li><a href="/stockwise#settings" uk-toggle="target:#offcanvas">Settings</a></li>
                </ul>
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">ePickList</li>
                    <li><a href="/epicklist">Concept</a></li>
                    <li class="uk-navbar-subtitle"><a href="/epicklist#pick-modes">Pick Modes</a></li>
                    <li><a href="/epicklist#singleorderpick">Single Order Pick</a></li>
                    <li><a href="/epicklist#bulkorderpick">Bulk Order Pick</a></li>
                    <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                    <li class="uk-navbar-subtitle"><a href="/epicklist#settings">Settings</a></li>
                    <li><a href="/epicklist#settings_picksource">Source</a></li>
                    <li><a href="/epicklist#settings_generate">Generation</a></li>
                    <li><a href="/epicklist#settings_display">Display</a></li>
                    <li><a href="/epicklist#settings_afterpick">After Pick</a></li>
                    <li><a href="/epicklist#settings_scanning">Scanning</a></li>
                    <li class="uk-navbar-subtitle"><a href="/epicklist#pick-screen">Pick Screen</a></li>
                    <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                    <li><a href="/epicklist#itemview">Item View</a></li>
                    <li><a href="/epicklist#reportitem">Report Item</a></li>
                    <li><a href="/epicklist#batcheditems">Batched Items</a></li>
                    <li class="uk-navbar-subtitle">Admin</li>
                    <li><a href="/epicklist#epldashboard">Dashboard</a></li>
                </ul>
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">Currency Tracker</li>
                    <li><a href="/currencytracker" uk-toggle="target:#offcanvas">Concept</a></li>
                    <li><a href="/currencytracker#trackuntrack" uk-toggle="target:#offcanvas">Track/Untrack</a></li>
                    <li><a href="/currencytracker#faq" uk-toggle="target:#offcanvas">FAQ</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    asyncData(context) {
        return {
            //TODO:
        }
    }
}
</script>
