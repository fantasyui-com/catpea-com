<script>

import Tone from "tone";
import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
import octicons from 'octicons';
import DrumLine from '../controls/DrumLine.svelte';
import sampler from '../devices/sampler.js';




let song = [];

let play = true;

$: bpm = 160;
$: parts = 4;
$: beats = 4;
let beatBuffer = 4*8;

$: showLineProperties = false;
$: showHelp = false;
$: showSongStructure = false;
$: showInstrumentSettings = true;

$: selected = null;
$: sequence = 4;

let notes = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "A3", "B3", "C3", "D3", "E3", "F3", "G3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6", "C6", "D6", "E6", "F6", "G6"];

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






function expandNotation(str){
  const response = [];

  const arr = str.split(' ').map(digits=>digits.split('').map(i=>parseInt(i)));
  const beats = arr.length;
  const parts = arr[0].length;

  for(let beat = 0; beat < beatBuffer; beat++ ){
    for(let part = 0; part < parts; part++ ){
      let enabled=false;
      if(beat<beats){
        if(part<parts){
          enabled = !!(arr[beat][part])
        }
      }
      response.push({ beat,part,enabled });
    }
  }
  //console.log(response);
  return response;
}


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

function loadPreset(event){
  selected = null;
  //console.log( event.target.value );
  const targets = presets.filter(i=>i.name==event.target.value);
  if(targets.length){
    let selection = targets[0];
    bpm = selection.bpm;
    beats = selection.beats;
    parts = selection.parts;
    song = JSON.parse(JSON.stringify(selection.song))
    //console.log(song);
    event.target.value = 0;
  }
 }

function loadPresetByIndex(index){

  selected = null;
  let selection = presets[index];
  bpm = selection.bpm;
  beats = selection.beats;
  parts = selection.parts;
  song = JSON.parse(JSON.stringify(selection.song))
  //console.log(song);
  event.target.value = 0;

 }








let instrument = {};

function itemGenerator(custom={}){
    const item = Object.assign({
      label:"Drum",
      octave: 6,
      note:"F",
      data:[],
    },custom);
    for(let beat = 0; beat < beatBuffer; beat++ ){
      for(let part = 0; part < parts; part++ ){
        item.data = item.data.concat({ beat,part,enabled:false });
      }
    }
    return item;
}

function dataGenerator(items=1){

  let generated = [];
  for(let item = 0; item < items; item++ ){
    generated.push(itemGenerator())
  }
  return generated;
}

function incrementSequence(){
  sequence++
  if(sequence >= parts*beats){
    sequence = 0;
  }


  for(let item of song ){

      if(item.data[sequence].enabled){
        instrument.triggerAttackRelease(item.note+item.octave, '2n');
      }

  }
}

