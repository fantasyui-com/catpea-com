<script>

const bootstrapColors = [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ];

const bgDatabase = [];
const btDatabase = [];


  for (let i = 0; i < bootstrapColors.length; i++){
    const name = bootstrapColors[i];
    bgDatabase.push({className:`bg-${name}-dark`});
    bgDatabase.push({className:`bg-${name}`});
    bgDatabase.push({className:`bg-${name}-light`});
  }

  for (let i = 0; i < bootstrapColors.length; i++){
    const name = bootstrapColors[i];
    btDatabase.push({className:`bt-${name}-dark`});
    btDatabase.push({className:`bt-${name}`});
    btDatabase.push({className:`bt-${name}-light`});
  }


</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Bootstrap Theme</title>
</svelte:head>




<div class="container">

  <div class="row mb-3">
    <div class="col">
      <h3 class="text-light text-uppercase">Theme Development <small class="text-light"> Bootstrap Based Theme for Applications</small></h3>
    </div>
  </div>

  <div class="row mb-3 mt-5 p-3">
    <div class="col">
      <h3 class="text-light">Extended Background Colors <small class="text-light"> </small></h3>

      <div class="alert alert-dark bg-dark-light" role="alert">
        Add a -light/-dark postfix to default bootstrap colors.
      </div>

      <!-- <ul class="list-unstyled">
        {#each backgroundDatabase as item}
        <li>.{item.className}</li>
        {/each}
      </ul> -->

    </div>
  </div>

  <div class="row">
    <div class="col pl-5">
      {#each bgDatabase as item}
      <p class="rounded shadow p-3 {item.className}"><small class="badge badge-dark">.{item.className}</small></p>
      {/each}
    </div>
  </div>



  <div class="row mb-3 mt-5 p-3">
    <div class="col">
      <h3 class="text-light">Extended Background Colors with Matching Text<small class="text-light"> </small></h3>

      <div class="alert alert-dark bg-dark-light" role="alert">
        Change bg- to the bt- prefix to get smart text color presets.
      </div>

      <!-- <ul class="list-unstyled">
        {#each backgroundDatabase as item}
        <li>.{item.className}</li>
        {/each}
      </ul> -->

    </div>
  </div>

  <div class="row">
    <div class="col pl-5">
      {#each btDatabase as item}
          <p class="rounded shadow p-3 {item.className}"><small>.{item.className}</small></p>
      {/each}
    </div>
  </div>

</div>
