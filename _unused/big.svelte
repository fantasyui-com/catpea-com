<script>
 import News from '../components/News.svelte';
 </script>

<style>
</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works</title>
</svelte:head>

<div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
      <div class="col pb-3">
        <News height="auto" items={10000}/>
      </div>
    </div>
</div>
