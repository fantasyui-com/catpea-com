<script>

import PreferenceCard from '../containers/PreferenceCard.svelte';

import { onMount } from "svelte";
import oneOf from 'oneof';

// Application Data

let videos = [];
let video = '';

// Preferences

let items = 3;
let duration = getRandomIntInclusive(10, 30)
let footer = false;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

onMount(async function() {

  const res = await fetch("youtube.json");
  videos = await res.json();

  video = oneOf(videos);

  setInterval(function(){
      video = oneOf(videos);
  }, duration*1000)

})



</script>



<style>

</style>








<PreferenceCard title="Random Video">

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
      <label class="small" for="duration">Footer</label>
      <div class="input-group mb-3">
        <div class="custom-control custom-switch">
          <input type="checkbox" class="custom-control-input" bind:checked={footer} id="footerControl">
          <label class="custom-control-label" for="footerControl"><!-- some text --></label>
        </div>
      </div>
    </div>

  </div>

  <div slot="application">

    <div class="card-body">
      <div class="card-text">
        <h6 class="card-title">{video.title}</h6>
      </div>
    </div>

    <a href="{video.url}" rel="noopener noreferrer" target="_blank"><img src="{video.image}" class="card-img-bottom" alt="{video.title}"></a>

    {#if footer}
      <div class="card-footer small text-secondary">
        Showing video #{videos.indexOf(video)+1} out of {videos.length} videos.
      </div>
    {/if}

  </div>

</PreferenceCard>
