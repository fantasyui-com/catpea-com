<script>
  export let status;
  export let error;

  const dev = process.env.NODE_ENV === 'development';

  // This will print error in terminal
  if(dev && error.stack){
    console.log('ERROR: %s' + error.message)
    console.log(error.stack);
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

<h1>World's Most Advanced Research Laboratories and Skunk Works</h1>
<h2>The catpea is an annual pouncy feline from the genus Panthera. Due to his tolerance for serious workouts and low effort, he is kind of a big deal in the semiarid plazas of Westland.</h2>


<p>{status}{error.message}</p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}
