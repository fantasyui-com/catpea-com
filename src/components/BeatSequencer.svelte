<script>

import { onMount } from 'svelte';
import  Tone from "tone";
import octicons from 'octicons';
import DrumLine from '../controls/DrumLine.svelte';

import sampler from '../devices/sampler.js';

let data = [
  {
    label:"Drum",
    octave: 1,
    note:"A",
    data:[],
  },
  {
    label:"Drum",
    octave: 2,
    note:"B",
    data:[],
  },
  {
    label:"Drum",
    octave: 3,
    note:"C",
    data:[],
  },
  {
    label:"Drum",
    octave: 4,
    note:"D",
    data:[],
  },
  {
    label:"Drum",
    octave: 5,
    note:"E",
    data:[],
  },
  {
    label:"Drum",
    octave: 6,
    note:"F",
    data:[],
  },
];

$: parts = 4;
$: beats = 8;

$: sequence = 4;

onMount(async () => {

  let instrument = await sampler();

  var synth = new Tone.Synth().toMaster()

  // for(let item of data ){ } // for of main data
  data = data.map(item=>{
    // populate data
    for(let beat = 0; beat < beats; beat++ ){
      for(let part = 0; part < parts; part++ ){
        item.data = item.data.concat({ beat,part,enabled:false });
      }
    }
    return item;
  });

  setInterval(()=>{
    sequence++
    if(sequence == parts*beats){
      sequence = 0;
    }
    for(let item of data ){
      if(item.data[sequence].enabled){
        instrument.triggerAttackRelease(item.note+item.octave, '2n');
      }
    }
  },(1000*60)/(160*parts));

});

</script>

<style>

  .selectable {
    border: 1px solid transparent;
    border-radius: 4px;
  }

  .selectable:hover {
    border: 1px solid orange;
    border-radius: 4px;
  }

</style>

<div class="card text-white bg-dark shadow">

  <div class="card-header">
    LOFI Beat Sequencer &middot; BETA PREVIEW
  </div>

  <div class="card-body">

     <div class="row">
      <div class="col small text-muted">
        <!-- <small>Sorry the tool does not make any sounds, this is a test of the UI, which is a success, it is just styled checkboxes.
        You can click one of the boxes to mark where a sound is to fire.</small> -->
      </div>
    </div>

     <div class="row">
      <div class="col-4 small text-muted">
        <small>Instrument</small>
      </div>
      <div class="col-8 p-0 small text-muted">
        <small>Sequence</small>
      </div>
    </div>



    {#each data as item, index}

    <div class="row selectable">
     <div>
     <!-- <small>{item.note+item.octave}</small> -->
     <div class="col p-0">

       <select class="d-inline-block form-control form-control-sm" bind:value={item.note} id="exampleFormControlSelect1" style="height: 20px; line-height: 20px; font-size: 11px; padding:0px; width:2rem;">
         <option value="A">A</option>
         <option value="B">B</option>
         <option value="C">C</option>
         <option value="D">D</option>
         <option value="E">E</option>
         <option value="F">F</option>
         <option value="G">G</option>
       </select>

       <select class="d-inline-block form-control form-control-sm" bind:value={item.octave} id="exampleFormControlSelect1" style="height: 20px; line-height: 20px; font-size: 11px; padding:0px; width:2rem;">
         <option value={1}>1</option>
         <option value={2}>2</option>
         <option value={3}>3</option>
         <option value={4}>4</option>
         <option value={5}>5</option>
         <option value={6}>6</option>
         <option value={7}>7</option>
       </select>

     </div>

      <DrumLine data={item.data} {parts} {beats} {sequence}/>
     </div>
   </div>

    {/each}



    <!-- <pre><code>

    {JSON.stringify(data,null,'  ')}

    </code></pre>
 -->

  </div>
</div>
