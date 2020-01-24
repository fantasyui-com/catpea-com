<script>

  import moment from "moment";
  import octicons from 'octicons';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let items = 10;
  let footer = true;

  // Application



   let propositions = {

     init: [
       {text:'<div class="shake shake-force d-inline-block">' + octicons.squirrel.toSVG({ "class": "fill-white", height: 56  }) + '</div> <div>Hello, I am Squirrel. I am an <a href="https://en.wikipedia.org/wiki/Expert_system" rel="noopener noreferrer" target="_blank">expert-system</a>, fully capable of emulating the decision-making ability of a human expert... provided... enough time.</div>'},
       {text:'Please state the nature of your emergency.'},
       {pick:[
         //{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
         //{text:'What are your Prime Directives?', reply:'Aww.', icon:'cats/cat-02.png'},
         {text:'What are your Prime Directives?', proposition:'directives'},
         {text:'I was just searching for the terminal.', proposition:'terminal'},
         {text:'What is your name?', proposition:'introduction'},
         //{text:'I told you, go away already!', action:reset}
       ]},
     ],
     start: [
       {pick:[
         //{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
         //{text:'What are your Prime Directives?', reply:'Aww.', icon:'cats/cat-02.png'},
         {text:'What are your Prime Directives?', proposition:'directives'},
         {text:'I was just searching for the terminal.', proposition:'terminal'},
         {text:'What is your name?', proposition:'introduction'},
         //{text:'I told you, go away already!', action:reset}
       ]},
     ],
     schedule: [
       {text:"Here is my launch schedule."},
       {text:"Terminal 1 month, Musical 2 months..."},
       {pick:[
         {text:'OK.', proposition:'start'},
         // {text:'OK.', action:()=>{conversation=[], interactions=[]}},
       ]},
     ],

     terminal: [
       {text:"Sorry, not ready yet."},
       {pick:[
         {text:'When will it be ready?', reply:'Soon.', proposition:'schedule'},
         {text:'OK.', proposition:'start'},
       ]},
     ],

     doctor: [
       {text:"Yes! It is an honorary title."},
       {pick:[
         {text:'How did you get the title?', proposition:'better'},
         {text:'OK.', proposition:'start'},
       ]},
     ],
     better: [
       {text:"I tend to make people feel better."},
       {pick:[
         //{text:'OK.', proposition:'start', action:reset},
         {text:'Wow!', proposition:'start'},
       ]},
     ],

     introduction: [
       {text:"It is just Squirrel... Dr. Squirrel. Thanks for asking."},
       {pick:[
         {text:'Sure.', proposition:'start'},
         {text:'Are you a real Doctor?', proposition:'doctor'},
       ]},
     ],


     directives: [
       {text:"Serve the public trust."},
       {text:"Protect the innocent."},
       {text:"Uphold the law."},
       {pick:[
         {text:'Wow, I can\'t even...', proposition:'start'},
       ]},
     ],


   };
   let conversation = [];
   let interactions = [];

   function proposition(list){
     if(list){
       list.forEach(function(item){
         console.log(item);
         if(item.pick){
           interactions = [...interactions, item];
           console.log(interactions);
         }else{
           conversation = [...conversation, item];
         }
       });// each proposition
     } // proposition existence
   }
   function reset() {
     conversation = []; // clear because starting anew.
     interactions = []; // clear because starting anew.
   }
   function initialize() {
     reset();
     proposition( propositions.init );
   }
   function interact(chosen) {
     interactions = []; // clear interaction because user has made a response
     conversation = [...conversation, {text:chosen.text, user:true}] // log user text
     if(chosen.action) chosen.action(); // execute action if present
     // Attempt to construct a reply packet
     const packet = {};
     if(chosen.reply) packet.text = chosen.reply
     if(chosen.icon) packet.icon = chosen.icon;
     if(Object.keys(packet).length) conversation=[...conversation, packet];
     /* If proposition entry exists, loop it*/
     proposition( propositions[chosen.proposition] );
   }


initialize()
</script>

<style>


</style>




<PreferenceCard title="Squirrel">

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
  </div>




  <div class="p-3" style="max-height: 18rem; overflow-y: auto;">
  <!-- STORAGE OF CONVERSATION -->
  {#each conversation as item}
    {#if item.user}
      <div class="shadow border border-primary rounded-lg ml-5 mb-2">
        <div class="card-body">
            <h5 class="card-title small text-muted">You:</h5>
            <p class="card-text small">{item.text}</p>
        </div>
      </div>
    {:else}
      <div class="shadow border border-warning rounded-lg mr-5 mb-2">
        <div class="card-body">
            {#if item.icon} <img src="{item.icon}" class="d-inline" alt="Icon"> {/if}
            <p class="card-text small">{@html item.text}</p>
        </div>
      </div>
    {/if}
  {/each}
  <!-- /STORAGE OF CONVERSATION -->

  <!-- PRESENTATION OF INTERACTION -->
  {#each interactions as potential}
    {#each potential.pick as choice}
    <button type="button" class="btn btn-sm btn-outline-primary m-1" on:click|preventDefault={() => interact(choice)}>
      {choice.text}
    </button>
    {/each}
  {/each}
  <!-- /PRESENTATION OF INTERACTION -->
  </div>




</PreferenceCard>
