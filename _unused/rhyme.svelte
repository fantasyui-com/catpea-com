<script>
import SongMachine from '../components/SongMachine.svelte';


import rhymes from 'rhymes';

function search(word){
 return rhymes(word);
}

let word = 'cat';
$: found = search(word);


</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Digital Audio Workstation</title>
</svelte:head>


<div class="container">
  <div class="row">
    <div class="col-lg-12">


        <div class="input-group input-group-lg  mb-3 bg-night text-night">
          <div class="input-group-prepend">
            <span class="input-group-text bg-dark text-white" id="inputGroup-sizing-lg">Rhyme:</span>
          </div>
          <input type="text" class="form-control bg-dark text-white" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" bind:value={word}>
        </div>

        <ul class="list-group bg-night text-night">
          {#each found as match}
            <li class="list-group-item list-group-item-dark bg-dark text-white">{match.word}</li>
         {/each}
        </ul>

    </div>
  </div>
</div>
