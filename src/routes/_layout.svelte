<script>
  import Nav from '../components/Nav.svelte';
  import Tail from '../components/Tail.svelte';

  export let segment;
</script>
 

<style lang="scss" global>
 @import "../style/theme.scss";
</style>

<Nav {segment}/>

<main>
  <slot></slot>
</main>

<!-- <Tail/> -->
