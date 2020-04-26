<script>

  import { onMount, onDestroy } from 'svelte';

  import calculatePercent from 'calculate-percent';
  import dataShuffle from 'lodash/shuffle';
  import cloneDeep from 'lodash/cloneDeep';

  export let title;
  export let data;
  export let list = cloneDeep( data );

  let mounted = false;
  let index = 0; // Index of selected list array element
  $: text = list[index]; // Text of selected list array element.
  $: progress = calculatePercent(index+1, list.length) * 100;

  // Pane Configuration
  let active = 0; // Card Selection
  let panes = [{text:title},{text:'Preferences'}]

  // Settings
  let duration = 5; // seconds
  let paused = false;
  let timeoutId;

  function next(){
    index++;
    if((index+1) == list.length){
      index = 0;
      list = dataShuffle(list);
    }
  }

  function reschedule(){
    if(paused) return;
    next();
    timeoutId = setTimeout(reschedule, duration*1000);
  }

  onDestroy(() => {
    clearTimeout(timeoutId);
  });

  onMount(() => {
    mounted = true;
    timeoutId = setTimeout(reschedule, duration*1000);
  });

  function unshuffle(){
      list = cloneDeep(data);
  }

  function shuffle(){
      list = dataShuffle(data);
  }

  function pause(){
      paused = true;
      clearTimeout(timeoutId);
  }

  function resume(){
      paused = false;
      timeoutId = setTimeout(reschedule, duration*1000);
  }

  function reset(){
    paused = true;
    clearTimeout(timeoutId);

    paused = false;
    timeoutId = setTimeout(reschedule, duration*1000);
    next();
  }

</script>

{#if active === 0}
  <div class="card shadow">
    <div class="card-header border-primary">
      <ul class="nav nav-tabs card-header-tabs">
      {#each panes as item, index}
        {#if active === index}
          <li class="nav-item">
            <a href="." on:click|preventDefault={()=>active=index} class="nav-link active">{item.text}</a>
          </li>
        {:else}
          <li class="nav-item">
            <a href="." on:click|preventDefault={()=>active=index} class="nav-link">{item.text}</a>
          </li>
        {/if}
      {/each}
      </ul>
    </div>
    <div class="card-body text-center" style="min-height: 25rem;">
      <p class="pt-5 my-5 h4 px-4">{text}</p>
    </div>
    <div class="card-footer">
      <div class="progress" style="">
        <div class="progress-bar text-white" role="progressbar" style="width: {progress}%" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100"> <span class:d-none={progress<10}>{progress.toFixed(0)}%</span> </div>
      </div>
    </div>
  </div>
{:else}
  <div class="card shadow">
    <div class="card-header border-primary">
      <ul class="nav nav-tabs card-header-tabs">
      {#each panes as item, index}
        {#if active === index}
          <li class="nav-item">
            <a href="." on:click|preventDefault={()=>active=index} class="nav-link active">{item.text}</a>
          </li>
        {:else}
          <li class="nav-item">
            <a href="." on:click|preventDefault={()=>active=index} class="nav-link">{item.text}</a>
          </li>
        {/if}
      {/each}
      </ul>
    </div>
    <div class="card-body" style="min-height: 25rem;">
      <div class="form-group">
        <label for="customRange1">Message ({index+1}/{list.length})</label>
        <input type="range" class="custom-range" id="customRange1" bind:value={index} on:mousedown={pause} min="0" max="{list.length}" step="1">
      </div>
      <div class="form-group">
        <label for="customRange1">Message Duration ({duration} {duration==1?'second':'seconds'})</label>
        <input type="range" class="custom-range" id="customRange1" bind:value={duration} on:change={(ev)=>{clearTimeout(timeoutId); duration=ev.target.value; reset()}} min="1" max="120" step="1">
      </div>
      {#if !paused}<button class="btn btn-primary" on:click={pause}><img src="icons/pause-fill.svg" alt="" width="24" height="24" style="filter: invert(1);"> Pause</button>{/if}
      {#if paused}<button class="btn btn-secondary" on:click={resume}><img src="icons/play-fill.svg" alt="" width="24" height="24" style="filter: invert(1);"> Play</button>{/if}
      <button class="btn btn-primary" on:click={shuffle}><img src="icons/shuffle.svg" alt="" width="24" height="24" style="filter: invert(1);"> Shuffle</button>
      <button class="btn btn-primary" on:click={shuffle}><img src="icons/arrow-left-right.svg" alt="" width="24" height="24" style="filter: invert(1);"> Unshuffle</button>
    </div>
    <div class="card-footer">
      <div class="progress" style="">
        <div class="progress-bar text-white" role="progressbar" style="width: {progress}%" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100"> <span class:d-none={progress<10}>{progress.toFixed(0)}%</span> </div>
      </div>
    </div>
  </div>
{/if}
