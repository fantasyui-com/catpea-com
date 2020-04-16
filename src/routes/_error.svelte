<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import Post from '../components/Post.svelte';
  import Icon from '../controls/Icon.svelte';

  import moment from "moment";
  import news from '../news/index.js';
  export let status;
  export let error;

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

  const dev = process.env.NODE_ENV === 'development';

  // This will print error in terminal
  if(dev && error.stack){
    console.log('ERROR: %s', error.message)
    console.log(error.stack);
    console.log(error);
  }

</script>

<style>

</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works</title>
</svelte:head>

<div class="container text-small">
  <div class="row">
    <div class="col-12 offset-md-2 col-md-8 offset-xxl-4 col-xxl-4">
     <div class="card bg-info text-dark mb-3">
       <div class="card-header"><Icon name={icon} class="fill-dark mr-3"/>Website Bugs, Sorry.</div>
       <div class="card-body">
         <h5 class="card-title">I am working on it!</h5>
         <p class="card-text">Please Refresh, and Try Again.</p>
         <p class="card-text">The website is receiving constant updates, and some of the files are probably out of date.</p>
         <p class="card-text">The website might have updated, and you maybe using an old version attempting to load files that are no longer on the server. I kind of can fix this, but for now, if you could reload the page, everything will probably work!</p>
         <p class="card-text">Sometimes the server is in the middle of updating files, or there maybe a connectivity problems along the way.</p>
         <p class="card-text">Overall, this is a unique application that does not use a database. When I update some piece of information, the entire website is rebuilt and new files are uploaded, for almost everything. I don't delete the old files, so technically everything should work, I go out of my way to make it so.</p>
         <p class="catd-text">If the error persists, that means there is a bug in the code and I am already working on it (I always check to see if an upgrade works.)</p>
       </div>
     </div>
     <div class="card bg-danger text-dark mb-3">
      <div class="card-header"><Icon name={icon} class="fill-dark mr-3"/>HTTP Status Code: {status}</div>
      <div class="card-body">
        <h5 class="card-title">Error Information</h5>
        <p class="card-text">{status}: {error.message}</p>
      </div>
      {#if error.stack}
        <ul class="list-group list-group-flush">
          {#each error.stack as item, i}
            <li class="list-group-item">{item}</li>
          {/each}
        </ul>
      {/if}
     </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 offset-md-2 col-md-8 offset-xxl-4 col-xxl-4">

    <div class="card bg-dark mb-3">
     <div class="card-header">Poems</div>
       <div class="card-body">
         <p class="card-text">In case it is talking longer than expected, here are my poems.</p>
       </div>
    </div>

    </div>
  </div>

  {#each report.quarantine as item, i}
    <div class="row mb-3">
      <div class="col-12 offset-md-2 col-md-8 offset-xxl-4 col-xxl-4">
        <Post title={item.name} {icon} date={item.ago} html={item.html}/>
      </div>
    </div>
  {/each}

</div>
