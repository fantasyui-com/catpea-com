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



<div style="height: 5rem;"></div>

<Container context="secondary">

  <div class="card-header lead shadow text-center">
    {title}
  </div>

  {#if text.length}
    <div class="card-body" style="">
      {#each text as line, index}
        <p>{@html line}</p>
      {/each}
    </div>
  {/if}

</Container>
