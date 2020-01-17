<script>

import { onMount } from "svelte";
import uuidv4 from "uuid/v4";


let ready = false;

const date = new Date();
const year = date.getFullYear();

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

// const names = [
//   ['Catpea'],
//   ['Advanced'],
//   ['Technological'],
//   ['Product'],
//   ['Emergence'],
//   ['Architecture']
// ];
// let name = "";
//
// const makeName = function(){
// name = "";
// for (let potential of names){
//   console.log(names, potential);
//   let randomIndex = rnd(0,potential.length-1)
//   let chosen = potential[randomIndex];
//   name = name + ' ' + chosen;
//
// }
// };
//
// makeName(); setInterval(makeName, 1000*60);


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}


let showPerPage = 8;
let startAt = 0;
let database = [];
let posts = [];


let pageId = uuidv4();

onMount(async function() {

    const res = await fetch("youtube.json");
    const json = await res.json();
    database = json;

    // shuffle(database);

    renderPage();
    ready = true;

});

let exhausted = false;
let page = 0;
let pages = 0;

function nextPage(){
  advancePage();
  renderPage();
}

function advancePage(){
  if(startAt>(database.length-1)) exhausted = true;
  console.log('exhausted',exhausted)

  if(exhausted){
    shuffle(database);
  }else{
    startAt = startAt + showPerPage;
   }


}

function renderPage(){

  if(startAt>(database.length-1)) exhausted = true;

  pages = Math.floor(((database.length-1)/showPerPage)+1)
  page = (startAt/showPerPage)+1
  
  if(exhausted){
    posts = database.slice(0, showPerPage);
  }else{
    posts = database.slice(startAt, startAt+showPerPage);
  }

  setTimeout(function () {
    window.scrollTo({
      top: 0,
      left: 0,
      //behavior: 'smooth'
    });
  },2);

}


</script>

<style>

</style>

<svelte:head>
	<title>Cat Pea</title>
</svelte:head>







<div class="container-fluid" style="visibility: hidden;" class:visible='{ready}'>


    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">

    {#each posts as post}

      <div class="col mb-4">
        <div class="card bg-secondary text-white shadow p-0 m-0">

          <a href="{post.url}"><img src="{post.image}" class="card-img-top" alt="{post.title}"></a>

          <div class="card-body p-3">
            <h5 class="card-text small">{post.title}</h5>
          </div>

        </div>
      </div>

    {/each}

    </div>


    <div class="row">
      <div class="col mb-4">

      {#if exhausted}
        <button class="btn btn-secondary btn-lg btn-block shadow" on:click={nextPage}>Shuffle &infin;</button>
      {:else}
        <button class="btn btn-secondary btn-lg btn-block shadow" on:click={nextPage}>Page {page}/{pages} &raquo;</button>
      {/if}

      </div>
    </div>




</div>
