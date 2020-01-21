<script>
import { onMount } from "svelte";
import oneOf from 'oneof';
let videos = [];
let video = '';

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

onMount(async function() {

  const res = await fetch("youtube.json");
  videos = await res.json();

  video = oneOf(videos);

  setInterval(function(){
      video = oneOf(videos);
  }, getRandomIntInclusive(10*1000,20*1000))

})



</script>



<style>

</style>

<div class="card bg-dark text-white shadow">
<div class="card-header">
  {video.title}
</div>
  <a href="{video.url}" rel="noopener noreferrer" target="_blank"><img src="{video.image}" class="card-img-bottom" alt="{video.title}"></a>
</div>
