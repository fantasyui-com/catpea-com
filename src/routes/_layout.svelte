<script>
  import Nav from '../components/Nav.svelte';
  import Tail from '../components/Tail.svelte';

  export let segment;

  let d = new Date();
  let allowance = 0;
  let night = false;
  let unit = d.getHours();
  let min = 6
  let max = 20;

  setInterval(()=>{

    d = new Date();
    unit = d.getHours();

    if(allowance<=0){
      if ( (unit > min) && (unit < max) ){
        night = false;
      } else {
        night = true;
      }
    }

    if(allowance>0) allowance = allowance - 1000;
  },1000);

</script>


<style lang="scss" global>
 @import "../style/theme.scss";
</style>
<main class="bg-photo" class:night style="overflow-y: hidden;">
  <Nav {segment} bind:allowance bind:night bulb/>
  <slot></slot>
</main>

<!-- <Tail/> -->
