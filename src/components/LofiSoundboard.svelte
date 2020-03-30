<script>
import { onMount } from 'svelte';
import octicons from 'octicons';
import Tone from "tone";
import sampler from '../devices/sampler.js';
let instrument;
let notes = ["A1", "B1", "C1", "D1", "E1", "F1", "G1", "A2", "B2", "C2", "D2", "E2", "F2", "G2", "A3", "B3", "C3", "D3", "E3", "F3", "G3", "A4", "B4", "C4", "D4", "E4", "F4", "G4", "A5", "B5", "C5", "D5", "E5", "F5", "G5", "A6", "B6", "C6", "D6", "E6", "F6", "G6"];

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
    console.log('NOTE', note);
    instrument.triggerAttackRelease(note, '2n');
}

async function main(){
 loading = true;
 instrument = await sampler();
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
    Shebang Slash Soundboard
  </div>
  <div class="card-body">
    <div class="row">
      <div class="col p-0 text-center">
          {#each notes as note, index}
            <button class="d-inline-block mb-1 p-2 btn btn-secondary btn-sm" disabled={!ready} on:click={()=>play(note)}>{note}</button>
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

    <div class="row" class:d-none={ready}> <!-- When ready this whole row goes away -->
      <div class="col p-3">
        <button class="btn btn-primary" class:d-none={loading} on:click={()=>main()}>Start</button> <!-- triggers the load -->
        <div class="progress" class:d-block={loading} class:d-none={!loading}> <!-- hidden until loading is true -->
          <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">Loading...</div>
        </div>
      </div>
    </div>

  </div>
</div>
