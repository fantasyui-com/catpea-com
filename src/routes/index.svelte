<script>

import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

import bodybuildingAdvice from 'bodybuilding-advice';

import icons from '../devices/icons.js';
const octicons = icons();

// import news from '../news/index.js';
// let report = news();



import moment from "moment";

import Advice from '../components/Advice.svelte';
import SongBeatCalculator from '../components/SongBeatCalculator.svelte';
import SongTempoChangeCalculator from '../components/SongTempoChangeCalculator.svelte';
import SeasonCalculator from '../components/SeasonCalculator.svelte';
import RandomVideo from '../components/RandomVideo.svelte';
import Squirrel from '../components/Squirrel.svelte';
import SciurineSong from '../components/SciurineSong.svelte';
import HiphopSong from '../components/HiphopSong.svelte';
import LofiSoundboard from '../components/LofiSoundboard.svelte';
import BeatSequencer from '../components/BeatSequencer.svelte';
import SongMachine from '../components/SongMachine.svelte';


const videos = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  name: 'Video Library',
  text: 'CATPEA Video Library contains hundreds of interesting, informative, and educational videos.',
  url: '/video?p=0&i=8',
  img: 'videos.png',
}
const daw = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  name: 'Digital Audio Workstation',
  text: 'CATPEA Digital Audio Workstation is in Alpha. It is unknown if a light-weight implementation is possible, but UI does look very promising.',
  url: '/daw',
  img: 'daw.jpg',
}

const news = {
  modified: '2020-01-25T13:52:05.520Z',
  changed: 'recently',
  caption: 'http://news.catpea.com',
  name: 'ANNOUNCING CATPEA NEWS SERVICE',
  text: 'A dedicated website to all the important things, minus the clutter of strange little programs. Featuring <span class="text-light">poems</span>, research <span class="text-light">notes</span>, and other announcements like updates to my little book, and soon to come Summer adventure <span class="text-light">photos</span>.',
  url: 'http://news.catpea.com',
  img: 'news2.png',
}


// (new Date()).toISOString()
let loading = true;
onMount(async () => {
loading = false;


});


</script>

<style>
</style>

<svelte:head>
  <title>CATPEA! World's Most Advanced Research Laboratories and Skunk Works</title>
</svelte:head>





<div class="container-fluid d-none" class:d-block={loading} style="z-index: 1000;">
    <div class="row">
      <div class="col">
      <div class="clearfix">
        <div class="spinner-border text-light" role="status" style="position: fixed; top:.8rem; left:1rem;">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status" style="position: fixed; top:.8rem; left:1rem;">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      </div>
    </div>
</div>



<div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4">


    <div class="col pb-3">
        <div class="card bg-night text-night shadow">
          <a href="{news.url}"><img src="{news.img}" class="card-img-top" alt="{news.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text text-danger">{news.name}</h5>
            <p class="card-text">{@html news.text}</p>
            <a href="{news.url}" class="btn btn-primary btn-a">{news.caption} &raquo;</a>
            <!-- <p class="card-text"><small>Updated {videos.changed}</small></p> -->
          </div>
        </div>
    </div>

    <!-- <div class="col pb-3">
    <News news={report.quarantine} icon="squirrel" title="Quarantine Log" items="5" link="/quarantine" invitation="There is a lot more poetry ({report.quarantine.length} entries in total) at the Quarantine Log, and it is a lot easier to read on mobile."/>
    </div>

    <div class="col pb-3">
    <News news={report.research} icon="mortar-board" title="Research Blog" items="1" today={true} link="/research" invitation="I share some more thoughts at the Research Blog, a long, easy to scroll, dedicated page with {report.research.length} entries."/>
    </div>

    <div class="col pb-3">
    <News news={report.theme} icon="mortar-board" title="Theme Development Log" items="100"/>
    </div> -->

    <!-- <div class="col pb-3">
    <RandomVideo duration="10"/>
    </div>

    <div class="col pb-3">
    <RandomVideo duration="15"/>
    </div> -->


    <div class="col pb-3">
        <div class="card bg-night text-night shadow">
          <a href="{daw.url}"><img src="{daw.img}" class="card-img-top" alt="{daw.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text">{daw.name}</h5>
            <p class="card-text">{daw.text}</p>
            <a href="{daw.url}" class="btn btn-primary btn-a">{daw.name} &raquo;</a>
            <!-- <p class="card-text"><small>Updated {videos.changed}</small></p> -->
          </div>
        </div>
    </div>

    <div class="col pb-3">
    <SeasonCalculator/>
    </div>

    <div class="col pb-3">
    <Squirrel/>
    </div>

    <div class="col pb-3">
    <BeatSequencer/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Salamander Piano Sampler" sample="salamander" minOctave="1" maxOctave="9"/>
    </div>

    <div class="col pb-3">
    <LofiSoundboard title="Shebang Slash Soundboard" sample="shebang" minOctave="1" maxOctave="6"/>
    </div>


    <div class="col pb-3">
    <HiphopSong/>
    </div>

    <div class="col pb-3">
    <SciurineSong/>
    </div>






    <div class="col pb-3">
        <div class="card bg-night text-night shadow">
          <a href="{videos.url}"><img src="{videos.img}" class="card-img-top" alt="{videos.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text">{videos.name}</h5>
            <p class="card-text">{videos.text}</p>
            <a href="{videos.url}" class="btn btn-primary">{videos.name} &raquo;</a>
            <p class="card-text"><small>Updated {videos.changed}</small></p>
          </div>
        </div>
    </div>





    <div class="col pb-3">
      <SongBeatCalculator/>
    </div>

    <div class="col pb-3">
      <SongTempoChangeCalculator/>
    </div>

    <div class="col pb-3">
      <Advice title="Bodybuilding Advice" data={bodybuildingAdvice()}/>
    </div>

    <div class="col pb-3">
      <RandomVideo/>
    </div>

    </div>
</div>
