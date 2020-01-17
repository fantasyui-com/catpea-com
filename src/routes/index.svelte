<script>
import SongBeatCalculator from '../components/SongBeatCalculator.svelte';
import SongTempoChangeCalculator from '../components/SongTempoChangeCalculator.svelte';

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

function recalculate(){
  videos.changed = moment(videos.modified).from(moment())
}
setInterval(recalculate,60000)
recalculate();


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

    <div class="col pb-3"><SongBeatCalculator/></div>
    <div class="col pb-3"><SongTempoChangeCalculator/></div>

    </div>
</div>
