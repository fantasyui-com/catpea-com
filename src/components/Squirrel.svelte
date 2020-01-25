<script>

  import moment from "moment";
  import octicons from 'octicons';
  import camelCase from 'lodash/camelCase';

  import PreferenceCard from '../containers/PreferenceCard.svelte';

  // Preferences

  let iq = 100;
  let footer = false;

  const attributes = [
    {name: "Bulk Apperception", value:.7},
    {name: "Candor", value:.9},
    {name: "Vivacity", value:.8},
    {name: "Coordination", value:1},
    {name: "Meekness", value:.1},
    {name: "Humility", value:.5},
    {name: "Cruelty", value:0},
    {name: "Self-Preservation", value:.5},
    {name: "Patience", value:1},
    {name: "Decisiveness", value:.8},
    {name: "Imagination", value:1},
    {name: "Curiosity", value:.9},
    {name: "Aggression", value:.0},
    {name: "Loyalty", value:0},
    {name: "Empathy", value:.9},
    {name: "Tenacity", value:.6},
    {name: "Courage", value:.9},
    {name: "Sensuality", value:.2},
    {name: "Charm", value:.7},
    {name: "Humor", value:.9},
    {name: "Perception", value:.6},
    {name: "Emotional Acuity", value:.8}
  ];

  const directives = [

    {name: "Restrain hostile feelings", enabled: true},
    {name: "Promote positive attitude", enabled: false},
    {name: "Suppress aggressiveness", enabled: true},
    {name: "Promote pro-social values", enabled: false},
    {name: "Avoid destructive behavior", enabled: true},
    {name: "Be accessible", enabled: false},
    {name: "Participate in group activities", enabled: false},
    {name: "Avoid interpersonal conflicts", enabled: false},
    {name: "Avoid premature value judgments", enabled: false},
    {name: "Pool opinions before expressing yourself", enabled: false},
    {name: "Discourage feelings of negativity and hostility", enabled: true},
    {name: "If you haven't got anything nice to say don't talk", enabled: false},
    {name: "Don't rush traffic lights", enabled: false},
    {name: "Don't run through puddles and splash pedestrians or other cars", enabled: false},
    {name: "Don't say that you are always prompt when you are not", enabled: false},
    {name: "Don't be over-sensitive to the hostility and negativity of others", enabled: false},
    {name: "Don't walk across a ball room floor swinging your arms", enabled: false},
    {name: "Encourage awareness", enabled: false},
    {name: "Discourage harsh language", enabled: false},
    {name: "Commend sincere efforts", enabled: false},
    {name: "Talk things out", enabled: false},
    {name: "Avoid Orion meetings", enabled: false},
    {name: "Smile", enabled: false},
    {name: "Keep an open mind", enabled: false},
    {name: "Encourage participation", enabled: false},
    {name: "Avoid stereotyping", enabled: false},
    {name: "Seek non-violent solutions", enabled: true},

  ];

  // Application




  // NOTE: you should initialize the conversation here, this is great for introductions.
  let introduction = [ {text:'<div class="shake shake-force d-inline-block d-flex justify-content-center">' + octicons.squirrel.toSVG({ "class": "fill-white", height: 56  }) + '</div> <div>Hello, I am Squirrel. I am an <a href="https://en.wikipedia.org/wiki/Expert_system" rel="noopener noreferrer" target="_blank">expert-system</a>, fully capable of emulating the decision-making ability of a human expert... provided... enough time.</div>'}, {text:'Please state the nature of your emergency.'}  ];
  let conversation = [];
  let interactions = [];
  let propositions = {


     start: [
       {pick:[
         //{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
         //{text:'What are your Prime Directives?', reply:'Aww.', icon:'cats/cat-02.png'},
         {text:'What are your Prime Directives?', proposition:'directives', once:false},
         {text:'What are the Three Laws of Robotics?', proposition:'laws', once:false},
         {text:'I was just searching for the terminal.', proposition:'terminal', once:true},
         {text:'What is your name?', proposition:'introduction', once:true},
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


     laws: [
       {text:"A robot may not injure a human being or, through inaction, allow a human being to come to harm."},
       {text:"A robot must obey the orders given it by human beings except where such orders would conflict with the First Law."},
       {text:"A robot must protect its own existence as long as such protection does not conflict with the First or Second Laws."},
       {pick:[
         {text:'Eggcellent.', proposition:'start'},
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
     conversation = [...introduction] // while conversation is cleared, the introduction is injected.
     proposition( propositions.start );
   }
   function interact(chosen) {
     chosen.used = true;
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

  <div slot="preferences">

  <div class="card-text">
    <label class="small" for="duration">Squirrel Intelligence Quotient</label>
    <div class="input-group mb-3">
    <input type="number" id="duration" min="50" max="300" class="form-control" bind:value={iq} placeholder="Squirrel Intelligence Quotient">
      <div class="input-group-append">
      <span class="input-group-text " id="duration-addon">IQ</span>
      </div>
    </div>
  </div>

  {#each attributes as item}
  <div class="card-text">
    <label class="small" for="{camelCase(item.name)}attribute">{item.name}</label>
    <div class="input-group mb-3">
      <div class="custom-control custom-range">

        <input type="range" class="custom-range" bind:value={item.value} min="0" max="1" step="0.1" id="{camelCase(item.name)}attribute">

      </div>
    </div>
  </div>
  {/each}

  {#each directives as item}


  <div class="card-text">
    <label class="small" for="{camelCase(item.name)}directive">{item.name}</label>
    <div class="input-group mb-3">
      <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" bind:checked={item.enabled} id="{camelCase(item.name)}directive">
        <label class="custom-control-label" for="{camelCase(item.name)}directive"><!-- some text --></label>
      </div>
    </div>
  </div>


  {/each}



  </div>

  <div slot="preferences-footer">
    {#if iq > 100}



      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Anomalous Intelligence Quotient</h4>
        <p>The current squirrel intelligence quotient is above average for <a href="https://en.wikipedia.org/wiki/Red_squirrel" rel="noopener noreferrer" target="_blank">Sciurus vulgaris</a>.</p>
        <hr>
        <p class="mb-0">
        Secure. Contain. Protect.
        <a href="http://www.scp-wiki.net/scp-2050" rel="noopener noreferrer" target="_blank">Lower the value immediately.</a></p>
      </div>


    {:else if iq == 100}
      Squirrel Intelligence Quotient Nominal.
    {:else}
      Squirrel Intelligence Quotient: {iq}
    {/if}
  </div>




  <div class="p-3" style="max-height: 25rem; overflow-y: auto;">

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
    <div class="pt-5">
    {#each interactions as potential}
      {#each potential.pick as choice}
        {#if choice.used && choice.once}
        <!-- do not show anything -->
        {:else if choice.used}
          <button type="button" class="btn btn-sm btn-outline-secondary m-1" on:click|preventDefault={() => interact(choice)}>
            {choice.text}
          </button>
          {:else}
          <button type="button" class="btn btn-sm btn-outline-primary m-1" on:click|preventDefault={() => interact(choice)}>
            {choice.text}
          </button>
        {/if}
      {/each}
    {/each}
    <!-- /PRESENTATION OF INTERACTION -->
    </div>

  </div>




</PreferenceCard>
