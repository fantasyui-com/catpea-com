<script>
import { onMount } from 'svelte';
import octicons from 'octicons';
import Tone from "tone";
import sampler from '../devices/sampler.js';

export let title = "Soundboard";
export let sample = "salamander";

export let minOctave = 1;
export let maxOctave = 9;

let instrument;
let notes = [];
const simple = true;
const collection = simple?['C','D','E','F','G','A','B']:['C','C#','D','D#','E','F','F#','G','G#','A','A#','B',];

for(let octaveNumber = parseInt(minOctave); octaveNumber <= parseInt(maxOctave); octaveNumber++){
  for(let note = 0; note < collection.length; note++){
  notes.push(`${collection[note]}${octaveNumber}`);
  }
}



// Application State
let loading = false;
let ready = false;

async function sleep(time=3000){
  return new Promise(function(resolve){
    setTimeout(function(){
      resolve()
    },time)
  })
}
async function play(note){
    //console.log('NOTE', note);
    instrument.triggerAttackRelease(note, '2n');
}

async function main(){



  console.log(notes);

 loading = true;
 instrument = await sampler(sample);
 //await sleep(10000);
 loading = false;
 ready = true;
}

onMount(async () => {



});



</script>

<style>
</style>

<div class="card text-white bg-dark shadow">
  <div class="card-header">
    {title}
  </div>
  <div class="card-body">

    <div class="row" class:d-none={ready}> <!-- When ready this whole row goes away -->
      <div class="col p-3">
        <button class="btn btn-primary" class:d-none={loading} on:click={()=>main()}>Load</button> <!-- triggers the load -->
        <div class="progress" class:d-block={loading} class:d-none={!loading}> <!-- hidden until loading is true -->
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">Loading...</div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col p-0 text-center">
          {#each notes as note, index}
            <button class="d-inline-block mb-1 p-1 btn btn-secondary btn-sm" disabled={!ready} on:click={()=>play(note)}>{note}</button>
            {#if ((index+1) % 7*9) === 0}
            <br>
            {/if}
          {/each}

      </div>
    </div>

    <div class="row">
      <div class="col text-muted small pt-2">
        Each octave (row) marks a group of sounds, groups are as follows Misc, SFX, Instuments, Drums, Sticks, Tsk.
        Kit is expressed in <a href="https://en.wikipedia.org/wiki/Scientific_pitch_notation" rel="noopener noreferrer" target="_blank">Scientific Pitch Notation</a>.
        Samples graciously provided by <a href="http://hipstrumentals.com" rel="noopener noreferrer" target="_blank">Hipstrumentals</a>.
      </div>
    </div>

  </div>
</div>
