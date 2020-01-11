<script>

const date = new Date();
const year = date.getFullYear();

function rnd(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const names = [
  ['Catpea'],
  ['Advanced'],
  ['Technological'],
  ['Product'],
  ['Emergence'],
  ['Architecture']
];
let name = "";

const makeName = function(){
name = "";
for (let potential of names){
  console.log(names, potential);
  let randomIndex = rnd(0,potential.length-1)
  let chosen = potential[randomIndex];
  name = name + ' ' + chosen;

}
};

makeName(); setInterval(makeName, 1000*60);

</script>
<style>

</style>

<svelte:head>
	<title>Cat Pea</title>
</svelte:head>







<div class="container-fluid">
	<div class="row">
		<div class="col-lg-4"></div>

		<div class="col">

    <div class="container bg-secondary shadow-lg border-primary border-bottom rounded-lg p-5">

      <p class=""><strong>{name}</strong> (CATPEA) is focused on long-term ambitious problem solving by means of well established patterns framed outside of their initial bounding principles.</p>

      <p class="small">The primary fundamental principle powering the Advanced Development Programs (ADP) stands as follows:</p>

      <p class="small"><strong>The well established shalln't be replaced by that which is unproven by the test of decades.</strong></p>

      <p class="small">The primary objective for {year} is Minimum Viable Product Generation (MVPG).</p>

      <p class="small">Research focus for {year} is targeting MUD, Tone.js Generative Music, Generative Vector Patterns (Fashion Design), Bot Communication Frameworks, FS-Free Wiki; and underlying programming patterns and constraint solutions. </p>

    </div>

		</div>

		<div class="col-lg-4"></div>
	</div>
</div>
