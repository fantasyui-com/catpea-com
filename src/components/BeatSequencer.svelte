<script>

import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

import Drawer from '../containers/Drawer.svelte';
import Icon from '../controls/Icon.svelte';
import DrumLine from '../controls/DrumLine.svelte';

import sampler from '../devices/sampler.js';

import Tone from "tone";
import octicons from 'octicons';

let beatBuffer = 4*8;

let notes = [];
{
  const simple = true;
  const minOctave = 1//-1;
  const maxOctave = 9;
  const collection = simple?['C','D','E','F','G','A','B']:['C','C#','D','D#','E','F','F#','G','G#','A','A#','B',];
  for(let octave = minOctave; octave <= maxOctave; octave++){
    for(let note = 0; note < collection.length; note++){
    notes.push(`${collection[note]}${octave}`);
    }
  }
}

$: bpm = 160;
$: parts = 4;
$: beats = 4;

let instruments = {};
let song = [];

let play = true;

$: selected = null;
$: sequence = 4;

const tips = [
  {text:`Click a box to make it emit a sound.`, icon:'info'},
  {text:`Play the song.`, icon:'play'},
  {text:`Stop playing.`, icon:'mute'},
  {text:`Fold a section up, to get it out of the way.`, icon:'eye-closed'},
  {text:`Open up the presets section for some neat songs.`, icon:'settings'},
  {text:`Add more lines.`, icon:'plus'},
  {text:`Click a line number to select and configure it.`, icon:'info'},
  {text:`Clear all sounds in a selected line.`, icon:'zap'},
  {text:`Delete selected line.`, icon:'trashcan'},
]


// TODO: add more presets from
// https://docs.google.com/spreadsheets/d/19_3BxUMy3uy1Gb0V8Wc-TcG7q16Amfn6e8QVw4-HuD0/edit#gid=0
// https://learningmusic.ableton.com/chords/get-up-stand-up.html

