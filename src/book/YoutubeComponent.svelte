<script>

  // Imports
  import Container from './Container.svelte';

  // Debug
  export let type = '';

  // Setup
  export let title = '';
  export let author = '';
  export let text = [];

  export let video = '';
  export let url = '';
  export let label = ''; // for buttons

</script>

<style>


</style>




<Container context="dark">

  <div class="card-header lead shadow">
    {title}
  </div>

  <a href="https://www.youtube.com/watch?v={video}"><img class="card-img-bottom" src="warrior/images/youtube-{video}.jpg" alt="{title}"></a>

  {#if text.length}
    <div class="card-body" style="">
      {#if author}<h5 class="card-title">{author}</h5>{/if}
      {#each text as line, index}
        <p>{@html text}</p>
      {/each}
    </div>
  {/if}

</Container>
