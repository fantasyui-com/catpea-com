<script>
  export let program;
  export let song;
  import Icon from '../../controls/Icon.svelte';
</script>

<ul class="list-group list-group-horizontal">
  {#each song.parts as part, index}
    <li class="list-group-item bg-dark text-primary cursor-pointer" on:click={()=>{program.selections.part = index}}>{part.name}</li>
  {/each}
</ul>
