<script>
  export let program;
  export let song;
  import Icon from '../../controls/Icon.svelte';
</script>

<ul class="list-group list-group-horizontal">
  {#each song.parts as part, index}
    <li class="list-group-item text-primary cursor-pointer" class:bg-secondary={program.selections.part == index} class:bg-dark={program.selections.part != index} on:click={()=>{program.selections.part = index; program.unselections.part.map(name=>program.selections[name] = 0); }}>{part.name}</li>
  {/each}
</ul>
