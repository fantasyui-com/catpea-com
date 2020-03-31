<script>

import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

import Drawer from '../containers/Drawer.svelte';
import Icon from '../controls/Icon.svelte';
import DrumLine from '../controls/DrumLine.svelte';

import sampler from '../devices/sampler.js';

import Tone from "tone";
import octicons from 'octicons';

let beatBuffer = 4*8;
let notes = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "A3", "B3", "C3", "D3", "E3", "F3", "G3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6", "C6", "D6", "E6", "F6", "G6"];

$: bpm = 160;
$: parts = 4;
$: beats = 4;

let instrument = {};
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


// https://docs.google.com/spreadsheets/d/19_3BxUMy3uy1Gb0V8Wc-TcG7q16Amfn6e8QVw4-HuD0/edit#gid=0
let presets = [
  {
    name: 'Billie Jean',
    bpm: 120,
    beats:4,
    parts:4,
    song: [
      {label:'Kick'      , device:'lofi', octave:4, note:'E', data:expandNotation('1000 0000 1000 0000')},
      {label:'Snare'     , device:'lofi', octave:5, note:'E', data:expandNotation('0000 1000 0000 1000')},
      {label:'Closed Hat', device:'lofi', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010')},
    ]
  },

  {
    name: 'Billie Jean',
    bpm: 120,
    beats:4,
    parts:4,
    song: [
      {label:'Kick'      , device:'lofi', octave:4, note:'E', data:expandNotation('1000 0000 1000 0000')},
      {label:'Snare'     , device:'lofi', octave:5, note:'E', data:expandNotation('0000 1000 0000 1000')},
      {label:'Closed Hat', device:'lofi', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010')},
    ]
  },
  {
    name: 'Billie Jean Meow Mix',
    bpm: 140,
    beats:8,
    parts:4,
    song: [
      {label:'Kick'      , device:'lofi', octave:4, note:'E', data:expandNotation('1000 0000 1000 0000 1000 0000 1010 0000')},
      {label:'Snare'     , device:'lofi', octave:5, note:'E', data:expandNotation('0000 1000 0000 1000 0000 1000 0000 1000')},
      {label:'Closed Hat', device:'lofi', octave:6, note:'C', data:expandNotation('1010 1010 1010 1010 1010 1010 1010 1010')},
    ]
  }
]

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
  //console.log(response);
  return response;
}

function loadPreset(event) {
  selected = null;
  //console.log( event.target.value );
  const targets = presets.filter(i => i.name == event.target.value);
  if (targets.length) {
    let selection = targets[0];
    bpm = selection.bpm;
    beats = selection.beats;
    parts = selection.parts;
    song = JSON.parse(JSON.stringify(selection.song))
    //console.log(song);
    event.target.value = 0;
  }
}

function loadPresetByIndex(index) {

  selected = null;
  let selection = presets[index];
  bpm = selection.bpm;
  beats = selection.beats;
  parts = selection.parts;
  song = JSON.parse(JSON.stringify(selection.song))
  //console.log(song);
  event.target.value = 0;

}

function itemGenerator(custom = {}) {
  const item = Object.assign({
    label: "Drum",
    octave: 6,
    note: "F",
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
  for (let item = 0; item < items; item++) {
    generated.push(itemGenerator())
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
      instrument.triggerAttackRelease(item.note + item.octave, '2n');
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
  instrument = await sampler();
  const synth = new Tone.Synth().toMaster()
  song = dataGenerator(4);
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
        <Drawer title="Help" opened>
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
          <Drawer title="Instrument">
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
