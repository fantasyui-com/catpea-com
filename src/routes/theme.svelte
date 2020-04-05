<script>

const bootstrapColors = [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ];

const backgroundDatabase = [
];


  for (let i = 0; i < bootstrapColors.length; i++){
    const name = bootstrapColors[i];
    backgroundDatabase.push({className:`bg-${name}-dark`});
    backgroundDatabase.push({className:`bg-${name}`});
    backgroundDatabase.push({className:`bg-${name}-light`});
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

  <div class="row mb-3">
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
    <div class="col">
      {#each backgroundDatabase as item}
          <p class="rounded shadow p-3 {item.className}"><small>.{item.className}</small></p>
      {/each}
    </div>
  </div>

</div>
