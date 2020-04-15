<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';


  import Post from '../components/Post.svelte';

  import moment from "moment";
  import news from '../news/index.js';

  const icon = 'mortar-board';

  let report = news();

  function recalculateTimestamps(){
    report.research = report.research.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  let intervalId = null;

  intervalId = setInterval(recalculateTimestamps,60000)
  recalculateTimestamps();

  onDestroy(() => {
    clearInterval(intervalId);
  });

</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Research, Progress, Peanut Butter, and Jelly</title>
</svelte:head>


<div class="container">
  {#each report.research as item, i}
    <div class="row">
      <div class="col-xs-12 offset-md-1 col-md-10 offset-lg-2 col-lg-8">
        <Post title={item.name} {icon} date={item.ago} html={item.html} decoration="energon"/>
      </div>
    </div>
  {/each}
</div>
