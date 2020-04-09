<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import Icon from '../controls/Icon.svelte';
  import Post from '../components/Post.svelte';

  import moment from "moment";
  import news from '../news/index.js';

  let night = true;

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

<div class="container mb-1">
  <div class="row">
    <div class="col-xs-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <button type="button" class="btn btn-sm float-right" class:btn-primary={!night} class:btn-dark={night} class:active={night} on:click={()=>night=!night}>
        <Icon name="light-bulb" color={night?'primary':'light'}/>
      </button>
    </div>
  </div>
</div>

<div class="container" class:night>

{#each report.research as item, i}
  <div class="row">

    <div class="col-xs-12 offset-md-2 col-md-8 offset-lg-3 col-lg-6">
      <Post title={item.name} {icon} date={item.ago} html={item.html}/>
    </div>

  </div>
{/each}

</div>
