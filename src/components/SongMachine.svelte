<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import PreferenceCard from '../containers/PreferenceCard.svelte';
  import Drawer from '../containers/Drawer.svelte';
  import Icon from '../controls/Icon.svelte';

  export let title = 'Song Machine - GUI Demonstration';


  let playing = false;


  const program = {
    defaults: {
      slot: {
        enabled: false,
      },
      note: {
        instrument: 'piano',
        note: 'C4',
        duration: '16n'
      },
    },
    selections: {
      part: 3,
      track: 0,
      note: 0,
    },
  };

  const song = {

    configuration: {

      name:'',
      author:'',
      bpm: 160,
      parts: 4,
      beats: 4,

    },

    parts:[
      {
        name:'Intro',
        size:64,
        tracks:[
          {
            name:'Initial',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Big Bassline',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },

        ]
      },
      {
        name:'Verse',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Quiet Bassline',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Quick Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          }
        ]
      },
      {
        name:'Choir',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Bassline',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Cello',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          }
        ]
      },
      {
        name:'Bridge',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Bassline',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Quiet Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Fast Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Cello',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          }
        ]
      },
      {
        name:'Choir',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Bassline',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          },
          {
            name:'Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            notes: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
          }
        ]
      },
      {
        name:'Outro',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
            notes: Array(64).fill(program.defaults.note)
          },
          {
            name:'Piano',
            slots: Array(64).fill(1).map(i=>Object.assign({},program.defaults.note)),
            notes: Array(64).fill(program.defaults.note)
          }
        ]
      }
    ]

  }

  onMount(() => {

  });

  onDestroy(() => {
    playing = false;
  });


</script>

<!-- <tr class:bg-primary={index===selected}>  -->
<PreferenceCard {title}>

  <div slot="preferences">

  </div>

  <Drawer title="Composition">
    {#each song.parts as part, index}
      <div  class="cursor-pointer mb-2 bg-hover-dark px-1" on:click={()=>{program.selections.part = index}}>
        <span class="">{part.name}</span>
        <span class="small text-muted"></span>
      </div>
    {/each}
  </Drawer>

  <Drawer title="Form" opened>
    <div class="table-responsive">
      <table class="table table-sm table-dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col" style="min-width: 16rem;">Instrument Configuration</th>

                {#each song.parts[program.selections.part].tracks[program.selections.track].slots as slot, index}
                  <th scope="col small">{index}</th>
                {/each}

          </tr>
        </thead>
        <tbody>


        {#each song.parts[program.selections.part].tracks as track, index}
        <tr>
        <th scope="row">{index}</th>
        <th scope="row">
        <Icon name="gear"/>
        {track.name}
        </th>

          {#each track.slots as slot, index}
            <td><div class="rounded shadow" style="min-width: 2rem; user-select: none;" class:bg-primary={slot.enabled} class:bg-secondary={!slot.enabled} on:click={()=>{slot.enabled=!slot.enabled}}>&nbsp;</div></td>
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
  </Drawer>

</PreferenceCard>
