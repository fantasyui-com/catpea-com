<script>
  import { slide } from 'svelte/transition';
  export let segment;
  let collapsed = false;
</script>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4 d-none d-lg-flex">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <div class="navbar-collapse">
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
      <a class="nav-link" rel=prefetch href="/theme" title="User Interface Theme">The Design</a>
      </li>

      <li class="nav-item" class:active='{segment === "daw"}'>
        <a class="nav-link" rel=prefetch href="/daw" title="Digital Audio Workstation">Song Machine</a>
      </li>

      <li class="nav-item" class:active='{segment === "video"}'>
      <a class="nav-link" rel=prefetch href="/video?p=0&i=8" title="Favorite Videos">Video Browser</a>
      </li>

      <li class="nav-item" class:active='{segment === "wall"}'>
      <a class="nav-link" rel=prefetch href="/wall" title="Video Wall">Video Wall</a>
      </li>

    </ul>
  </div>

</nav>

<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow mb-4 d-lg-none">

  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <button class="navbar-toggler border-0" type="button" on:click={()=>collapsed =! collapsed} class:collapsed={collapsed}>
    <span class="navbar-toggler-icon"></span>
  </button>

  {#if collapsed}
    <div class="navbar-collapse" in:slide={{ duration: 1500 }} out:slide={{ duration: 500 }}>
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
        <a class="nav-link" rel=prefetch href="/theme" title="User Interface Theme">The Design</a>
        </li>

        <li class="nav-item" class:active='{segment === "daw"}'>
          <a class="nav-link" rel=prefetch href="/daw" title="Digital Audio Workstation">Song Machine</a>
        </li>

        <li class="nav-item" class:active='{segment === "video"}'>
        <a class="nav-link" rel=prefetch href="/video?p=0&i=8" title="Favorite Videos">Video Browser</a>
        </li>

        <li class="nav-item" class:active='{segment === "wall"}'>
        <a class="nav-link" rel=prefetch href="/wall" title="Video Wall">Video Wall</a>
        </li>

      </ul>
    </div>
  {/if}

</nav>
