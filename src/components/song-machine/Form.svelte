<script>

  import Icon from '../../controls/Icon.svelte';
  export let program = {};
  export let song = {};

  function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  function selectTrack({trackIndex}){
    program.selections.track = trackIndex;
  }

  function selectSlot({slot, slotIndex, trackIndex}){
    slot.enabled=!slot.enabled;
    program.selections.slot = slotIndex;
    program.selections.track = trackIndex;
  }

</script>

<div class="rounded bg-dark">
  <div class="table-responsive rounded">
    <table class="table table-sm table-dark text-light rounded">
      <thead>
        <tr>
          <th scope="col" class="small text-muted">Track #</th>
          <th scope="col" class="small text-muted" style="min-width: 16rem;">Music Configuration</th>

              {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, slotIndex}
                <th scope="col" class="small text-center" class:bg-dark={program.selections.slot == slotIndex} class:text-muted={program.selections.slot != slotIndex} class:text-primary={program.selections.slot == slotIndex}>{slotIndex+1}</th>
              {/each}

        </tr>
      </thead>
      <tbody>


      {#each song.parts[program.selections.part].tracks as track, trackIndex}
      <tr class="round" class:bg-dark-light={program.selections.track == trackIndex} class:bg-dark={program.selections.track != trackIndex}>

        <th scope="row" class="small text-center" class:text-primary={program.selections.track == trackIndex} class:text-dark={program.selections.track != trackIndex}>{trackIndex+1}</th>

        <th scope="row" class="small text-muted cursor-pointer" on:click={()=>selectTrack({trackIndex})}>
        <Icon name="gear" color="warning"/>
        {track.name}
        </th>

        {#each track.slots as slot, slotIndex}

            <td colspan="{ 1 }">
              <div class="rounded cursor-pointer" style="min-width: 2rem; user-select: none;" title={program.help.messages['activate-music']} class:bg-primary={slot.enabled} class:bg-dark-dark={!slot.enabled} on:click={()=>selectSlot({slot, slotIndex, trackIndex})}>&nbsp;</div>
            </td>


        {/each}

      </tr>
      {/each}



      </tbody>
    </table>
    <small class="text-info">Select a music track.</small>
  </div>
</div>
