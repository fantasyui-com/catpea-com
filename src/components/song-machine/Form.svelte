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

<style type="text/scss">




</style>


<div class="daw-form">
  <div class="daw-form-table-container table-responsive">
    <table class="daw-form-table table table-sm table-dark text-light">

      <thead>
        <tr>
          <th scope="col" class="daw-form-table-label">#</th>

          <th scope="col" class="daw-form-table-label" style="min-width: 16rem;">Track Description</th>

          {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, slotIndex}
          <th scope="col" class="daw-form-table-label" class:bg-dark={program.selections.slot == slotIndex} class:text-muted={program.selections.slot != slotIndex} class:text-primary={program.selections.slot == slotIndex}><small>#</small>{slotIndex+1}</th>
          {/each}

        </tr>
      </thead>
      <tbody>


      {#each song.parts[program.selections.part].tracks as track, trackIndex}
      <tr class="round" class:bg-dark-light={program.selections.track == trackIndex} class:bg-dark={program.selections.track != trackIndex}>

        <th scope="row" class="daw-form-table-label" class:text-primary={program.selections.track == trackIndex} class:text-secondary={program.selections.track != trackIndex}><small>#</small>{trackIndex+1}</th>

        <th scope="row" class="daw-form-table-label" class:text-warning={program.selections.track == trackIndex} class:text-secondary={program.selections.track != trackIndex} on:click={()=>selectTrack({trackIndex})}>
        <!-- <Icon name="gear" color="warning"/> -->
        {track.name}
        </th>

        {#each track.slots as slot, slotIndex}

            <td colspan="{ 1 }">
              <div class="daw-form-table-selector" title={program.help.messages['activate-music']} class:bg-primary={slot.enabled} class:bg-dark-dark={!slot.enabled} on:click={()=>selectSlot({slot, slotIndex, trackIndex})}>&nbsp;</div>
            </td>


        {/each}

      </tr>
      {/each}



      </tbody>
    </table>
    <!-- <small class="text-info">Select a music track.</small> -->
  </div>
</div>
