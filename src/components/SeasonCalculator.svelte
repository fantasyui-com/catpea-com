<script>

import mainspring from 'mainspring';
import solsticesAndEquinoxes from 'solstices-and-equinoxes';
function makeEvents(){
  let today = new Date();
  //today.setMonth(today.getMonth()+8);
  let tmpList = [];
  function labelEvent(i){
    const o = i.countdown;
    const p = {
      days: o.days==1?'day':'days',
      hours: o.hours==1?'hour':'hours',
      minutes: o.minutes==1?'minute':'minutes',
      seconds: o.seconds==1?'second':'seconds',
    }
    i.text = [
      `${i.label} is in`,
      o.days==0?undefined:`${o.days} ${p.days},`,
      o.hours==0?undefined:`${o.hours} ${p.hours},`,
      o.minutes==0?undefined:`${o.minutes} ${p.minutes} and`,
      `${o.seconds} ${p.seconds}.`
    ].join(' ');
    return i
  }
  const year = new Date().getFullYear();
  const thisYear = solsticesAndEquinoxes.filter(i=>i.year==(year)).pop();
  const nextYear = solsticesAndEquinoxes.filter(i=>i.year==(year+1)).pop();
  tmpList.push({name: 'Spring', label:'Vernal (Spring) Equinox', countdown: mainspring(new Date(thisYear.spring),today)});
  tmpList.push({name: 'Summer', label:'Summer Solstice', countdown: mainspring(new Date(thisYear.summer),today)});
  tmpList.push({name: 'Fall',   label:'Autumnal Equinox',   countdown: mainspring(new Date(thisYear.fall),today)});
  tmpList.push({name: 'Winter', label:'Winter Solstice', countdown: mainspring(new Date(thisYear.winter),today)});
  tmpList.push({name: 'Spring', label:year+1+' Vernal (Spring) Equinox', countdown: mainspring(new Date(nextYear.spring),today)});
  tmpList.push({name: 'Summer', label:year+1+' Summer Solstice', countdown: mainspring(new Date(nextYear.summer),today)});
  tmpList.push({name: 'Fall',   label:year+1+' Autumnal Equinox',   countdown: mainspring(new Date(nextYear.fall),today)});
  tmpList.push({name: 'Winter', label:year+1+' Winter Solstice', countdown: mainspring(new Date(nextYear.winter),today)});
  tmpList = tmpList.filter(i=>i.countdown.inFuture);
  tmpList = tmpList.map(i=>labelEvent(i))
  const tracker = new Set();

  const response = [];
  for (let entry of tmpList) {
    if(!tracker.has(entry.name)){
      response.push(entry);
      tracker.add(entry.name)
    }
  }
  response[0].next = true;
  return response;
}

let events = makeEvents();
setInterval(function(){
  events = makeEvents();
},1000)


</script>



<style>

</style>

<div class="card text-white bg-dark shadow">
  <div class="card-header">
    Solstice and Equinox Calculator
  </div>
  <div class="card-body py-3">


    {#each events as event}
      {#if event.next}
      <p class="card-text pb-4 text-primary lead">{event.text}</p>
      {:else}
      <p class="card-text pb-2 text-muted">{event.text}</p>
      {/if}
    {/each}


  </div>
</div>
