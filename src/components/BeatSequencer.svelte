<script>

import Tone from "tone";
import { onMount, beforeUpdate, afterUpdate } from 'svelte';
import octicons from 'octicons';
import DrumLine from '../controls/DrumLine.svelte';
import sampler from '../devices/sampler.js';

let song = [];

$: bpm = 160;
$: parts = 4;
$: beats = 4;
let beatBuffer = 4*8;

$: showLineProperties = false;
$: showHelp = true;
$: showSongStructure = false;

const tips = [
  {text:`Click a box to make it emit a sound.`, icon:'info'},
  {text:`Fold a section up, to get it out of the way.`, icon:'fold-up'},
  {text:`Open up the presets section for some neat songs.`, icon:'fold-down'},
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

    let selection = presets[index];
    bpm = selection.bpm;
    beats = selection.beats;
    parts = selection.parts;
    song = JSON.parse(JSON.stringify(selection.song))
    //console.log(song);
    event.target.value = 0;

 }






$: selected = null;
$: sequence = 4;

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
    incrementSequence();
    schedule();
  }, (1000*60)/(bpm*parts))
}

onMount(async () => {

  instrument = await sampler();
  const synth = new Tone.Synth().toMaster()
  song = dataGenerator(4);
  schedule();



});

function selectSequencerLine(event, index){
  selected = index;
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
    LOFI Beat Sequencer &middot; BETA PREVIEW
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
          {@html octicons['fold-up'].toSVG({ "class": "fill-warning" })}
          {:else}
          {@html octicons['fold-down'].toSVG({ "class": "fill-warning" })}
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
          {#if showHelp}
          {@html octicons['fold-up'].toSVG({ "class": "fill-warning" })}
          {:else}
          {@html octicons['fold-down'].toSVG({ "class": "fill-warning" })}
          {/if}
          </span>
        </div>
        <div class="drawer-body small text-info " class:drawer-closed={!showLineProperties}>
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
                <span class="drawer-label">Structure</span>
                <span class="drawer-toggle">
                {#if showHelp}
                {@html octicons['fold-up'].toSVG({ "class": "fill-warning" })}
                {:else}
                {@html octicons['fold-down'].toSVG({ "class": "fill-warning" })}
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

                <div class="alert alert-danger" role="alert">
                  Altering Beats per Measure and Parts per Beat is buggy because that changes the fundamentals of a song setup for a different beat/step.
                  I believe that is an indication that the following two fatures are outside of the scope of this little widget.
                  Now, it is still possible to alter things, but ONLY, ONLY, by loading a preset that is 16 Beats per Measure or 2 Parts per Beat.
                  The presets have their data properly structured, they are already pre-set for Parts & Beats; whereas, existing content in in its original mode and changing it destroys its sound, tempo, feel, and lastly the data it self.
                </div>
                <div class="alert alert-info" role="alert">
                Programming is interesting, programs have currents, and to go with a current is to make a 50 line program, to go against it, is to write 1,500+ lines and it takes too much theory, too much remembering, too much documentation, for that program to be fun.
                Interestingly, there is really no difference in 50 lines and 1,500 lines of code, outside of the larger being uncomfortable. Caring for a 50 line program, and writing a 1,500 line program, takes the same amount of time.
                </div>

                <div class="form-group">
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
                </div>

              </div>
            </div>

    </div>
    </div>

    <div class="row my-2">
      <div class="col">




        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>removeSequencerLine(selected)}>{@html octicons['trashcan'].toSVG({ "class": "fill-white text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right mr-1" disabled={selected == null} on:click={()=>clearSequencerLine(selected)}>{@html octicons['zap'].toSVG({ "class": "fill-white text-small" })}</button>
        <button class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={addSequencerLine}>{@html octicons['plus'].toSVG({ "class": "fill-white text-small" })}</button>
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
    {/if}





    <!-- <pre><code>

    {JSON.stringify(data,null,'  ')}

    </code></pre>
 -->

  </div>
</div>
