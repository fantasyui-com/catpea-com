<script>
import { onMount } from 'svelte';

// Pre-configure the GUI
export let parts = 4;
export let beats = 4;
export let data = [];

// Dynamic data that is sent from Master COntrol Program
export let sequence = 0;

onMount(async () => {

});

</script>

<style>

.regular-checkbox {
  -webkit-appearance: none;
  background-color: darkgray;
  border: 1px solid silver;

  line-height:14px;
  width:14px;
  height:14px;

  padding: 2px;
  margin:0px;


  border-radius: 0px;

  display: inline-block;
  position: relative;
}

.regular-checkbox.sequence{
  border-color: salmon;

}

.regular-checkbox.odd{
  background:grey;
}
.regular-checkbox.divider{
  margin-right: 1px;
}
.regular-checkbox:checked{
  background:steelblue;
}

</style>

{#each data as item, index}
    <input type="checkbox" class="regular-checkbox" bind:checked={item.enabled} class:odd='{(!!((item.beat+1) % 2))}' class:divider='{!(!!((item.part+1) % parts))}' class:sequence='{index===sequence}'>
{/each}
<!-- 
<pre><code>

{JSON.stringify(data,null,'  ')}

</code></pre> -->
