<script>
  export let segment;

  let collapse = true;

  function handleCollapse() {
  collapse=!collapse;
  }



</script>

<style>

</style>





<nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow-lg border-bottom border-dark mb-3 rounded">
  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <button class="navbar-toggler border-0" type="button" on:click={handleCollapse}>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse" class:collapse='{collapse}'>
    <ul class="navbar-nav mr-auto">

      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === undefined}' class:text-primary='{segment !== undefined}' href=".">Home</a>
      </li>

      <!-- for the stream link, we're using rel=prefetch so that Sapper prefetches
            the stream data when we hover over the link or tap it on a touchscreen -->
      <!-- <li class="nav-item" class:selected='{segment === "stream"}'>
        <a class="nav-link" rel=prefetch href="stream">Stream</a>
      </li>

      -->

      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "quarantine"}' class:text-primary='{segment !== "quarantine"}' href="/quarantine">Quarantine</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "research"}' class:text-primary='{segment !== "research"}' href="/research">Research</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "video"}' class:text-primary='{segment !== "video"}' href="/video?p=0&i=8">Videos</a>
      </li>

      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "warrior"}' class:text-primary='{segment !== "warrior"}' href="/warrior">Book</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "daw"}' class:text-primary='{segment !== "daw"}' href="/daw">Audio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" class:text-secondary='{segment === "theme"}' class:text-primary='{segment !== "theme"}' href="/theme">Theme</a>
      </li>

<!--
      <li class="nav-item" class:selected='{segment === "warrior"}'>
        <a class="nav-link" href="warrior">Warrior</a>
      </li> -->
<!--
      <li class="nav-item" class:selected='{segment === "about"}'>
        <a class="nav-link" href="about">About</a>
      </li> -->

      <!-- <li class="nav-item" class:selected='{segment === "stream"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Stream</a>
      </li>

      <li class="nav-item" class:selected='{segment === "profile"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Profile</a>
      </li>
      <li class="nav-item" class:selected='{segment === "friends"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Friends</a>
      </li>
      <li class="nav-item" class:selected='{segment === "inbox"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Inbox</a>
      </li> -->

    </ul>

  </div>
</nav>
