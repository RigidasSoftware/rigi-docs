<template>
<div>
    <div class="uk-offcanvas-content">
        <div class="uk-navbar-container">
            <div class="uk-container uk-container-expand rigi-top-bar">
                <nav class="uk-navbar">
                    <div class="uk-navbar-left">
                        <a href="#" class="uk-navbar-item uk-logo">
                            <img class="rigi-logo" src="~assets/naked-long-logo.png">
                        </a>
                    </div>
                    <div class="uk-navbar-right">
                        <a uk-navbar-toggle-icon href="#offcanvas" uk-toggle class="uk-navbar-toggle uk-hidden@m uk-navbar-toggle-icon uk-icon"></a>
                    </div>
                </nav>
            </div>
        </div>
        
        <div class="uk-grid-large rigi-content" uk-grid>
            <div class="uk-width-1-4@m uk-visible@m">
                <div class="rigi-sidebar-left">
                    <h3>Documentation</h3>
                    <ul class="uk-nav uk-nav-default">
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
                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-nav-header">ePickList</li>
                        <li><a href="/epicklist">Concept</a></li>
                        <li><a href="/epicklist#singleorderpick">Single Order Pick</a></li>
                        <li><a href="/epicklist#bulkorderpick">Bulk Order Pick</a></li>
                        <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                        <li><a href="/epicklist#picksource">Pick Source</a></li>
                        <li><a href="/epicklist#pickoptions">Pick Options</a></li>
                        <li><a href="/epicklist#pickrequirements">Pick Requirements</a></li>
                        <li><a href="/epicklist#pickactions">Pick Actions</a></li>
                        <li><a href="/epicklist#settings">Additional Settings</a></li>
                    </ul>
                    <ul class="uk-nav uk-nav-default">
                        <li class="uk-nav-header">Currency Tracker</li>
                        <li><a href="/currencytracker">Concept</a></li>
                        <li><a href="/currencytracker#trackuntrack">Track/Untrack</a></li>
                        <li><a href="/currencytracker#faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
            <div class="uk-width-1-2@m uk-width-1-1">
                <div class="uk-section uk-section-default">
                    <div class="uk-container uk-container-small">
                        <nuxt />
                    </div>
                </div>
            </div>

            <div class="uk-width-1-4 uk-visible@m">
                <div class="rigi-sidebar-right">
                    <ul class="uk-nav uk-nav-default">
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

    <div id="offcanvas" uk-offcanvas="mode: push; overlay: false" class="uk-offcanvas">
        <div class="uk-offcanvas-bar">
            <div class="uk-panel">
                <h3>Documentation</h3>
                <ul class="uk-nav uk-nav-default">
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
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">ePickList</li>
                    <li><a href="/epicklist">Concept</a></li>
                    <li><a href="/epicklist#singleorderpick">Single Order Pick</a></li>
                    <li><a href="/epicklist#bulkorderpick">Bulk Order Pick</a></li>
                    <li><a href="/epicklist#pickamount">Pick Amount</a></li>
                    <li><a href="/epicklist#picksource">Pick Source</a></li>
                    <li><a href="/epicklist#pickoptions">Pick Options</a></li>
                    <li><a href="/epicklist#pickrequirements">Pick Requirements</a></li>
                    <li><a href="/epicklist#pickactions">Pick Actions</a></li>
                    <li><a href="/epicklist#settings">Additional Settings</a></li>
                </ul>
                <ul class="uk-nav uk-nav-default">
                    <li class="uk-nav-header">Currency Tracker</li>
                    <li><a href="/currencytracker">Concept</a></li>
                    <li><a href="/currencytracker#trackuntrack">Track/Untrack</a></li>
                    <li><a href="/currencytracker#faq">FAQ</a></li>
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