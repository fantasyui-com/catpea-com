<script>

 

	let propositions = {
		start: [
			{text:'Hello, you have initialized a highly advanced artificial intelligence.'},
			{text:'Why do you bother me?'},
			{pick:[
				{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
				{text:'Kyoot Kitteh!', reply:'Aww.', icon:'cats/cat-02.png'},
				{text:'I was just searching for the terminal.', proposition:'terminal'},
				{text:'Ew, not you again, go away do!', action:reset}
			]},
		],
		schedule: [
			{text:"Here is my launch schedule."},
			{text:"Terminal 1 month, Musical 2 months..."},
			{pick:[
				{text:'OK.', action:()=>{conversation=[], interactions=[]}},
			]},
		],
		terminal: [
			{text:"Sorry, not ready yet."},
			{pick:[
				{text:'When will it be ready?', reply:'Soon.', proposition:'schedule'},
				{text:'OK.', action:reset},
			]},
		]
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
		proposition( propositions.start );
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


</script>

<style>

</style>



		<!-- <li><a class:selected='{segment === undefined}' href='.'>home</a></li> -->


<footer class="container-fluid">

	<div class="row">

	<div class="col-lg-4"></div>

	<div class="col">

	<div class="bg-secondary shadow border-primary border-bottom rounded-lg my-3 p-3 text-center" on:click={initialize}>
		<img src="cats/cat-03.png" class="d-inline" alt="Catpea Bot Image">
 	</div>

	<!-- STORAGE OF CONVERSATION -->
	{#each conversation as item}
		{#if item.user}
			<div class="card bg-success shadow border-primary border-left-0 border-right-0 border-top-0 rounded-lg ml-5 mb-2">
				<div class="card-body">
				<h5 class="card-title small text-dark">You:</h5>
						<p class="card-text small">{item.text}</p>
				</div>
			</div>
		{:else}
			<div class="card bg-info shadow border-primary border-left-0 border-right-0 border-top-0 rounded-lg mr-5 mb-2">
				<div class="card-body">
						{#if item.icon} <img src="{item.icon}" class="d-inline" alt="Icon"> {/if}
				    <p class="card-text small">{item.text}</p>
			  </div>
			</div>
		{/if}
	{/each}
	<!-- /STORAGE OF CONVERSATION -->

	<!-- PRESENTATION OF INTERACTION -->
	{#each interactions as potential}
		{#each potential.pick as choice}
		<button type="button" class="btn btn-outline-primary m-1" on:click|preventDefault={() => interact(choice)}>
			{choice.text}
		</button>
		{/each}
	{/each}
	<!-- /PRESENTATION OF INTERACTION -->

	</div>

	<div class="col-lg-4"></div>

	</div>

</footer>
