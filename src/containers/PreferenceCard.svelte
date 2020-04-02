<script>

//import octicons from '@primer/octicons';

import Icon from '../controls/Icon.svelte';

export let title = 'Preferences Card';

/*
  0 is Preference View
  1 is Application View
*/
let view = 1; // controlled via UI icons

</script>



{#if view == 0}

  <!-- TODO: Add this? style="min-height: 20rem;" -->
  <div class="card text-white bg-dark shadow">
    <div class="card-header lead">
      Preferences
      <!-- <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 1}">{@html octicons.checklist.toSVG({ "class": "fill-white" })}</button> -->
      <span class="float-right" on:click="{e => view = 1}"><Icon name="checklist" color="warning"/></span>
    </div>
    <div class="card-body p-2" style="max-height: 25rem; overflow-y: auto;">

    <slot name="preferences">
      <p class="card-text">
        Preferences Empty
      </p>
    </slot>

    </div>

    <div class="card-footer text-muted small">
      <slot name="preferences-footer">
      </slot>
    </div>



  </div>

{:else if view == 1}

  <div class="card text-white bg-dark shadow">

    <div class="card-header lead bg-gradient-gold shadow">
      {title}
      <!-- <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 0}">{@html octicons.gear.toSVG({ "class": "fill-white" })}</button> -->
      <span class="float-right" on:click="{e => view = 0}"><Icon name="settings" color="warning"/></span>
      <slot name="buttons"></slot>
    </div>

    <slot>
      <!--
      NOTE: you are required to create a card-body node, this gives you the ability to add footer and card-img, card-img-top/card-img-bottom
      -->
      <div class="card-body p-2" style="box-shadow: inset 0 0 10px #000000;">
          <p class="card-text">
            Application Empty
          </p>
      </div>
    </slot>

  </div>

{/if}
