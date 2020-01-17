<script>

import sprintfJs from "sprintf-js";
const printf = sprintfJs.sprintf;


let ffmpeg = true;
let original = 130;
let target = 160;

function songTempoChange(originalBpm, targetBpm){

    if(typeof originalBpm !== 'number') return 1;
    if(originalBpm > 900) return 1;
    if(originalBpm < 10) return 1;

    if(typeof targetBpm !== 'number') return 1;
    if(targetBpm > 900) return 1;
    if(targetBpm < 10) return 1;

    const difference = targetBpm - originalBpm;
    return  (difference / originalBpm)+1;

}

$: adjustment = songTempoChange(original, target).toPrecision(3);

</script>

<style>

</style>

<div class="card text-white bg-dark shadow">
<div class="card-header">
  Calculate Song Tempo Change
</div>
	<div class="card-body">
			<!-- <p class="card-text"><input type="number" min="10" max="900" bind:value={original} placeholder="original"> <abbr title="Beats Per Minute">bpm</abbr></p>
			<p class="card-text"><input type="number" min="10" max="900" bind:value={target} placeholder="target"> <abbr title="Beats Per Minute">bpm</abbr></p> -->

      <div class="card-text">
        <div class="row no-gutters">
          <div class="col-md-6 text-center">
          <div class="form-group px-3">
            <label class="small" for="originalBeat">Original <abbr title="Beats Per Minute">BPM</abbr></label>
            <input type="number" id="originalBeat" min="10" max="900" class="form-control" bind:value={original} placeholder="original">
          </div>
          </div>
          <div class="col-md-6 text-center">
          <div class="form-group px-3">
            <label class="small" for="targetBeat">Target <abbr title="Beats Per Minute">BPM</abbr></label>
            <input type="number" id="targetBeat" min="10" max="900" class="form-control" bind:value={target} placeholder="target">
          </div>
         </div>
        </div>
      </div>

      <div class="card-text text-center">
      <div class="form-check mb-3">
        <input class="form-check-input" type="checkbox" bind:checked={ffmpeg} id="ffmpegMode">
        <label class="form-check-label small" for="ffmpegMode">
          Show <a href="https://ffmpeg.org/" rel="noopener noreferrer" target="_blank">FFmpeg</a> Command
        </label>
      </div>
      </div>

      <!-- <div class="card-text">
        <div class="form-group">
          <label for="originalBeat">Original Beat</label>
          <input type="number" id="originalBeat" min="10" max="900" class="form-control" style="width: 5rem;" bind:value={original} placeholder="original">
        </div>
      </div>

      <div class="card-text">
        <div class="form-group">
          <label for="targetBeat">Target Beat</label>
          <input type="number" id="targetBeat" min="10" max="900" class="form-control" style="width: 5rem;" bind:value={target} placeholder="target">
        </div>
      </div> -->





      {#if ffmpeg}
      <div class="card-text">

      <div class="alert alert-primary shadow" role="alert">
        ffmpeg -i <span class="text-secondary">input-file.mp3</span> -af atempo=<strong>{adjustment}</strong> <span class="text-secondary">output-file-{target}.mp3</span>
      </div>


      </div>

      <p class="card-text small"><strong>-af</strong> Simple filtergraphs are configured with the per-stream -filter option (with -vf and -af aliases for video and audio respectively). <a href="https://ffmpeg.org/ffmpeg.html#Filtering">&raquo</a></p>
      <p class="card-text small"><strong>atempo</strong> Adjust audio tempo. The filter accepts exactly one parameter, the audio tempo. If not specified then the filter will assume nominal 1.0 tempo. Tempo must be in the [0.5, 100.0] range. Note that tempo greater than 2 will skip some samples rather than blend them in. <a href="https://ffmpeg.org/ffmpeg-filters.html#atempo">&raquo</a></p>
         {:else}

         <div class="card-text">
         <div class="alert alert-primary shadow text-center" role="alert">
           {printf('%.2f',(adjustment-1)*100)}%
         </div>
         </div>

      {/if}



	</div>
</div>
