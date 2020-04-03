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
    help:{
      message:'welcome',
      messages: {
        'none':'',
        'welcome':'Welcome to the program!',
        'activate-music':'Click to activate/deactivate music in this cell.',
        'select-song-part':'Click to select the portion of a song you want to work on.',
      }
    },
    defaults: {
      slot: {
        enabled: false,
      },
      note: {
        enabled: false,
        note: 'C4',
        duration: '16n'
      },
    },
    // Selection are for editing content, when a user selects a slot,
    // a new UI will open up below, it will contain the beat Sequencer
    // for that slot.
    selections: {
      part: 3, // part is a part of a song like a Chorus, or outro.
      track: 0, // track is an instrument in a part
      slot: 0, // slot is an orange square in a track
      note: 0, // UNDER DEVELOPMENT
    },
    unselections: {
      // when selecting a new part, clear all, when switching
      // from intro to Chorus, should clear what intro track was selected
      // user is yet to make a selection of a track in Chorus.
      part:  ['track', 'slot', 'note'],
      // when selecting a new track  make sure the slot (orange dot)
      //  from previous track is not selected here, as that makes no sense.
      track: ['slot', 'note'],
      slot:  ['note'],  // UNDER DEVELOPMENT
      note:  [], // UNDER DEVELOPMENT
    },
  };

   function makeMusic(){
    const response = [
      {
        instrument: 'Guitar',
        notes:Array(4*4).fill(1).map(i=>Object.assign({},program.defaults.note)),
      },
      {
        instrument: 'Piano',
        notes:Array(4*4).fill(1).map(i=>Object.assign({},program.defaults.note)),
      },
      {
        instrument: 'Saw',
        notes:Array(4*4).fill(1).map(i=>Object.assign({},program.defaults.note)),
      }
    ]

    return JSON.parse(JSON.stringify(response));

  }


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
            name:'Calm little melody.',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Big Bassline',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },

        ]
      },
      {
        name:'Verse',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Quiet Bassline',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Quick Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          }
        ]
      },
      {
        name:'Chorus',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Bassline',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Cello',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          }
        ]
      },
      {
        name:'Bridge',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Bassline',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Quiet Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Fast Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Cello',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          }
        ]
      },
      {
        name:'Chorus',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Bassline',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          },
          {
            name:'Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.slot)),
            melodies: makeMusic(),
          }
        ]
      },
      {
        name:'Outro',
        size:64,
        tracks:[
          {
            name:'Beat',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.note)),
            notes: Array(64).fill(program.defaults.note)
          },
          {
            name:'Piano',
            slots: Array(32).fill(1).map(i=>Object.assign({},program.defaults.note)),
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
    <div class="col text-info">
      part:={program.selections.part},
      track:={program.selections.track},
      slot:={program.selections.slot},
      note:={program.selections.note},
     </div>
     </div>
    <div class="row">
      <div class="col-12 pb-2">
        <div style="min-height: 2rem;">
        <span class="d-inline-block text-info small">
          {#if program.help.messages[program.help.message]} {program.help.messages[program.help.message]} {/if}
        </span>
      </div>
      </div>
     </div>
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

    <div class="row">
      <div class="col">
        <code>
          <pre class="text-info">
            {JSON.stringify(program,null,'  ')}
          </pre>
        </code>
      </div>
      <div class="col">
        <code>
          <pre class="text-warning">
            {JSON.stringify(song,null,'  ')}
          </pre>
        </code>
      </div>
    </div>

</div>
