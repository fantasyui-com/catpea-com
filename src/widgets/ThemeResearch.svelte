<script>

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let items = 10;
  let footer = true;

  // Application







  let news = [

    {
      date:'2020-01-25T01:01:25.484Z',
      html:'Generated, Nestable, Reusable. Generated means it comes from a content tree similar to a menu of items a theme will eventually parade. The content tree is the product skeleton. The content tree will create ethe menu. THe content tree will asses project duration, collaboration, todo, bugfixes, class-updates, etc.'
    },

  ;//.map(i=>{ i.html = '<span class="shake">' + octicons.squirrel.toSVG({ "class": "fill-white" }) + ' ' + '</span>' + i.html; return i; })

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




<PreferenceCard title="News">

  <div slot="preferences" class="card-text">

  <div class="card-text">
    <label class="small" for="duration">News Items</label>
    <div class="input-group mb-3">
    <input type="number" id="duration" min="2" max="50" class="form-control" bind:value={items} placeholder="number of items to display">
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

    <div class="card-body" style="max-height: 25rem; overflow-y: auto;">
      {#each news as item, i}
        {#if i<items}
          <div class="card-text small">

          <div class="row mb-3">
            <div class="col-1"> <!-- d-flex justify-content-center -->
              <span class="shake">{@html octicons.squirrel.toSVG()}</span>
            </div>
            <div class="col">
              <div class="text-muted">{@html item.html}</div>
              <div class="text-right"><span class="badge badge-secondary">{item.ago}</span></div>
            </div>
          </div>

          </div>
        {/if}
      {/each}
    </div>

    {#if footer}
    {#if news.length >= items}
      <div class="card-footer small text-secondary">
        Showing {items} out of {news.length} items.
      </div>
      {/if}
    {/if}



</PreferenceCard>
