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




<Container context="success">

  <div class="card-header lead shadow">
    {title} by {author}
  </div>

  {#if text.length}
    <div class="card-body" style="">
      {#each text as line, index}
        <p class="lead">{@html text}</p>
      {/each}
    </div>
  {/if}

</Container>
