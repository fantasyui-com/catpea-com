<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import moment from "moment";
  import news from '../news/index.js';
  import icons from '../devices/icons.js';
  const octicons = icons();
  const icon = 'squirrel';

  let report = news();

  function recalculateTimestamps(){
    report.quarantine = report.quarantine.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
    //news = news.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;


  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });

</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Quarantine and Poetry</title>
</svelte:head>

<div class="container">

{#each report.quarantine as item, i}
  <div class="row">

    <div class="col-xs-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <div class="card text-white bg-dark mb-3">
        <div class="card-header">
          <span class="shake">{@html octicons[icon].toSVG({class:"fill-info"})}</span>
          <span class="badge badge-secondary px-2">Posted {item.ago}</span>
        </div>
        <div class="card-body">
          <div class="card-text">{@html item.html}</div>
        </div>
      </div>
    </div>

  </div>
{/each}

</div>
