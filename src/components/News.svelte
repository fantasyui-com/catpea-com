<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import moment from "moment";
  import icons from '../devices/icons.js';
  const octicons = icons();


  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  export let link = '';
  export let invitation = 'Read More';

  export let icon = 'telescope';
  export let height = '25rem';
  export let title = '';
  export let items = 10;

  export let today = false;
  let footer = true;

  // Application

  export let news = [];

  let todayNews = 0;

  function recalculateTimestamps(){
    let now = moment();
    news = news.map(i=>{i.today = (now.diff(moment(i.date), 'days') < 1); return i; })
    todayNews = news.filter(i=>i.today).length;
    news = news.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })

  }

  // Timers
  let intervalId = null;

//  onMount(async () => {
    intervalId = setInterval(recalculateTimestamps,60000)
    recalculateTimestamps();


//  });

 onDestroy(() => {
   clearInterval(intervalId);
 });


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

  <sup slot="subtitle"><span class="badge badge-danger d-none" class:d-inline={todayNews} title="Last 24 Hours">{todayNews}</span></sup>



    <div class="card-body" style="max-height: {height}; overflow-y: auto;">



    {#if today && todayNews}

    {#each news as item, i}
      {#if item.today}
        <div class="card-text small">

        <div class="row mb-3">
        <div class="col pb-3">

          <div class="col">

            <span class="shake">{@html octicons[icon].toSVG({class:"fill-info"})}</span>
            {#if item.name}<span class="py-2"><strong>{item.name}</strong></span>{/if}
            <span class="badge badge-secondary px-2">Posted {item.ago}</span>

            <div class="pl-3 py-2">{@html item.html}</div>
          </div>

          </div>
        </div>

        </div>

      {/if}
    {/each}


    {:else}

    {#each news as item, i}
      {#if i<items}
        <div class="card-text small">

        <div class="row mb-3">
        <div class="col pb-3">

          <div class="col">

            <span class="shake">{@html octicons[icon].toSVG({class:"fill-info"})}</span>
            {#if item.name}<span class="py-2"><strong>{item.name}</strong></span>{/if}
            <span class="badge badge-secondary px-2">Posted {item.ago}</span>

            <div class="pl-3 py-2">{@html item.html}</div>
          </div>

          </div>
        </div>

        </div>



      {/if}
    {/each}


    {/if}

    {#if link}
      <div class="py-3">
      <p>{invitation}</p>
      <a href="{link}" class="btn btn-primary">Visit &raquo;</a>
      </div>
    {/if}

    </div>

    {#if footer}
      {#if news.length >= items}
        <div class="card-footer small">
          Showing {items} out of {news.length} items, latest post published <strong>{news[0].ago}</strong>
        </div>
        {:else}
        <div class="card-footer small">
          Total of {news.length} news items, latest post published <strong>{news[0].ago}</strong>
        </div>
        {/if}
    {/if}



</PreferenceCard>
