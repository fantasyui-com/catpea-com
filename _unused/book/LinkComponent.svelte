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




<Container context="secondary">

  <a href="{url}" rel="noopener noreferrer" target="_blank" class="btn btn-primary btn-lg" >{title} &raquo;</a>

</Container>