let presets = [


  {
    name: 'Billie Jean',
    bpm: 120,
    beats:4,
    parts:4,
    song: [
      {label:'Kick'      , instrument:'Shebang', octave:4, note:'E', data:expandNotation('1000 0000 1000 0000')},
      {label:'Snare'     , instrument:'Shebang', octave:5, note:'E', data:expandNotation('0000 1000 0000 1000')},
      {label:'Closed Hat', instrument:'Shebang', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010')},
    ]
  },
  {
    name: 'Billie Jean Meow Mix',
    bpm: 140,
    beats:8,
    parts:4,
    song: [
      {label:'Kick'      , instrument:'Shebang', octave:4, note:'E', data:expandNotation('1000 0000 1000 0000 1000 0000 1010 0000')},
      {label:'Snare'     , instrument:'Shebang', octave:5, note:'E', data:expandNotation('0000 1000 0000 1000 0000 1000 0000 1000')},
      {label:'Closed Hat', instrument:'Shebang', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010 1010 1010 1010 1010')},
    ]
  },
  {
    name: 'Inner City, Good Life',
    bpm: 120,
    beats:8,
    parts:4,
    song: [
      {label:'Bass 1', instrument:'Bass', octave:4, note:'B', data:expandNotation('1001 0010 0000 0000 0000 0000 0000 1010')},
      {label:'Bass 2', instrument:'Bass', octave:4, note:'A', data:expandNotation('0000 0000 0000 0001 0101 0000 0000 0000')},
      {label:'Bass 3', instrument:'Bass', octave:4, note:'F', data:expandNotation('0000 0000 0100 1000 0000 0000 0000 0000')},
      {label:'Bass 3', instrument:'Bass', octave:4, note:'E', data:expandNotation('0000 0000 0000 0000 0000 0010 0101 0000')},
    ]
  },
] // 0000 0000 0000 0000 0000 0000 0000 0000

function expandNotation(str) {
  const response = [];
  const arr = str.split(' ').map(digits => digits.split('').map(i => parseInt(i)));
  const beats = arr.length;
  const parts = arr[0].length;
  for (let beat = 0; beat < beatBuffer; beat++) {
    for (let part = 0; part < parts; part++) {
      let enabled = false;
      if (beat < beats) {
        if (part < parts) {
          enabled = !!(arr[beat][part])
        }
      }
      response.push({
        beat,
        part,
        enabled
      });
    }
  }
  return response;
}

function loadPresetByIndex(index) {
  selected = null;
  let selection = presets[index];
  bpm = selection.bpm;
  beats = selection.beats;
  parts = selection.parts;
  song = JSON.parse(JSON.stringify(selection.song))
  event.target.value = 0;
}

function itemGenerator(custom = {}) {
  const item = Object.assign({
    label: "Piano",
    instrument: "Piano",
    octave: 4,
    note: "A",
    data: [],
  }, custom);
  for (let beat = 0; beat < beatBuffer; beat++) {
    for (let part = 0; part < parts; part++) {
      item.data = item.data.concat({
        beat,
        part,
        enabled: false
      });
    }
  }
  return item;
}

function dataGenerator(items = 1) {
  let generated = [];

  const notes = ['A','B','C','D','E','F','G'];
  let nodeIndex = 0;

  for (let item = 0; item < items; item++) {
    generated.push(itemGenerator({note:notes[nodeIndex]}))
    nodeIndex++;
    if(nodeIndex>notes.length) nodeIndex = 0;
  }
  return generated;
}

function incrementSequence() {
  sequence++
  if (sequence >= parts * beats) {
    sequence = 0;
  }
  for (let item of song) {
    if (item.data[sequence].enabled) {
      instruments[item.instrument].triggerAttackRelease(item.note + item.octave, '2n');
    }
  }
}

function schedule() {
  setTimeout(function() {
    if (play) {
      incrementSequence();
      schedule();
    } else {
      sequence = 0;
    }
  }, (1000 * 60) / (bpm * parts))
}

$: showInstrumentSettings = true;
function selectSequencerLine(event, index) {
  selected = index;
  showInstrumentSettings = true;
}

function addSequencerLine() {
  song = song.concat(dataGenerator())
}

function removeSequencerLine(index) {
  selected = null; // must clear selection or errors will occur
  song[index].data = song[index].data.map(i => {
    i.enabled = false;
    return i;
  });
  song = song.filter((item, localIndex) => localIndex != index)
}

function clearSequencerLine(index) {
  song[index].data = song[index].data.map(i => {
    i.enabled = false;
    return i;
  });
}

onMount(async () => {

  const reverb = new Tone.Reverb( {decay : 1.8 , preDelay : 0.01 }).toMaster()
  //reverb.wet.value = 0.2;
  await reverb.generate();

  instruments.Piano = await sampler('salamander');


  instruments.Cello = new Tone.PolySynth(8, Tone.FMSynth,
    {
        "harmonicity": 3.01,
        "modulationIndex": 14,
        "oscillator": {
            "type": "triangle"
        },
        "envelope": {
            "attack": 0.2,
            "decay": 0.3,
            "sustain": 0.1,
            "release": 1.2
        },
        "modulation" : {
            "type": "square"
        },
        "modulationEnvelope" : {
            "attack": 0.01,
            "decay": 0.5,
            "sustain": 0.2,
            "release": 0.1
        }
    }
  ).connect(reverb);

  instruments.Saw = new Tone.PolySynth(1, Tone.Synth,
    {
        "oscillator" : {
            "type" : "fatsawtooth",
            "count" : 6,
            "spread" : 10
        },
        "envelope": {
            "attack": 0.01,
            "decay": 0.1,
            "sustain": 0.5,
            "release": 0.4,
            "attackCurve" : "exponential"
        }
    }
  ).connect(reverb);

  instruments.Bass = new Tone.PolySynth(2, Tone.MonoSynth,
    {
        "oscillator": {
            "type": "fmsquare5",
        "modulationType" : "triangle",
            "modulationIndex" : 2,
            "harmonicity" : 0.401
        },
        "filter": {
            "Q": 1,
            "type": "lowpass",
            "rolloff": -24
        },
        "envelope": {
            "attack": 0.01,
            "decay": 0.1,
            "sustain": 0.2,
            "release": 2
        },
        "filterEnvelope": {
            "attack": 0.01,
            "decay": 0.1,
            "sustain": 0.3,
            "release": .5,
            "baseFrequency": 60,
            "octaves": 4.4
        }
    }
    ).toMaster();

    instruments.Shebang = await sampler('shebang');


  const synth = new Tone.Synth().toMaster()
  song = dataGenerator(7);
  schedule();
});

onDestroy(() => {
  play = false;
});

</script>

<div class="card text-white bg-dark shadow">

  <div class="card-header">
    Shebang Slash Beat Sequencer
  </div>

  <div class="card-body">

     <div class="row">
      <div class="col py-2">
        <Drawer title="Help">
          {#each tips as item, index}
            <div class="mb-2 px-1">
              <span style="display: inline-block; min-width: 1.2rem;"><Icon name={item.icon} context="light"/></span>
              <span class="small text-info">{item.text}</span>
            </div>
          {/each}
        </Drawer>
      </div>
    </div>

    <div class="row">
      <div class="col py-2">
        <Drawer title="Presets">
          {#each presets as item, index}
            <div  class="cursor-pointer mb-2 bg-hover-dark px-1" on:click={()=>loadPresetByIndex(index)}>
              <span class="">{item.name}</span>
              <span class="small text-muted">{item.bpm}BPM {item.parts}/{item.beats}</span>
            </div>
         {/each}
        </Drawer>
      </div>
    </div>

    <div class="row">
      <div class="col py-2">
        <Drawer title="Tempo">
          <div class="form-group">
            <select class="d-inline form-control form-control-sm" bind:value={bpm} id="exampleFormControlSelect1">
              <option value={95}>95 BPM</option>
              <option value={100}>100 BPM</option>
              <option value={120}>120 BPM</option>
              <option value={140}>140 BPM</option>
              <option value={160}>160 BPM</option>
              <option value={190}>190 BPM</option>
            </select>
          </div>
        </Drawer>
      </div>
    </div>

    <div class="row my-2">
      <div class="col">
        <button class="btn btn-text btn-sm border border-secondary float-left mr-1" class:d-none={play}  class:d-block={!play}  on:click={()=>{play=true;schedule()}}>{@html octicons['play'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-left mr-1" class:d-none={!play} class:d-block={play}   on:click={()=>{play=false;}}>{@html octicons['mute'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>removeSequencerLine(selected)}>{@html octicons['trashcan'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>clearSequencerLine(selected)}>{@html octicons['zap'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={addSequencerLine}>{@html octicons['plus'].toSVG({ "class": "fill-warning text-small" })}</button>
      </div>
    </div>

    <div class="sequencer mb-2">
      {#each song as item, index}
        <div>
          <div class="sequencer-line" on:click={(event)=>selectSequencerLine(event, index)} class:sequencer-line-selected='{index===selected}'>
            <span class="sequencer-line-number">#{index+1}</span>
            <DrumLine data={item.data} {parts} {beats} {sequence}/>
          </div>
        </div>
      {/each}
    </div>

    {#if selected != null}
      <div class="row">
        <div class="col py-2">
          <Drawer title="Instrument" opened={showInstrumentSettings}>

            <div class="row mb-2">
            <div class="col">
            <div class="text-center">
                <div class="btn-group d-inline-block" role="group" aria-label="Instrument Group">
                {#each Object.keys(instruments) as instrument, index}
                  <button class="btn btn-sm small p-1" style="display: inline-block;" class:btn-secondary={(song[selected].instrument != instrument)} class:btn-primary={(song[selected].instrument == instrument)} on:click={()=> { song[selected].instrument = instrument} }>{instrument}</button>
                {/each}
              </div>
            </div>
            </div>
            </div>

            <div class="row">
              <div class="col p-0 text-center">
                {#each notes as note, index}
                  <button class="mb-1 btn btn-sm small p-1" class:btn-secondary={(song[selected].note+song[selected].octave != note)} class:btn-primary={(song[selected].note+song[selected].octave == note)} on:click={()=> { song[selected].octave = parseInt(note.split('')[1]); song[selected].note = note.split('')[0]; } }>{note}</button>
                  {#if ((index+1) % 7*9) === 0}
                    <br>
                  {/if}
                {/each}
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    {/if}

  </div>
</div>
