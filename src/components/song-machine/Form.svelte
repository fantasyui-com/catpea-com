<script>

  // import Icon from '../../controls/Icon.svelte';
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

  function selectColumn({slot, slotIndex}){
     program.selections.slot = slotIndex;
  }

  function toggleSlot({slot, slotIndex, trackIndex}){
    slot.enabled=!slot.enabled;
    program.selections.slot = slotIndex;
    program.selections.track = trackIndex;
  }

</script>

<div class="daw-form">
  <div class="daw-form-table-container table-responsive">
    <table class="daw-form-table table-borderless table table-sm table-dark text-light">
      <thead>
        <tr>
          <th scope="col" class="daw-form-table-header-cell">#</th>
          <th scope="col" class="daw-form-table-header-cell" style="min-width: 16rem;">Track Description</th>
          {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, slotIndex}
          <th scope="col" class="daw-form-table-header-cell selectable" class:active={program.selections.slot == slotIndex} on:click={()=>selectColumn({slot, slotIndex})}>{slotIndex+1}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
      {#each song.parts[program.selections.part].tracks as track, trackIndex}
        <tr class="daw-form-table-row">
          <th scope="row" class="daw-form-table-cell selectable" class:active={program.selections.track == trackIndex} on:click={()=>selectTrack({trackIndex})}>{trackIndex+1}</th>
          <th scope="row" class="daw-form-table-cell selectable text-left" class:active={program.selections.track == trackIndex} on:click={()=>selectTrack({trackIndex})}>{track.name}</th>
          {#each track.slots as slot, slotIndex}
            <td class="daw-form-table-cell text-center" colspan="{ 1 }">
              <div class="daw-form-table-cell-selector selectable" title={program.help.messages['activate-music']} class:active={slot.enabled} on:click={()=>toggleSlot({slot, slotIndex, trackIndex})}>&nbsp;</div>
            </td>
          {/each}
        </tr>
      {/each}
      </tbody>
    </table>
  </div>
</div>
