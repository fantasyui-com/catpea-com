<script>
  import Navbar from './styleguide/Navbar.svelte';


  let requiresLightMode = {
    'bg-info':true,
    'bg-light':true,
    'text-dark':true
  };

  function needsLight(input, light, dark){
    let response = [...input];

    if(requiresLightMode[input[0]]){
      if(light) response.unshift(light);
    }else{
      if(dark) response.unshift(dark);
    }
    console.log(response);
    return response;
  }

  const themeColors = [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ];

  let colors = [
    ['text-primary'],
    ['text-secondary'],
    ['text-success'],
    ['text-info'],
    ['text-warning'],
    ['text-danger'],
    ['text-light'],
    ['text-dark'],
  ];

  let combinations = [
    ['bg-primary', 'text-light'],
    ['bg-secondary', 'text-light'],
    ['bg-success', 'text-light'],
    ['bg-info', 'text-dark'],
    ['bg-warning', 'text-light'],
    ['bg-danger', 'text-light'],
    ['bg-light', 'text-dark'],
    ['bg-dark', 'text-light'],
  ];

  let colorCombinations = colors
  .map(o=>needsLight(o, 'bg-light'))
  .map(o=>o.join(' '));

  let bgCombinations = combinations.map(o=>o.join(' '));

  let navbarBgCombinations = combinations
  .map(o=>needsLight(o, 'navbar-light', 'navbar-dark'))
  .map(o=>o.join(' '));

</script>

<style>

</style>

<div class="container mb-5">
  {#each colorCombinations as colorCombination, i}
    <div class="row p-3">
        <div class="col">
          <div class="p-3 border border-dark {colorCombination}">
            Well, all information looks like noise until you break the code.
          </div>
          <div>{colorCombination}</div>
        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug mb-5">
  {#each bgCombinations as bgCombination, i}
    <div class="row p-3">
        <div class="col">
          <div class="p-3 {bgCombination}">
            The sky above the port was the color of television, tuned to a dead channel.
          </div>
          <div>{bgCombination}</div>
        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug mb-5">
  {#each navbarBgCombinations as bgCombination, i}
    <div class="row py-3">
        <div class="col">
          <Navbar class={bgCombination} />
          <div>{bgCombination}</div>
        </div>
    </div>
  {/each}
</div>
