<script>
import { onMount } from 'svelte';
  export let parts = 4;
  export let beats = 4;
  export let sequence = 0;

  export let chain = [];

  $: data = [];

  onMount(async () => {
    data = chain;
    
    for(let beat = 0; beat < beats; beat++ ){
      for(let part = 0; part < parts; part++ ){
        data = data.concat({ beat,part,enabled:false });
      }
    }
    data = data;
  });


  // display: inline-block;  padding: 2px;  border-width: 1px; background:silver;

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
