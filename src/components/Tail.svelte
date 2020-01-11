<script>

	let database = [

	];
	let propositions = {
		terminal: {text:"Sorry, not ready yet."}
	};

	let conversation = [];
	let interactions = [];

	function initialize() {
		conversation = []; // clear because starting anew.
		interactions = []; // clear because starting anew.
		conversation = [...conversation, {text:'Hello, by touching my face you have initialized a highly advanced artificial intelligence.'}]
		conversation = [...conversation, {text:'Why did you touch?'}]
		interactions = [...interactions, {pick:[
			{text:'It was a mistake.', action:()=>{conversation=[...conversation, {text:'OK, well, quit it.'}]}},
			{text:'Kyoot Kitteh!', reply:'Aww.', icon:'cats/cat-02.png'},
			{text:'I was just searching for the terminal.', proposition:'terminal'},
			{text:'Ew, not you again, go away do!', action:()=>{conversation=[], interactions=[]}}
		]}]
	}





	function user(chosen) {
		console.log('Click', chosen);
		conversation = [...conversation, {text:chosen.text, user:true}]

		// .ACTION SUPPORT - execute arbitrary function
		if(chosen.action) chosen.action();

		const packet = {};
		// .REPLY support, print some text.
		if(chosen.reply) packet.text = chosen.reply
		if(chosen.icon) packet.icon = chosen.icon;
		if(Object.keys(packet).length) conversation=[...conversation,packet];

		if(propositions[chosen.proposition]){
			if(propositions[chosen.proposition].pick){
				interactions = [...interactions, propositions[chosen.proposition]];
			}else{
				conversation = [...conversation, propositions[chosen.proposition]];
			}
		}

		interactions = []; // clear because user has made a response

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

	{#each interactions as potential}
		{#each potential.pick as choice}
		<button type="button" class="btn btn-outline-primary m-1" on:click|preventDefault={() => user(choice)}>
			{choice.text}
		</button>
		{/each}
	{/each}

	</div>

	<div class="col-lg-4"></div>

	</div>

</footer>
