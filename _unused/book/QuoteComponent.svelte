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




<Container context="info">

  {#if text.length}
    <div class="card-body" style="">

    <blockquote class="blockquote mb-0">

      {#each text as line, index}
        <p>{@html line}</p>
      {/each}

      <footer class="blockquote-footer"><span class="text-light">{author}</span></footer>

    </blockquote>

     </div>
  {/if}

</Container>
