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

let database = [];
let posts = [

  {kind:"youtube", title:"Laniakea: Our home supercluster", url:"https://www.youtube.com/watch?v=rENyyRwxpHo", image:"https://img.youtube.com/vi/rENyyRwxpHo/0.jpg" },
  {kind:"youtube", title:"Oumuamua", url:"https://www.youtube.com/watch?v=rfi3w9Bzwik", image:"https://img.youtube.com/vi/rfi3w9Bzwik/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=gypAjPp6eps", image:"https://img.youtube.com/vi/gypAjPp6eps/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=yqc9zX04DXs", image:"https://img.youtube.com/vi/yqc9zX04DXs/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=1-OdJmAefOY", image:"https://img.youtube.com/vi/1-OdJmAefOY/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=P1ww1IXRfTA", image:"https://img.youtube.com/vi/P1ww1IXRfTA/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=UuRxRGR3VpM", image:"https://img.youtube.com/vi/UuRxRGR3VpM/0.jpg" },
  {kind:"youtube", title:"", text:"", url:"https://www.youtube.com/watch?v=YnU6vMVAdAE", image:"https://img.youtube.com/vi/YnU6vMVAdAE/0.jpg" },

];

let pageId = uuidv4();

onMount(async function() {
    const res = await fetch("youtube.json");
    const json = await res.json();
    database = json;
    shuffle(database);
    posts = database.slice(0,8)
 });

function nextPage(){
  shuffle(database);
  posts = database.slice(0,8)
  pageId = uuidv4();
}


</script>
<style>
 
</style>

<svelte:head>
	<title>Cat Pea</title>
</svelte:head>







<div class="container-fluid">


    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">

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
      <a class="btn btn-primary btn-lg btn-block" href="/?start={pageId}" on:click={nextPage} role="button">Next &raquo;</a>
    </div>



</div>
