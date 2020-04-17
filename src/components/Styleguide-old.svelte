<script>
  import Navbar from './styleguide/Navbar.svelte';
  import startCase from 'lodash/startCase.js';

  const requiresLightMode = {
    'bg-info':true,
    'bg-light':true,
    'text-dark':true
  };

  const contexts = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'light',
    'dark'
  ];

  function getContextNameFromClassName(className){
      return className.split('_').pop();
  }

  function findGoodColor(classes, lightChoice, darkChoice){
    let bg = classes.split(' ').filter(o=>o.startsWith('bg-')).pop();

    let response = "";

    if(requiresLightMode[bg]){
      if(darkChoice) response = darkChoice;
    }else{
      if(lightChoice) response = lightChoice;
    }

    return response;

  }

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



  const colors = [
    ['text-primary'],
    ['text-secondary'],
    ['text-success'],
    ['text-info'],
    ['text-warning'],
    ['text-danger'],
    ['text-light'],
    ['text-dark'],
  ];

  const combinations = [
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

  let btnCombinations = contexts.map(o=>[`btn-${o}`, `btn-${o} btn-sm`, `btn-${o} btn-lg`, `btn-${o} disabled`, `btn-outline-${o}`]);

</script>

<style>

</style>

<div class="container mb-5">
  {#each colorCombinations as classes, i}
    <div class="row p-3">
        <div class="col">
          <div class="p-3 border border-dark {classes}">
            Well, all information looks like noise until you break the code.
          </div>
          <div>{classes}</div>
        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug mb-5">
  {#each bgCombinations as classes, i}
    <div class="row p-3">
        <div class="col">
          <div class="p-3 {classes}">
            The sky above the port was the color of television, tuned to a dead channel.
          </div>
          <div>{classes}</div>
        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug mb-5">
  {#each navbarBgCombinations as classes, i}
    <div class="row py-3">
        <div class="col">
          <Navbar class={classes}>
            <form slot="after" class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
              <button class="btn {findGoodColor(classes,'btn-outline-light','btn-outline-dark')} my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Navbar>
          <div>{classes}</div>
        </div>
    </div>
  {/each}
</div>

<div class="container mb-5">
  {#each btnCombinations as variants, i}
    <div class="row p-3">
      {#each variants as variant, i}
        <div class="col">
          <button class="btn {classes}">{startCase(getContextNameFromClassName(variant))}</button>
          <div>{classes}</div>
        </div>
      {/each}
    </div>
  {/each}
</div>
