<script>

// modified from https://javascriptsource.com/beat-counter/

let beatCounter = 0;
let averageTotal = 0;
let totalBpm = 0;
let firstTime = 0;
let lastTime = 0;

function beat(){
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
  beatCounter = 0;
  averageTotal = 0;
  totalBpm = 0;
}

</script>

<style>

</style>

<div class="card text-white bg-dark shadow">
<div class="card-header">
  Song Beat Calculator
</div>
	<div class="card-body">

    <h3 class="card-title text-white text-center py-5">{totalBpm} BPM</h3>
    <button class="btn btn-primary btn-lg" on:click={beat}>Beat</button>
    <p class="card-text py-3"><small class="text-info">Start hitting the beat button to the beat of a song to calculate the song's BPM.</small></p>

    <div class="text-right">
      <button class="btn btn-secondary btn-sm" on:click={reset}>Reset</button>
    </div>

	</div>


</div>
