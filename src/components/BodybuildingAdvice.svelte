<script>

import bodybuildingAdvice from 'bodybuilding-advice';
import oneOf from 'oneof';

let progress = 100;
let advice = oneOf(bodybuildingAdvice());

setInterval(function(){
  progress--
  if(progress==0) {
    advice = oneOf(bodybuildingAdvice());
    progress = 100;
  }
}, 300)
function boom(){
  advice = oneOf(bodybuildingAdvice());
  progress = 100;
}


</script>



<style>

</style>

<div class="card text-white bg-dark shadow" style="min-height: 23rem;">
  <div class="card-header">
    Bodybuilding Advice
  </div>
	<div class="card-body py-3">

    <p class="card-text pb-4 text-warning lead text-center pt-4" style="cursor: pointer;" on:click={boom}>{advice}</p>

    <div class="progress" style="height: 1px; background: black;">
      <div class="progress-bar bg-warning" role="progressbar" style="width: {progress}%;" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
 	</div>
</div>
