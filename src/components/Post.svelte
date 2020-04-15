<script>

  import Header from './post/Header.svelte';

  export let icon = "info";
  export let title = "";
  export let date = "";
  export let text = "";
  export let html = "";


</script>

<style>

</style>

<div class="post card shadow bg-night text-night">
  <div class="card-header">
    <Header {icon} {title} {date}/>
  </div>
  <div class="card-body">
    {#if text}<div class="card-text">{text}</div>{/if}
    {#if html}<div class="card-text">{@html html}</div>{/if}
  </div>
</div>
