<script>

import Illustration from 'book-gui/src/Illustration.svelte';
import Text from 'book-gui/src/Text.svelte';
import Link from 'book-gui/src/Link.svelte';
import Business from 'book-gui/src/Business.svelte';
import Youtube from 'book-gui/src/Youtube.svelte';

import Quote from 'book-gui/src/Quote.svelte';
import Poem from 'book-gui/src/Poem.svelte';
import Subtitle from 'book-gui/src/Subtitle.svelte';

const componentLookup = {
  image: Illustration,
  business: Business,
  text: Text,
  youtube: Youtube,
  quote: Quote,
  poem: Poem,
  subtitle: Subtitle,
  link: Link,
}

import calculatePercent from "calculate-percent";

import { onMount } from "svelte";
import { stores } from '@sapper/app';
const { page } = stores();

let pageReady = false;
let database = [];

let chapter = 'index';
let content = {meta:{}, data:[]};
let percent = 0;
let contentNext = {meta:{}, data:[]};
let contentPrev = {meta:{}, data:[]};

// Calculations
let currentIndex = null;

//DEV
let types = new Set();
//DEV

function index(){
  const response = {
    meta:{
      "name": "index",
      "title": "Index"
    },
    data:[
    {
     "type": "text",
     "title": "Table of Contents",
     "text": [

     ]
    },
  ]};

  database.forEach(function(item){
    response.data[0].text.push(`<a href="warrior?chapter=${item.meta.name}">${item.meta.title}</a>`)
  });

  return response;
}

onMount(async function() {

    const res = await fetch("book.json");
    const json = await res.json();
    pageReady = true;
    database = json;

    page.subscribe(value => {
      content = database.find((content) => content.meta.name == value.query.chapter ) || index();
      currentIndex = database.indexOf(content);
      console.log('currentIndex',currentIndex);

      let prevIndex = currentIndex -1;
      if(prevIndex<0) prevIndex = (database.length-1);

      let nextIndex = currentIndex +1;
      if(nextIndex>(database.length-1)) nextIndex = 0;

      contentNext = database[nextIndex];
      contentPrev = database[prevIndex];

      console.log('prevIndex',prevIndex);
      console.log('nextIndex',nextIndex);

      percent = calculatePercent(currentIndex+1, database.length)*100;

    });

    //database.forEach(chapter => chapter.data.forEach(item=>types.add(item.type)))
    // database.forEach(chapter => chapter.data.forEach(item=>Object.keys(item).forEach(item=>types.add(item)) ))
    // console.log(Array.from(types), types);

});



</script>

<style>

</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Warrior</title>
</svelte:head>


<div class="container-fluid" style="visibility: hidden;" class:visible='{pageReady}'>

  <nav class="mb-5" aria-label="breadcrumb">
    <ol class="breadcrumb bg-dark text-white">
    <li class="breadcrumb-item"><a href="warrior?chapter=index">Warrior</a></li>
    <li class="breadcrumb-item active" aria-current="page">{content.meta.title}</li>
    </ol>
  </nav>

</div>

<div class="container-fluid py-5" style="visibility: hidden;" class:visible='{pageReady}'>

{#each content.data as item}
  <div class="row">

  <div class="col-md-2 col-lg-3 col-xl-4">
  </div>

    <div class="col-12 col-md-8 col-lg-6 col-xl-4 mb-5">
    <svelte:component this={componentLookup[item.type]} {...item}/>
    </div>

  <div class="col-md-2 col-lg-3 col-xl-4">
  </div>


  </div>
  {/each}

</div>

<div class="container-fluid" style="visibility: hidden;" class:visible='{pageReady}'>



  <div class="progress bg-dark">
    <div class="progress-bar progress-bar-striped progress-bar-animated-x" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width: {percent}%"></div>
  </div>

  <nav aria-label="Page Navigation">

    <p class="py-3">
      <a href="warrior?chapter={contentNext.meta.name}" class="btn btn-lg btn-primary btn-block">{contentNext.meta.title} <img style="width: 1rem; height:1rem;" src="warrior/images/arrow-alt-circle-right.svg" alt="{contentNext.meta.title}"></a>
    </p>

    <p class="py-3">
      <a href="warrior?chapter={contentPrev.meta.name}" class="btn btn-secondary"><img style="width: 1rem; height:1rem;" src="warrior/images/arrow-alt-circle-left.svg" alt="{contentPrev.meta.title}">&nbsp;{contentPrev.meta.title}</a>
      <a href="warrior?chapter=index" class="btn btn-secondary"><img alt="Index" style="width: 1rem; height:1rem;" src="warrior/images/list-alt.svg"></a>
    </p>

   </nav>

</div>
