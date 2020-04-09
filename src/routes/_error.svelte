<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';

  // This will print error in terminal
  if(dev && error.stack){
    console.log('ERROR: %s', error.message)
    console.log(error.stack);
    console.log(error);
  }

</script>

<style>
  h1, p {
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: World's Most Advanced Research Laboratories and Skunk Works</title>
</svelte:head>

<div class="container text-small text-primary">
<div class="row">
<div class="col">

<!-- <h1>World's Most Advanced Research Laboratories and Skunk Works</h1>
<h2>The catpea is an annual pouncy feline from the genus Panthera. Due to his tolerance for serious workouts and low effort, he is kind of a big deal in the semiarid plazas of Westland.</h2>
 -->

<p>The website might have updated, and you maybe using an old version attempting to load files that are no longer on the server.</p>
<p>Please reload or refresh to download the latest version.</p>
<p>If the error persists, that means there is a bug in the code and I am already working on it.</p>
<p>Code {status} &middot; {error.message}</p>

{#if error.stack}
  <pre class="text-warning">{error.stack}</pre>
{/if}

</div>
</div>
</div>
