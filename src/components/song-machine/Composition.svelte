<script>
  export let program;
  export let song;
  import Icon from '../../controls/Icon.svelte';

  // on:mouseover={()=>{
  //   program.help.message = 'select-song-part';
  // }}


</script>

<ul class="list-group list-group-horizontal">
  {#each song.parts as part, index}

    <li
      class="list-group-item cursor-pointer select-none"

      class:bg-dark-light={program.selections.part == index}
      class:bg-dark={program.selections.part != index}

      class:text-secondary={program.selections.part !== index}
      class:text-warning={program.selections.part == index}

      title={program.help.messages['select-song-part']}
      on:click={()=>{
        program.selections.part = index;
        program.unselections.part.map(name=>program.selections[name] = 0);
      }}
    >
    {part.name}
    </li>

  {/each}
</ul>
