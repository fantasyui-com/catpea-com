<script>
  export let segment;

  let collapse = true;

  function handleCollapse() {
  collapse=!collapse;
  }



</script>

<style>

</style>





<nav class="navbar navbar-dark navbar-expand-lg shadow-lg border-bottom border-dark mb-3 rounded-pill">
  <a class="navbar-brand" href="."><img src="cats/cat-01.png" alt="Logo Image"></a>

  <button class="navbar-toggler border-0" type="button" on:click={handleCollapse}>
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="navbar-collapse" class:collapse='{collapse}'>
    <ul class="navbar-nav mr-auto">

      <li class="nav-item" class:selected='{segment === undefined}'>
        <a class="nav-link text-primary" href=".">Home <span class="sr-only">(current)</span></a>
      </li>

      <!-- for the stream link, we're using rel=prefetch so that Sapper prefetches
            the stream data when we hover over the link or tap it on a touchscreen -->
      <!-- <li class="nav-item" class:selected='{segment === "stream"}'>
        <a class="nav-link" rel=prefetch href="stream">Stream <span class="sr-only">(current)</span></a>
      </li>

      -->

      <li class="nav-item" class:selected='{segment === "video"}'>
        <a class="nav-link text-primary" href="/video?p=0&i=8">Video Library <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item" class:selected='{segment === "warrior"}'>
        <a class="nav-link text-primary" href="/warrior">The Warrior Book <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" class:selected='{segment === "daw"}'>
        <a class="nav-link text-primary" href="/daw">Digital Audio Workstation <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" class:selected='{segment === "theme"}'>
        <a class="nav-link text-primary" href="/theme">Bootstrap Theme <span class="sr-only">(current)</span></a>
      </li>

<!--
      <li class="nav-item" class:selected='{segment === "warrior"}'>
        <a class="nav-link" href="warrior">Warrior <span class="sr-only">(current)</span></a>
      </li> -->
<!--
      <li class="nav-item" class:selected='{segment === "about"}'>
        <a class="nav-link" href="about">About <span class="sr-only">(current)</span></a>
      </li> -->

      <!-- <li class="nav-item" class:selected='{segment === "stream"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Stream <span class="sr-only">(current)</span></a>
      </li>

      <li class="nav-item" class:selected='{segment === "profile"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Profile <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" class:selected='{segment === "friends"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Friends <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item" class:selected='{segment === "inbox"}'>
        <a class="nav-link disabled" rel=prefetch href="#">Inbox <span class="sr-only">(current)</span></a>
      </li> -->

    </ul>

  </div>
</nav>
