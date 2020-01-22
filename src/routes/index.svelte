<script>
import SongBeatCalculator from '../components/SongBeatCalculator.svelte';
import SongTempoChangeCalculator from '../components/SongTempoChangeCalculator.svelte';
import SeasonCalculator from '../components/SeasonCalculator.svelte';
import BodybuildingAdvice from '../components/BodybuildingAdvice.svelte';
import RandomVideo from '../components/RandomVideo.svelte';
import octicons from 'octicons';
import moment from "moment";



const videos = {
  created: '2020-01-17T01:57:49.730Z',
  modified: '2020-01-17T01:57:49.730Z',
  changed: 'recently',
  name: 'Video Library',
  text: 'Cat Pea Video Library contains hundreds of interesting, informative, and educational videos.',
  url: '/video?p=0&i=8',
  img: 'videos.png',
}





let news = [
  {date:'2020-01-22T03:38:19.680Z', html:'Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list.'},
  {date:'2020-01-22T03:23:19.680Z', html:'Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components.'},
  {date:'2020-01-22T03:22:19.680Z', html:'Testing <a href="https://octicons.github.com/" rel="noopener noreferrer" target="_blank">octicons</a>. I love the ' + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + ' icon.'},
];

function recalculateTimestamps(){
  videos.changed = moment(videos.modified).from(moment())
  news = news.map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
}
setInterval(recalculateTimestamps,60000)
recalculateTimestamps();

</script>

<style>
</style>

<svelte:head>
	<title>Cat Pea</title>
</svelte:head>







<div class="container-fluid">
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-4">

    <div class="col pb-3">
        <div class="card text-white bg-dark shadow">
          <a href="{videos.url}"><img src="{videos.img}" class="card-img-top" alt="{videos.name}"></a>
          <div class="card-body p-3">
            <h5 class="card-text">{videos.name}</h5>
            <p class="card-text">{videos.text}</p>
            <a href="{videos.url}" class="btn btn-primary">{videos.name} &raquo;</a>
            <p class="card-text"><small class="text-muted">Updated {videos.changed}</small></p>
          </div>
        </div>
    </div>

    <div class="col pb-3">
    <SeasonCalculator/>
    </div>

    <div class="col pb-3">
    <SongBeatCalculator/>
    </div>

    <div class="col pb-3">
    <SongTempoChangeCalculator/>
    </div>

    <div class="col pb-3">
    <BodybuildingAdvice/>
    </div>

    <div class="col pb-3">
        <div class="card text-white bg-dark shadow" style="min-height: 23rem;">
        <div class="card-header">
          News
        </div>
          <div class="card-body p-3 text-secondary">
          {#each news as item}
            <p class="card-text small">
              {@html item.html} &middot; {item.ago}
            </p>
          {/each}
          </div>
        </div>
    </div>

    <div class="col pb-3">
    <RandomVideo/>
    </div>

    <div class="col pb-3">
    <RandomVideo/>
    </div>



    </div>
</div>
