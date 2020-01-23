<script>

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let items = 3;

  // Application

  let news = [
    {date:'2020-01-23T01:46:22.215Z', html:'Made the little news squirrels shake when a user pokes at them. <div class="shake shake-force pull-right">' + octicons.squirrel.toSVG({ "class": "fill-white", "width": 32 }) + '</div>'},
    {date:'2020-01-23T01:07:38.773Z', html:'Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a generic reusable container. Employing the container in News component.'},
    {date:'2020-01-22T03:38:19.680Z', html:'Improved the randomness of Bodybuilding Advice. Items begin repeating after about 84 selections. I added a tiny little sub-progress bar to show when the system will reset, re-shuffle, and begin parading the newly re-shuffled list.'},
    {date:'2020-01-22T03:23:19.680Z', html:'Added Preferences Pane to Bodybuilding Advice. Bodybuilding Advice is meant to serve as a starting point for more complex components.'},
    {date:'2020-01-22T03:22:19.680Z', html:'Testing <a href="https://octicons.github.com/" rel="noopener noreferrer" target="_blank">octicons</a>. I love the <span class="shake">' + octicons.squirrel.toSVG({ "class": "fill-white", "width": 45 }) + '</span> icon.'},
  ];//.map(i=>{ i.html = '<span class="shake">' + octicons.squirrel.toSVG({ "class": "fill-white" }) + ' ' + '</span>' + i.html; return i; })

  function recalculateTimestamps(){
    news = news
      .map(i=>{ i.ago = moment(i.date).from(moment()); return i; })
  }

  // Timers

  setInterval(recalculateTimestamps,60000)

  // Initialization

  recalculateTimestamps();

</script>

<style>


</style>




<PreferenceCard title="News">

  <div slot="preferences" class="card-text">

  <div class="card-text">
    <label class="small" for="duration">News Items</label>
    <div class="input-group mb-3">
    <input type="number" id="duration" min="2" max="10" class="form-control" bind:value={items} placeholder="number of items to display">
      <div class="input-group-append">
      <span class="input-group-text " id="duration-addon">items</span>
      </div>
    </div>
  </div>

  </div>

  <div slot="application" class="card-text" style="max-height: 18rem; overflow-y: auto;">
    {#each news as item, i}
      {#if i<items}
        <div class="card-text small py-1">
          <div class="text-info"><span class="shake">{@html octicons.squirrel.toSVG()}</span> {@html item.html}</div>
          <div class="text-secondary"><span class="badge badge-secondary">{item.ago}</span></div>
        </div>
      {/if}
    {/each}
  </div>


</PreferenceCard>
