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




<Container context="danger">

  <div class="card-header lead shadow">
    {title}
  </div>

  {#if text.length}
    <div class="card-body" style="">
      {#if author}<h5 class="card-title">{author}</h5>{/if}
      {#each text as line, index}
        <p class="lead">{@html line}</p>
      {/each}
    </div>
  {/if}

</Container>
