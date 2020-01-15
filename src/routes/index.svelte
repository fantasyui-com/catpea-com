<script>

import { onMount } from "svelte";
import uuidv4 from "uuid/v4";



const date = new Date();
const year = date.getFullYear();

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const names = [
  ['Catpea'],
  ['Advanced'],
  ['Technological'],
  ['Product'],
  ['Emergence'],
  ['Architecture']
];
let name = "";

const makeName = function(){
name = "";
for (let potential of names){
  console.log(names, potential);
  let randomIndex = rnd(0,potential.length-1)
  let chosen = potential[randomIndex];
  name = name + ' ' + chosen;

}
};

makeName(); setInterval(makeName, 1000*60);


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
    shuffle(database);
    nextPage()
});

let exhausted = false;

function nextPage(){

  if(startAt>(database.length-1)) exhausted = true;

  console.log('exhausted',exhausted)
  if(exhausted){
    shuffle(database);
    posts = database.slice(0,showPerPage);
  }else{
    const pages = ((database.length-1)/showPerPage)+1
    const page = (startAt/showPerPage)+1
    console.log('startAt=%d, showPerPage=%d, page=%d/%d', startAt, showPerPage, page,pages)
    posts = database.slice(startAt, startAt+showPerPage);
    startAt = startAt + showPerPage;
    console.log('startAt=%d, showPerPage=%d', startAt, showPerPage)

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







<div class="container-fluid">


    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">

    {#each posts as post}

      <div class="col mb-4">
        <div class="card bg-secondary text-white fade-in">
          <a href="{post.url}"><img src="{post.image}" class="card-img-top" alt="{post.title}"></a>
          <div class="card-body">
            <h5 class="card-title small">{post.title}</h5>
          </div>
        </div>
      </div>

    {/each}

    </div>


    <div class="row p-5">
    {#if exhausted}
      <button class="btn btn-info btn-lg btn-block" on:click={nextPage}>More &raquo;</button>
    {:else}
      <button class="btn btn-primary btn-lg btn-block" on:click={nextPage}>Next &raquo;</button>
    {/if}

    </div>



</div>
