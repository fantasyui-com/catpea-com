<script>

import octicons from 'octicons';
import bodybuildingAdvice from 'bodybuilding-advice';

import shuffleArray from 'shuffle-array';
import calculatePercent from 'calculate-percent';

import sprintfJs from "sprintf-js";
const printf = sprintfJs.sprintf;

let title = 'Bodybuilding Advice';

/*
  0 is Preference View
  1 is Application View
  Add as many as needed.
*/
let view = 1; // controlled via UI icons

// Preferences
let duration = 25; // seconds, user can set this in Preferences

// Timer State, automatically computed
let elapsed = 0; // elapsed seconds
let progress = 0; // how long advice appeared thus far
let procession = 0; // overall progress through the current shuffle.

// Data State
let list = shuffleArray(bodybuildingAdvice());
let index = 0;

// Initialize
let advice = list[index];

setInterval(function(){

  if(elapsed >= duration){
    // Advance
    next();
  }
  elapsed++; // each second elapsed is incremented
  progress = calculatePercent(elapsed, duration) * 100;
  procession = printf('%.0f',calculatePercent(index+1, list.length)*100)
}, 1000)

function next(){

  // Reset Timer State
  elapsed = 0;
  progress = 0;

  // Perform Index Logic
  index++;
  if(index+1>list.length){
    // End of list, re-shuffle, and reset index.
    list = shuffleArray(bodybuildingAdvice());
    index = 0;
  }

  // Set Advice
  advice = list[index];

}


</script>



{#if view == 0}

  <div class="card text-white bg-dark shadow" style="min-height: 23rem;" >
    <div class="card-header lead">
      Preferences
      <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 1}">{@html octicons.checklist.toSVG({ "class": "fill-white" })}</button>
    </div>
    <div class="card-body py-3">

      <div class="card-text">
        <label class="small" for="duration">Message Duration</label>
        <div class="input-group mb-3">
        <input type="number" id="duration" min="10" max="120" class="form-control" bind:value={duration} placeholder="seconds">
          <div class="input-group-append">
          <span class="input-group-text" id="duration-addon">seconds</span>
          </div>
        </div>
      </div>

      <div class="card-text small text-info">
      Database contains {list.length} items. Current shuffle progress {procession}%.
      </div>

    </div>
  </div>

{:else if view == 1}

  <div class="card text-white bg-dark shadow" style="min-height: 23rem;" >

    <div class="card-header lead">
      {title} <button class="btn btn-text btn-sm border border-secondary float-right" on:click="{e => view = 0}">{@html octicons.gear.toSVG({ "class": "fill-white" })}</button>
    </div>

    <div class="card-body py-1">
      <p class="card-text pb-4 text-warning lead text-center pt-4" style="cursor: pointer;" on:click={next}>{advice}</p>
    </div>

    <div class="card-footer text-muted">

      <div class="progress" style="height: 1px; background: black;">
        <div class="progress-bar bg-warning" role="progressbar" style="width: {progress}%;" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div class="progress mt-1" style="height: 1px; background: black;">
        <div class="progress-bar bg-secondary" role="progressbar" style="width: {procession}%;" aria-valuenow="{procession}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>

  </div>

{/if}
