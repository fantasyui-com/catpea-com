<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import Post from '../components/Post.svelte';

  import moment from "moment";
  import news from '../news/index.js';

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
    <div class="col-xs-12 offset-md-1 col-md-10 offset-lg-3 col-lg-6">
      <Post title={item.name} {icon} date={item.ago} html={item.html}/>
    </div>
  </div>
{/each}

</div>
