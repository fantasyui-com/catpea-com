<script>

  import moment from "moment";
import octicons from '../devices/icons.js';


  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  export let icon = 'telescope';
  export let height = '25rem';
  export let title = '';
  export let items = 10;
  let footer = true;

  // Application







  export let news = [];

  function recalculateTimestamps(){
    news = news
      .map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  // Timers

  setInterval(recalculateTimestamps,60000)

  // Initialization

  recalculateTimestamps();

</script>

<style>


</style>




<PreferenceCard {title}>

  <div slot="preferences" class="card-text">

  <div class="card-text">
    <label class="small" for="duration">News Items</label>
    <div class="input-group mb-3">
    <input type="number" id="duration" min="2" max="10001" class="form-control" bind:value={items} placeholder="Number of news items on display.">
      <div class="input-group-append">
      <span class="input-group-text " id="duration-addon">items</span>
      </div>
    </div>
  </div>

  <div class="card-text">
    <label class="small" for="duration">Footer</label>
    <div class="input-group mb-3">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" bind:checked={footer} id="footerControl">
        <label class="custom-control-label" for="footerControl"><!-- some text --></label>
      </div>
    </div>
  </div>


  </div>

  <div slot="preferences-footer">
    {#if news.length >= items}
    Showing {items} out of {news.length} items.
    {:else}
    Max items to display {items}, items in database {news.length}.
    {/if}
  </div>




    <div class="card-body" style="max-height: {height}; overflow-y: auto;">
      {#each news as item, i}
        {#if i<items}
          <div class="card-text small">

          <div class="row mb-3">
          <div class="col pb-3">

            <div class="col">

              <span class="shake">{@html octicons[icon].toSVG({class:"fill-info"})}</span>
              <span class="badge badge-secondary px-2">Posted {item.ago}</span>

              <div class="text-info pl-3 py-2">{@html item.html}</div>
            </div>

            </div>
          </div>

          </div>
        {/if}
      {/each}
    </div>

    {#if footer}
      {#if news.length >= items}
        <div class="card-footer small text-secondary">
          Showing {items} out of {news.length} items, latest post published <span class="text-primary">{news[0].ago}</span>
        </div>
        {:else}
        <div class="card-footer small text-secondary">
          Total of {news.length} news items, latest post published <span class="text-primary">{news[0].ago}</span>
        </div>
        {/if}
    {/if}



</PreferenceCard>
