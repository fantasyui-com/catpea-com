<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import Composition from './song-machine/Composition.svelte';
  import Form from './song-machine/Form.svelte';
  import Sequencer from './song-machine/Sequencer.svelte';

  function rnd(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  }

  let title = 'Song Machine - GUI Demonstration';


  let playing = false;


  let program = {
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

  let song = {

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

<!-- <div class="bg-info text-dark">{program.selections.part}</div> -->
<div class="container-fluid">

    <div class="row">
      <div class="col-12 pb-2">
        <Composition bind:program={program} bind:song={song}/>
      </div>
     </div>

    <div class="row">
      <div class="col-12 pb-2">
        <Form bind:program={program} bind:song={song}/>
      </div>
    </div>

    <div class="row">
      <div class="col-12 pb-2">
        <Sequencer bind:program={program} bind:song={song}/>
      </div>
    </div>

    <div class="row">
      <div class="col pb-3">
      ...
      </div>
      <div class="col pb-3">
      ...
      </div>
      <div class="col pb-3">
      ...
      </div>
    </div>

</div>
