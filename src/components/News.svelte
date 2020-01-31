<script>

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let items = 10;
  let footer = true;

  // Application







  let news = [
    {date:'2020-01-31T04:07:32.063Z', html:'Hee Haw, what a ride, I split the user Interface components used in <a href="/warrior" class="text-warning">The Warrior Book</a> from <a href="https://github.com/fantasyui-com/catpea-com" rel="noopener noreferrer" target="_blank" class="text-warning">Cat Pea Code</a> and created a creatively named stand-alone project: <a href="https://fantasyui-com.github.io/book-gui/?path=/story/widgets--illustration" rel="noopener noreferrer" target="_blank" class="text-warning">book-gui</a>, Ooh Wee.'},

    {date:'2020-01-28T03:34:30.737Z', html:'Added <a href="/warrior" class="text-warning">The Warrior Book</a> to the main menu. It is a complicated effort as the book was converted to a pure data file, and now needs components to render the data. It made the book very portable, but there are a couple of broken internal links, and perhaps a bug or two.'},

    {date:'2020-01-25T01:01:25.484Z', html:'The Squirrel Expert System can hide topics that the user already discussed. Squirrel\'s mind can be configured via Preferences pane. Added warning to anomalous IQ settings. Added secondary directives.'},

    {date:'2020-01-24T14:39:17.606Z', html:'Added Squirrel AI.'},
    {date:'2020-01-24T02:11:52.327Z', html:'Added Squirrel <div class="shake shake-force">' + octicons.squirrel.toSVG({ "class": "fill-white", height: 56  }) + '</div>'},
    {date:'2020-01-24T02:06:48.327Z', html:'Improved news readability.'},
    {date:'2020-01-24T01:34:33.923Z', html:'Added prev/next navigation to random videos.'},
    {date:'2020-01-24T01:16:31.658Z', html:'Continued exploring potential for component re-usability. <a href="https://svelte.dev/" rel="noopener noreferrer" target="_blank">Svelte\'s</a> <a href="https://sapper.svelte.dev/" rel="noopener noreferrer" target="_blank">Sapper</a> is following WebComponents where templating is concerned (I can reference same slot multiple times), CSS module isolation works great, metaprogramming HTML with {#if}{:else}{/if} is fine. It does beat <a href="https://markojs.com/" rel="noopener noreferrer" target="_blank">Marko</a>, <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">React</a> and <a href="https://vuejs.org/" rel="noopener noreferrer" target="_blank">Vue</a>.'},
    {date:'2020-01-24T00:51:10.250Z', html:'Added Autopause to Random Video player, improved its randomness.'},
    {date:'2020-01-23T01:46:22.215Z', html:'Made the little news squirrels shake when a user pokes at them. <div class="shake shake-force pull-right">' + octicons.squirrel.toSVG({ "class": "fill-white"}) + '</div>'},
    {date:'2020-01-23T01:07:38.773Z', html:'Testing component composition by generalizing Bodybuilding Advice Preferences Pane into a <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/containers/PreferenceCard.svelte#L46" rel="noopener noreferrer" target="_blank">generic reusable container</a>. Employing the container in <a href="https://github.com/fantasyui-com/catpea-com/blob/0b3dd8426cc0cdcf9ade924293489c3f63996fd1/src/components/News.svelte#L45" rel="noopener noreferrer" target="_blank">News component</a>.'},
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
    <input type="number" id="duration" min="2" max="50" class="form-control" bind:value={items} placeholder="number of items to display">
      <div class="input-group-append">
      <span class="input-group-text " id="duration-addon">items</span>
      </div>
    </div>
  </div>

  <div class="card-text">
    <label class="small" for="duration">Footer</label>
    <div class="input-group mb-3">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" bind:checked={footer} id="footerControl">
        <label class="custom-control-label" for="footerControl"><!-- some text --></label>
      </div>
    </div>
  </div>


  </div>

  <div slot="preferences-footer">
  {#if news.length >= items}
  Showing {items} out of {news.length} items.
  {:else}
  Max items to display {items}, items in database {news.length}.
  {/if}
  </div>

    <div class="card-body" style="max-height: 25rem; overflow-y: auto;">
      {#each news as item, i}
        {#if i<items}
          <div class="card-text small">

          <div class="row mb-3">
            <div class="col-1"> <!-- d-flex justify-content-center -->
              <span class="shake">{@html octicons.squirrel.toSVG()}</span>
            </div>
            <div class="col">
              <div class="text-muted">{@html item.html}</div>
              <div class="text-right"><span class="badge badge-secondary">{item.ago}</span></div>
            </div>
          </div>

          </div>
        {/if}
      {/each}
    </div>

    {#if footer}
    {#if news.length >= items}
      <div class="card-footer small text-secondary">
        Showing {items} out of {news.length} items.
      </div>
      {/if}
    {/if}



</PreferenceCard>
