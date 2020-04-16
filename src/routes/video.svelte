<script>

import { onMount } from "svelte";
import { stores } from '@sapper/app';
const { page } = stores();

let pageReady = false;


let showPerPage = 8;
let startAt = 0;

let database = [];
let posts = [];

let browsePage = 0;
let browsePages = 0;

$: start = parseInt($page.query.p) * parseInt($page.query.i);
$: end = start + parseInt($page.query.i);
$: slice = database.slice(start, end);


onMount(async function() {

    const res = await fetch("youtube.json");
    const json = await res.json();
    database = json;
    console.log('database.length: %d',database.length)
    pageReady = true;

});

</script>

<style>

</style>

<svelte:head>
  <title>CATPEA! Videos</title>
</svelte:head>


<div class="container-fluid" style="visibility: hidden;" class:visible='{pageReady}'>

    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">
    {#each slice as post}
      <div class="col mb-4">
        <div class="card bg-night text-night shadow p-0 m-0">
          <a href="{post.url}" rel="noopener noreferrer" target="_blank"><img src="{post.image}" class="card-img-top" alt="{post.title}"></a>
          <div class="card-body p-3">
            <h5 class="card-text small">{post.title}</h5>
          </div>
        </div>
      </div>
    {/each}
    </div>

    <div class="row" style="display: none;" class:d-flex='{(parseInt($page.query.p) - 1)>-1}'>

      <div class="col-md-6 mb-4 order-2 order-md-1">
        <a class="btn btn-dark btn-lg shadow" href="/video?p={parseInt($page.query.p) - 1}&i={$page.query.i}">&laquo; Return to page {parseInt($page.query.p) }</a>
      </div>

      <div class="col-md-6 mb-4 text-md-right order-1 order-md-2">
        <div class="p-2 lead">
        Viewing page {parseInt($page.query.p)+1 } out of {  Math.ceil((database.length/parseInt($page.query.i))) }
          </div>
      </div>

    </div>

    <div class="row" style="display: none;" class:d-flex='{( (parseInt($page.query.p)+1) * parseInt($page.query.i) < database.length)}'>
      <div class="col mb-4">
        <a class="btn btn-dark btn-lg text-primary btn-block shadow" href="/video?p={parseInt($page.query.p) + 1}&i={$page.query.i}">Page {parseInt($page.query.p) + 2} &raquo;</a>
      </div>
    </div>

    <div class="row" style="display: none;" class:d-flex='{( (parseInt($page.query.p)+1) * parseInt($page.query.i) >= database.length)}'>
      <div class="col mb-4">
        <a class="btn btn-dark btn-lg text-primary btn-block shadow" href="/video?p=0&i={$page.query.i}">Return to page 1 &infin;</a>
      </div>
    </div>

</div>
