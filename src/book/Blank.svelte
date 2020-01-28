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




<Container>

  <div class="card-header lead shadow">
    {title}
  </div>

  {#if text.length}
    <div class="card-body" style="">
      {#if title}<h5 class="card-title">{title}</h5>{/if}
      {#if author}<h5 class="card-title">{author}</h5>{/if}
      {#each text as line, index}
        <p>{@html text}</p>
      {/each}
    </div>
  {/if}

</Container>
