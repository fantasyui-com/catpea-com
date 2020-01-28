<script>

  import Container from './Container.svelte';

  // Debug
  export let type = '';

  // Setup
  export let url = '';
  export let title = '';
  export let text = [];

  // {
  //  "type": "image",
  //  "url": "images/bears.jpg",
  //  "title": "The Bear Hunt",
  //  "text": [
  //   "Line 1",
  //   "Line 2"
  //  ]
  // }

</script>

<style>


</style>



<Container context="warning">

  <img src="{url}" class="card-img-top" alt="{title}"/>

    <div class="card-body text-dark" style="">
      {#if title}<h5 class="card-title" class:mb-0='{text.length==0}'>{title}</h5>{/if}
        {#each text as line, index}
          <p class="lead">{@html text}</p>
        {/each}
    </div>

</Container>
