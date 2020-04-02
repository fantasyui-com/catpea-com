<script>

  import Icon from '../../controls/Icon.svelte';
  export let program = {};
  export let song = {};

  function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

</script>

<div class="bg-dark rounded">
  <div class="table-responsive rounded">
    <table class="table table-sm table-dark rounded">
      <thead>
        <tr>
          <th scope="col" class="small text-muted">#</th>
          <th scope="col" class="small text-muted" style="min-width: 16rem;">Instrument Configuration</th>

              {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, index}
                <th scope="col" class="small text-muted text-center">{index+1}</th>
              {/each}

        </tr>
      </thead>
      <tbody>


      {#each song.parts[program.selections.part].tracks as track, index}
      <tr>
      <th scope="row" class="small text-muted">{index+1}</th>
      <th scope="row" class="small text-muted">
      <Icon name="gear" color="warning"/>
      {track.name}
      </th>

        {#each track.notes as slot, index}

            <td><div class="rounded"  style="min-width: 2rem; user-select: none;" class:bg-primary={slot.enabled} class:bg-secondary={!slot.enabled} class:shadow={!slot.enabled} on:click={()=>{slot.enabled=!slot.enabled}}>&nbsp;</div></td>

        {/each}

      </tr>
      {/each}

          <!-- {#each song.tracks as track, index}
            <tr>
            <th scope="row">{index}</th>
            <td>{item.instrument}</td>
            <td>{item.note}</td>
            <td>{item.duration}</td>
            </tr>
          {/each} -->

      </tbody>
    </table>
  </div>
</div>
