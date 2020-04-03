<script>

const textDatabase = [
  {name:'', prefix:'text-dark-', data:[]},
  {name:'', prefix:'text-light-', data:[]},
];
const bgDatabase = [
  {name:'', prefix:'bg-dark-', data:[]},
  {name:'', prefix:'bg-light-', data:[]},
];


for (let item of textDatabase){
  for (let i = 0; i < 10; i++){
    item.data.push({className:`${item.prefix}${i}`});

  }
}
for (let item of bgDatabase){
  for (let i = 0; i < 10; i++){
    item.data.push({className:`${item.prefix}${i}`});

  }
}

</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Bootstrap Theme</title>
</svelte:head>




<div class="container">

  <div class="row">
    <div class="col">

      <h1 class="text-light">Dragonfly Theme Development <small class="text-light"> Bootstrap Based Theme for Applications</small></h1>

    </div>
  </div>

  <div class="row">
    <div class="col">
<!--
    {#each textDatabase as entry}
       {#each entry.data as item}
        <p class="{item.className}">Additional Text Classes <small class="small"> class: {item.className}</small></p>
      {/each}
    {/each} -->

    {#each bgDatabase as entry}
       {#each entry.data as item}
        <p class="rounded p-3 {item.className}">Additional Background Classes <small class="small"> class: .{item.className}</small></p>
      {/each}
    {/each}


    </div>
  </div>

</div>
