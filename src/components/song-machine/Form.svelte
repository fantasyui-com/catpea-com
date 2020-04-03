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

<div class="rounded app-background">
  <div class="table-responsive rounded">
    <table class="table table-sm table-dark app-background text-light rounded">
      <thead>
        <tr>
          <th scope="col" class="small app-text-muted">Track #</th>
          <th scope="col" class="small app-text-muted" style="min-width: 16rem;">Music Configuration</th>

              {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, slotIndex}
                <th scope="col" class="small text-center" class:app-text-selected={program.selections.slot == slotIndex} class:app-text-dark={program.selections.slot != slotIndex}>{slotIndex+1}</th>
              {/each}

        </tr>
      </thead>
      <tbody>


      {#each song.parts[program.selections.part].tracks as track, trackIndex}
      <tr class="app-selectable round" class:app-selected={program.selections.track == trackIndex}>
      <th scope="row" class="small" class:app-text-primary={program.selections.track == trackIndex} class:app-text-dark={program.selections.track != trackIndex}>{trackIndex+1}</th>
      <th scope="row" class="small app-text-muted cursor-pointer" on:click={()=>selectTrack({trackIndex})}>
      <Icon name="gear" color="warning"/>
      {track.name}
      </th>

        {#each track.slots as slot, slotIndex}



            <td colspan="{ 1 }">
              <div class=" app-button app-highlightable rounded cursor-pointer" style="min-width: 2rem; user-select: none;" title={program.help.messages['activate-music']} class:app-highlighted={slot.enabled} class:shadow={!slot.enabled} on:click={()=>selectSlot({slot, slotIndex, trackIndex})}>&nbsp;</div>
            </td>


        {/each}

      </tr>
      {/each}



      </tbody>
    </table>
    <small class="text-info">Select a music track.</small>
  </div>
</div>