function schedule(){
  setTimeout(function(){
    if(play){
      incrementSequence();
      schedule();
    }else{
      sequence=0;
    }
  }, (1000*60)/(bpm*parts))
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

function selectSequencerLine(event, index){
  selected = index;
  showInstrumentSettings = true;
}

function addSequencerLine(){
  song = song.concat(dataGenerator())
}

function removeSequencerLine(index){
  selected = null; // must clear selection or errors will occur
  song[index].data = song[index].data.map(i=>{i.enabled=false; return i;});
  song = song.filter((item,localIndex)=>localIndex!=index)
}

function clearSequencerLine(index){
  song[index].data = song[index].data.map(i=>{i.enabled=false; return i;});
}

</script>



<div class="card text-white bg-dark shadow">

  <div class="card-header">
    Shebang Slash Beat Sequencer
  </div>

  <div class="card-body">

     <div class="row">
      <div class="col small text-muted">
        <!-- <small>Sorry the tool does not make any sounds, this is a test of the UI, which is a success, it is just styled checkboxes.
        You can click one of the boxes to mark where a sound is to fire.</small> -->
      </div>
    </div>

     <div class="row">
      <div class="col py-2">

      <div class="drawer">
        <div class="drawer-title" on:click={()=>showHelp=!showHelp}>
          <span class="drawer-label">Help</span>
          <span class="drawer-toggle">
          {#if showHelp}
          {@html octicons['eye-closed'].toSVG({ "class": "fill-warning" })}
          {:else}
          {@html octicons['settings'].toSVG({ "class": "fill-warning" })}
          {/if}
          </span>
        </div>
        <div class="drawer-body small text-info " class:drawer-closed={!showHelp}>
         {#each tips as item, index}
          <div class="mb-2 px-1">
          <span style="display: inline-block; min-width: 1.2rem;">{@html octicons[item.icon].toSVG({ "class": "fill-light" })}</span>
          {item.text}
          </div>
        {/each}
        </div>
      </div>



      </div>
    </div>

    <div class="row">
      <div class="col py-2">

      <div class="drawer">
        <div class="drawer-title" on:click={()=>showLineProperties=!showLineProperties}>
          <span class="drawer-label">Presets</span>
          <span class="drawer-toggle">
          {#if showLineProperties}
          {@html octicons['eye-closed'].toSVG({ "class": "fill-warning" })}
          {:else}
          {@html octicons['settings'].toSVG({ "class": "fill-warning" })}
          {/if}
          </span>
        </div>
        <div class="drawer-body small text-primary" class:drawer-closed={!showLineProperties}>
        {#each presets as item, index}
         <div  class="cursor-pointer mb-2 bg-hover-dark px-1" on:click={()=>loadPresetByIndex(index)}>
           <span class="">{item.name}</span>
           <span class="text-muted">{item.bpm}BPM {item.parts}/{item.beats}</span>
         </div>
       {/each}
        </div>
      </div>

    </div>
    </div>

    <div class="row">
      <div class="col py-2">


            <div class="drawer">
              <div class="drawer-title" on:click={()=>showSongStructure=!showSongStructure}>
                <span class="drawer-label">Song Properties</span>
                <span class="drawer-toggle">
                {#if showSongStructure}
                {@html octicons['eye-closed'].toSVG({ "class": "fill-warning" })}
                {:else}
                {@html octicons['settings'].toSVG({ "class": "fill-warning" })}
                {/if}
                </span>
              </div>
              <div class="drawer-body small text-info " class:drawer-closed={!showSongStructure}>

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



                <!-- <div class="form-group">
                  <select class="d-inline form-control form-control-sm" bind:value={beats} id="exampleFormControlSelect1">
                    <option value={4}>4 Beats per Measure</option>
                    <option value={8}>8 Beats per Measure</option>
                    <option value={16}>16 Beats per Measure</option>
                  </select>
                </div>

                <div class="form-group">
                  <select class="d-inline form-control form-control-sm" bind:value={parts} id="exampleFormControlSelect1">
                    <option value={2}>2 Parts per Beat</option>
                    <option value={4}>4 Parts per Beat</option>
                    <option value={8}>8 Parts per Beat</option>
                  </select>
                </div> -->

              </div>
            </div>

    </div>
    </div>

    <div class="row my-2">
      <div class="col">




        <button class="btn btn-text btn-sm border border-secondary float-left mr-1" class:d-none={play}  class:d-block={!play}  on:click={()=>{play=true;schedule()}}>{@html octicons['play'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-left mr-1" class:d-none={!play} class:d-block={play}   on:click={()=>{play=false;}}>{@html octicons['mute'].toSVG({ "class": "fill-warning text-small" })}</button>

        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>removeSequencerLine(selected)}>{@html octicons['trashcan'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>clearSequencerLine(selected)}>{@html octicons['zap'].toSVG({ "class": "fill-warning text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={addSequencerLine}>{@html octicons['plus'].toSVG({ "class": "fill-warning text-small" })}</button>
        <!-- <button class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={addSequencerLine}>{@html octicons['mute'].toSVG({ "class": "fill-white text-small" })}</button> -->
      </div>
    </div>


    <div class="sequencer mb-2">
      {#each song as item, index}
        <div>
          <div class="sequencer-line" on:click={(event)=>selectSequencerLine(event, index)} class:sequencer-line-selected='{index===selected}'>
          <!-- <button class="sequencer-line-selector" on:click={(event)=>selectSequencerLine(event, index)}></button> -->
            <span class="sequencer-line-number">#{index+1}</span>
            <DrumLine data={item.data} {parts} {beats} {sequence}/>
          </div>
        </div>
      {/each}
    </div>

    {#if selected != null}
    <div class="row">
      <div class="col py-2">

        <div class="drawer">

          <div class="drawer-title" on:click={()=>showInstrumentSettings=!showInstrumentSettings}>
            <span class="drawer-label">Instrument</span>
            <span class="drawer-toggle">
            {#if showInstrumentSettings}
            {@html octicons['eye-closed'].toSVG({ "class": "fill-warning" })}
            {:else}
            {@html octicons['settings'].toSVG({ "class": "fill-warning" })}
            {/if}
            </span>
          </div>

          <div class="drawer-body" class:drawer-closed={!showInstrumentSettings}>
          <!-- <p class="lead">Configuration for row #{selected+1}</p> -->

          <div class="row">
            <div class="col p-0 text-center">
                 {#each notes as note, index}
                  <button class="mb-1 btn btn-sm" class:btn-secondary={(song[selected].note+song[selected].octave != note)} class:btn-primary={(song[selected].note+song[selected].octave == note)} on:click={()=> { song[selected].octave = parseInt(note.split('')[1]); song[selected].note = note.split('')[0]; } }>{note}</button>
                  {#if ((index+1) % 7*9) === 0}
                  <br>
                  {/if}
                {/each}

            </div>
          </div>

          <!-- <form>
            <div class="row">
              <div class="col">
                <div class="form-group">
                  <small class="form-text text-muted">Octave</small>
                  <select class="d-inline-block form-control form-control-sm" bind:value={song[selected].octave} id="exampleFormControlSelect1">
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                  </select>
                </div>
              </div>
              <div class="col">
                <div class="form-group">
                  <small class="form-text text-muted">Note</small>
                  <select class="d-inline-block form-control form-control-sm" bind:value={song[selected].note} id="exampleFormControlSelect1">
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="F">F</option>
                    <option value="G">G</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
              <small class="form-text text-muted">Select the octave to list notes from, and the note to play when a box is active.</small>
              </div>
            </div>
          </form> -->

          </div>
        </div>

      </div>
    </div>
    {/if}


    <!-- {#if selected != null}
    <div class="row mb-2">
      <div class="col">


      <form>
      <small class="form-text text-muted">Configuration for row #{selected+1}</small>

      <div class="row">
        <div class="col">
          <div class="form-group">
            <small class="form-text text-muted">Octave</small>
            <select class="d-inline-block form-control form-control-sm" bind:value={song[selected].octave} id="exampleFormControlSelect1">
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
            </select>
          </div>
        </div>
        <div class="col">
          <div class="form-group">
            <small class="form-text text-muted">Note</small>
            <select class="d-inline-block form-control form-control-sm" bind:value={song[selected].note} id="exampleFormControlSelect1">
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
              <option value="D">D</option>
              <option value="E">E</option>
              <option value="F">F</option>
              <option value="G">G</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
        <small class="form-text text-muted">Select the octave to list notes from, and the note to play when a box is active.</small>
        </div>
      </div>







     </form>







      </div>
    </div>
    {/if} -->





    <!-- <pre><code>

    {JSON.stringify(data,null,'  ')}

    </code></pre>
 -->

  </div>
</div>
