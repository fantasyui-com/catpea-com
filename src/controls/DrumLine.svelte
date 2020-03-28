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

</style>


{#each data as item, index}
    <input type="checkbox" class="sequencer-check" bind:checked={item.enabled} class:odd='{(!!((item.beat+1) % 2))}' class:divider='{!(!!((item.part+1) % parts))}' class:active='{index===sequence}'>
{/each}
