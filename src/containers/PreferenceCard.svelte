<script>
export let title = 'Preferences Card';

import octicons from 'octicons';


/*
  0 is Preference View
  1 is Application View
*/
let view = 1; // controlled via UI icons

</script>



{#if view == 0}

  <div class="card text-white bg-dark shadow" style="min-height: 23rem;" >
    <div class="card-header lead">
      Preferences
      <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 1}">{@html octicons.checklist.toSVG({ "class": "fill-white" })}</button>
    </div>
    <div class="card-body py-3">

    <slot name="preferences">
      <p class="card-text">
        Preferences Empty
      </p>
    </slot>

    </div>
  </div>

{:else if view == 1}

  <div class="card text-white bg-dark shadow" style="min-height: 23rem;" >

    <div class="card-header lead">
      {title}
      <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 0}">{@html octicons.gear.toSVG({ "class": "fill-white" })}</button>
    </div>

    <div class="card-body py-3">

    <slot name="application">
      <p class="card-text">
        Application Empty
      </p>
    </slot>

    </div>
  </div>

{/if}
