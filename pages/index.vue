<template>
<div>
<h1 class="uk-heading-primary">Documentation</h1>
<p>Welcome to the documentation for Rigidas Software apps.</p>

<div class="uk-card uk-card-hover uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-animation-slide-right" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
        <img src="/cards/StockCount2.png" alt="" uk-cover>
        <canvas width="600" height="300"></canvas>
    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">StockWise</h3>
            <p>Warehouse management for Linnworks.</p>
            <a href="/stockwise" class="uk-button uk-button-primary uk-align-right">Open</a>
        </div>
    </div>
</div>

<div class="uk-card uk-card-hover uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-animation-slide-left" uk-grid>
    <div class="uk-flex-last@s uk-card-media-right uk-cover-container">
        <img src="/cards/NoScanRequired.png" alt="" uk-cover>
        <canvas width="600" height="300"></canvas>
    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">ePickList</h3>
            <p>Create and manage pick lists with ePickList.</p>
            <a href="/epicklist" class="uk-button uk-button-primary uk-align-right">Open</a>
        </div>
    </div>
</div>

<div class="uk-card uk-card-hover uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin uk-animation-slide-right" uk-grid>
    <div class="uk-card-media-left uk-cover-container">
        <img src="/cards/CurrencyTracker.png" alt="" uk-cover>
        <canvas width="600" height="300"></canvas>
    </div>
    <div>
        <div class="uk-card-body">
            <h3 class="uk-card-title">Currency Tracker</h3>
            <p>Keeo your currency rates up to date.</p>
            <a href="/currencytracker" class="uk-button uk-button-primary uk-align-right">Open</a>
        </div>
    </div>
</div>

</div>
</template>

<script>
export default {
  head() {
      return {
        title: 'Rigidas'
      }
  }
}
</script>