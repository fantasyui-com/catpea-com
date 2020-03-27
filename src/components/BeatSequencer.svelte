<script>

import { onMount } from 'svelte';
import  Tone from "tone";
import octicons from 'octicons';
import DrumLine from '../controls/DrumLine.svelte';

$: data = [
  {
    label:"Drum",
    data:[],
  },
  {
    label:"Drum",
    data:[],
  },
  {
    label:"Drum",
    data:[],
  },
  {
    label:"Drum",
    data:[],
  },
  {
    label:"Drum",
    data:[],
  },
];

$: parts = 4;
$: beats = 4;
$: sequence = 4;

onMount(async () => {

  setInterval(()=>{
    sequence++
    if(sequence == parts*beats){
      sequence = 0;
    }
  },444)
});

</script>

<style>

</style>

<div class="card text-white bg-dark shadow">

  <div class="card-header">
    LOFI Beat Sequencer &middot; BETA PREVIEW
  </div>

  <div class="card-body">

     <div class="row">
      <div class="col small text-muted">
        <small>Sorry the tool does not make any sounds, this is a test of the UI, which is a success, it is just styled checkboxes. You can click one of the boxes to mark where a sound should fire, but audio is not yet connected.</small>
      </div>
    </div>

     <div class="row">
      <div class="col-3 small text-muted">
        <small>Instrument</small>
      </div>
      <div class="col-9 p-0 small text-muted">
        <small>Sequence</small>
      </div>
    </div>



    {#each data as item, index}

    <div class="row">
     <div class="col-3 text-right">
     <small>A{index}</small>
       <!-- <select class="form-control form-control-sm" id="exampleFormControlSelect1">
         <option>A4</option>
         <option>B4</option>
         <option>C4</option>
         <option>D4</option>
         <option>E4</option>
         <option>F4</option>
         <option>G4</option>
       </select> -->
     </div>
     <div class="col-9 p-0">
      <DrumLine chain={item.data} {parts} {beats} {sequence}/>
     </div>
   </div>

    {/each}



    <!-- <pre><code>

    {JSON.stringify(data,null,'  ')}

    </code></pre>
 -->

  </div>
</div>
