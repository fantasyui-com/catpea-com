<script>

// modified from https://javascriptsource.com/beat-counter/
let message = '';
let beatCounter = 0;
let averageTotal = 0;
let totalBpm = 0;
let firstTime = 0;
let lastTime = 0;

let timeoutId = null;

function beat(){
  message = '';
  if(timeoutId) clearTimeout(timeoutId);
  timeoutId = setTimeout(function(){reset()},3000);

  let currentTime = (new Date()).getTime();
  let currentValue = 60000 * beatCounter / (currentTime - firstTime);

  if(beatCounter == 0){
    averageTotal = 100;
    totalBpm = 100;
    firstTime = currentTime;
    beatCounter = 1;

  }else{

    averageTotal = Math.round(currentValue * 100) / 100;
    totalBpm = Math.round(currentValue);
    beatCounter++;

  }
  lastTime = currentTime;
}

function reset(){
  message = `Autoreset. Bpm value was ${totalBpm}.`;
  beatCounter = 0;
  averageTotal = 0;
  totalBpm = 0;
}

</script>

<style>

</style>

<div class="card bg-night text-night shadow">
<div class="card-header">
  Song Beat Calculator
</div>
  <div class="card-body">

    <h3 class="card-title text-center py-5">{totalBpm} BPM</h3>
    <button class="btn btn-primary btn-lg p-4" on:click={beat}>Beat</button>
    <p class="card-text py-3"><small>Start hitting the beat button to the beat of a song to calculate the song's BPM.</small></p>


    <div class="row">
    <div class="col small">
      {message}
      {#if beatCounter}
      Sampled {beatCounter} time{beatCounter==1?'':'s'}, average bpm is {totalBpm}.
      {/if}
    </div>
    <div class="col text-right">
    <button class="btn btn-secondary btn-sm" on:click={reset}>Reset</button>
    </div>
    </div>


  </div>


</div>
