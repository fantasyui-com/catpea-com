<script>
  import { fade } from 'svelte/transition';

  export let segment;

  let collapse = true;

  function handleCollapse() {
    collapse=!collapse;
  }

</script>

<style>

</style>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <button class="navbar-toggler border-0" type="button" on:click={handleCollapse}>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse" class:collapse='{collapse}'>
    <ul class="navbar-nav mr-auto">

    <li class="nav-item" class:active='{segment === undefined}'>
        <a class="nav-link" href=".">Home</a>
      </li>

      <li class="nav-item" class:active='{segment === "quarantine"}'>
        <a class="nav-link" rel=prefetch href="/quarantine" title="Poetry and Foolishness">Quarantine Log</a>
      </li>

      <li class="nav-item" class:active='{segment === "research"}'>
        <a class="nav-link" rel=prefetch href="/research" title="User Interface Research">Research Blog</a>
      </li>

      <li class="nav-item" class:active='{segment === "warrior"}'>
        <a class="nav-link" rel=prefetch href="/warrior" title="A Book About Growing Up">Warrior Book</a>
      </li>

      <li class="nav-item" class:active='{segment === "theme"}'>
      <a class="nav-link" rel=prefetch href="/theme" title="User Interface Theme">Design</a>
      </li>

      <li class="nav-item" class:active='{segment === "daw"}'>
        <a class="nav-link" rel=prefetch href="/daw" title="Digital Audio Workstation">Audio</a>
      </li>

      <li class="nav-item" class:active='{segment === "video"}'>
      <a class="nav-link" rel=prefetch href="/video?p=0&i=8" title="Favorite Videos">Video</a>
      </li>

    </ul>

  </div>
</nav>
