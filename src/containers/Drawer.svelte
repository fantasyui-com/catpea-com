<script>

  // import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import { slide } from 'svelte/transition';
  import { fade } from 'svelte/transition';

  import Icon from '../controls/Icon.svelte';

  import octicons from 'octicons';

  export let title = "";
  export let opened = false;
  //export let color = "warning";

  function open(){
    opened = true;
  }
  function close(){
    opened = false;
  }
  function toggle(){
    opened?close():open();
  }

</script>

<div class="drawer">

  <div class="drawer-title" on:click={toggle}>
    <span class="drawer-label">{title}</span>
    <span class="drawer-toggle">
    {#if opened}
      <Icon name="eye-closed" color="warning"/>
    {:else}
      <Icon name="settings" color="warning"/>
    {/if}
    </span>
  </div>

  {#if opened}
    <div class="drawer-body" transition:slide>
      <slot/>
    </div>
  {/if}

</div>
