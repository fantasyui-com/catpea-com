<script>
  import RandomVideo from '../components/RandomVideo.svelte';

  let notice = true;

  function dismiss() {
    notice =! notice;
  }

  function rng(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  let videos = [

    {},
    {},
    {},
    {},

    {},
    {},
    {},
    {},

    {},
    {},
    {},
    {},

    {},
    {},
    {},
    {},

    {},
    {},


  ];



</script>

<style>
</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Video Wall</title>
</svelte:head>

<div class="container-fluid">
    <div class="row" class:d-none={!notice}>
      <div class="col">
        <div class="alert alert-info d-inline-block d-xl-none" role="alert">

        <button type="button" class="close p-1" aria-label="Close" on:click={dismiss}>
        <span aria-hidden="true">&times;</span>
        </button>


          <figure class="figure mb-0 mr-3"> <img src="previews/wall.png" class="figure-img rounded" alt="Best Viewed On Desktop"><figcaption class="figure-caption text-right">Best Viewed On Desktop {notice}</figcaption></figure>

        </div>
      </div>
    </div>

    <div class="row">

    {#each videos as video, index}
      <div class="col-xl-2 pb-3">
        <RandomVideo duration={rng(10,30)}/>
      </div>
    {/each}

    </div>
</div>
