<script>

  import { onMount, onDestroy } from "svelte";

  import Nav from '../components/Nav.svelte';
  import Tail from '../components/Tail.svelte';

  export let segment;

  let night = false;

  let sandman = {
    intervalId: null,
    current: (new Date()).getHours(),
    morning: 6,
    evening: 6,
    manual: true,
  };

  onMount(async function() {
    // This must only run onMount,
    // because colors should be default during static generation.
    sandman.intervalId = setInterval(()=>{
      sandman.current = (new Date()).getHours();
      if(sandman.manual){
        // in manual mode the automatic adjustments are disabled
      }else{
        // in !manual mode the night variable is constantly adjusted.
        if ( (sandman.current > sandman.morning) && (sandman.current < sandman.evening) ){
          night = false;
        } else {
          night = true;
        }
      }
    },1000);
  });

  onDestroy(async function() {
    clearInterval(sandman.intervalId);
  });

</script>


<style lang="scss" global>
 @import "../style/theme.scss";
</style>
<main class="bg-photo" class:night style="overflow-y: hidden;">
  <Nav {segment} bind:sandman bind:night bulb/>
  <!-- <div>min={min}</div>
  <div>max={max}</div>
  <div>unit={unit}</div>
  <div>(unit &gt; min)={(unit > min)}</div>
  <div>(unit &lt; max)={(unit < max)}</div>
  <div>day={( (unit > min) && (unit < max) )}</div>
  <div>night={!( (unit > min) && (unit < max) )}</div> -->
  <slot></slot>
</main>

<!-- <Tail/> -->
