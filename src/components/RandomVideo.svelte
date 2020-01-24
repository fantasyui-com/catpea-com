<script>

import PreferenceCard from '../containers/PreferenceCard.svelte';

import octicons from 'octicons';

import { onMount } from "svelte";

import shuffleArray from 'shuffle-array';
import calculatePercent from 'calculate-percent';

import sprintfJs from "sprintf-js";

const printf = sprintfJs.sprintf;

// Application Data

let database = [];
let selected = '';

// Preferences

let titles = false;
let items = 3;

let autopause = 15; // minutes


export let footer = true;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
export let duration = getRandomIntInclusive(10, 60);

onMount(async function() {
  const res = await fetch("youtube.json");
  const data = await res.json()

  setTimeout(i=>{
    database = shuffleArray( data );
    next()
  },1000)

})



// Timer State, automatically computed
let paused = false;
let elapsed = 0; // elapsed seconds
let autopauseElapsed = 0; // seconds
let progress = 0; // how long advice appeared thus far
let procession = 0; // overall progress through the current shuffle.

// Data State
let index = -1;

setInterval(function(){
  if(paused) return;
  if(database.length === 0) return;

  if(elapsed >= duration){
    // Advance
    next();
  }
  elapsed++; // each second elapsed is incremented
  autopauseElapsed++;
  progress = calculatePercent(elapsed, duration) * 100;
  procession = printf('%.0f',calculatePercent(index+1, database.length)*100)

  if(autopauseElapsed >= (autopause*60)){
    paused=true;
    autopauseElapsed=0; // reset so that it does it again.
  }

}, 1000)

function next(){

  // Reset Timer State
  elapsed = 0;
  progress = 0;

  // Perform Index Logic
  index++;
  if(index+1>database.length){
    // End of list, re-shuffle, and reset index.
    database = shuffleArray(database);
    index = 0;
  }

  // Set Advice
  selected = database[index];

}
function prev(){

  // Reset Timer State
  elapsed = 0;
  progress = 0;

  // Perform Index Logic
  if(index==0){
    // do nothing
  }else{
    index--;
  }

  // Set Advice
  selected = database[index];

}



</script>



<style>

</style>

<PreferenceCard title="Videos">

  <button slot="buttons" class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click="{e => paused = !paused}">
  {#if paused}{@html octicons['triangle-right'].toSVG({ "class": "fill-white" })}{/if}
  {#if !paused}{@html octicons['primitive-square'].toSVG({ "class": "fill-white" })}{/if}
  </button>

  <button slot="buttons" class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={next}>{@html octicons['arrow-right'].toSVG({ "class": "fill-white" })}</button>
  <button slot="buttons" class="btn btn-text btn-sm border border-secondary float-right  mr-1" on:click={prev}>{@html octicons['arrow-left'].toSVG({ "class": "fill-white" })}</button>

  <div slot="preferences" class="card-text">

    <div class="card-text">
      <label class="small" for="duration">Duration</label>
      <div class="input-group mb-3">
      <input type="number" id="duration" min="10" max="120" class="form-control" bind:value={duration} placeholder="number of seconds to display">
        <div class="input-group-append">
        <span class="input-group-text " id="duration-addon">seconds</span>
        </div>
      </div>
    </div>

    <div class="card-text">
      <label class="small" for="duration">Autopause</label>
      <div class="input-group mb-3">
      <input type="number" id="duration" min="15" max="{60*24}" class="form-control" bind:value={autopause} placeholder="minutes until autopause">
        <div class="input-group-append">
        <span class="input-group-text " id="duration-addon">minutes</span>
        </div>
      </div>
    </div>

    <div class="card-text">
      <label class="small" for="duration">Big Titles</label>
      <div class="input-group mb-3">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" bind:checked={titles} id="titleControl">
          <label class="custom-control-label" for="titleControl"><!-- some text --></label>
        </div>
      </div>
    </div>

    <div class="card-text">
      <label class="small" for="duration">Footer</label>
      <div class="input-group mb-3">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" bind:checked={footer} id="footerControl">
          <label class="custom-control-label" for="footerControl"><!-- some text --></label>
        </div>
      </div>
    </div>


  </div>

  <div slot="preferences-footer">
  Showing video #{database.indexOf(selected)+1} out of {database.length} videos.
  There is {(autopause*60) - autopauseElapsed} seconds left until autopause.
  </div>

  {#if database.length === 0}
    <div class="card-body text-center">
    <div class="text-warning p-5">Loading Database...</div>
      <div class="spinner-border text-danger" role="status">
        <span class="sr-only">Loading Database...</span>
      </div>
    </div>
  {:else}
    <a href="{selected.url}" rel="noopener noreferrer" target="_blank"><img src="{selected.image}" class="card-img" alt="{selected.title}"></a>

    <div class="card-body p-1 m-0">
    {#if titles}<h5 class="card-title text-center m-0 p-2">{selected.title}</h5>{/if}
    {#if !titles}<p class="card-text small text-secondary text-center">{selected.title}</p>{/if}
    </div>


    {#if footer}

      <div class="progress" style="height: 1px; background: black;">
        <div class="progress-bar bg-warning" role="progressbar" style="width: {progress}%;" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div class="progress mt-1" style="height: 1px; background: black;">
        <div class="progress-bar bg-secondary" role="progressbar" style="width: {procession}%;" aria-valuenow="{procession}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    {/if}

  {/if}

</PreferenceCard>
