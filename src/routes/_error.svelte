<script>
  import Icon from '../controls/Icon.svelte';
  export let status;
  export let error;

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
       <div class="card-header"><img src="icons/exclamation-triangle-fill.svg" alt="" width="32" height="32" style="filter: invert(1);"> Website Bugs, Sorry.</div>
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
      <div class="card-header"><img src="icons/exclamation-triangle-fill.svg" alt="" width="32" height="32" style="filter: invert(1);"> HTTP Status Code: {status}</div>
      <div class="card-body">
        <h5 class="card-title">Error Information</h5>
        <p class="card-text">{status}: {error.message}</p>
      </div>
      {#if error && error.stack}
        <ul class="list-group list-group-flush">
          {#each error.stack.split('\n') as item, i}
            <li class="list-group-item bg-danger text-light small">{item}</li>
          {/each}
        </ul>
      {/if}
     </div>
    </div>
  </div>

  <div class="row">
    <div class="col-12 offset-md-2 col-md-8 offset-xxl-4 col-xxl-4">

    <div class="card bg-dark mb-3">
     <div class="card-header">News</div>
       <div class="card-body">
         <p class="card-text">
         Visit <a href="http://news.catpea.com">http://news.catpea.com</a>
         </p>
       </div>
    </div>

    </div>
  </div>

</div>
