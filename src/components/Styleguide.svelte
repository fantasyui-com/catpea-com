<script>
  import Navbar from './styleguide/Navbar.svelte';

  const globalClass = 'bg-night text-night';

  let combinations = {
    color:[
      {class:'text-primary'},
      {class:'text-secondary'},
      {class:'text-success'},
      {class:'text-info'},
      {class:'text-warning'},
      {class:'text-danger'},
      {class:'text-light'},
      {class:'text-dark bg-light'},
    ],
    bg:[
      {class:'bg-primary text-light'},
      {class:'bg-secondary text-light'},
      {class:'bg-success text-light'},
      {class:'bg-info text-dark'},
      {class:'bg-warning text-light'},
      {class:'bg-danger text-light'},
      {class:'bg-light text-dark'},
      {class:'bg-dark text-light'},
    ],
    navbar:[
      {class:'navbar-light bg-primary text-light', button:'btn-outline-dark'},
      {class:'navbar-light bg-secondary text-light', button:'btn-outline-dark'},
      {class:'navbar-light bg-success text-light', button:'btn-outline-dark'},
      {class:'navbar-dark bg-info text-dark', button:'btn-outline-light'},
      {class:'navbar-light bg-warning text-light', button:'btn-outline-dark'},
      {class:'navbar-light bg-danger text-light', button:'btn-outline-dark'},
      {class:'navbar-light bg-light text-dark', button:'btn-outline-dark'},
      {class:'navbar-dark bg-dark text-light', button:'btn-outline-light'},
    ],
    card:[
      [
        {label:'Primary', class:'card bg-primary text-light', link:'card-link text-dark'},
        {label:'Secondary', class:'card bg-secondary text-light', link:'card-link text-dark'},
        {label:'Success', class:'card bg-success text-light', link:'card-link text-dark'},
        {label:'Info', class:'card bg-info text-dark', link:'card-link text-dark'},
        {label:'Warning', class:'card bg-warning text-light', link:'card-link text-dark'},
        {label:'Danger', class:'card bg-danger text-light', link:'card-link text-dark'},
        {label:'Light', class:'card bg-light text-dark', link:'card-link'},
        {label:'Dark', class:'card bg-dark text-light', link:'card-link'},
      ],
      [
        {label:'Primary', class:'card border-primary', link:'card-link'},
        {label:'Secondary', class:'card border-secondary', link:'card-link'},
        {label:'Success', class:'card border-success', link:'card-link'},
        {label:'Info', class:'card border-info', link:'card-link'},
        {label:'Warning', class:'card border-warning', link:'card-link'},
        {label:'Danger', class:'card border-danger', link:'card-link'},
        {label:'Light', class:'card border-light', link:'card-link'},
        {label:'Dark', class:'card border-dark', link:'card-link'},
      ],
    ],
    alert:[
      {label:'Primary', class:'alert alert-primary'},
      {label:'Secondary', class:'alert alert-secondary'},
      {label:'Success', class:'alert alert-success'},
      {label:'Info', class:'alert alert-info'},
      {label:'Warning', class:'alert alert-warning'},
      {label:'Danger', class:'alert alert-danger'},
      {label:'Light', class:'alert alert-light'},
      {label:'Dark', class:'alert alert-dark'},
    ],
    badge:[
      {label:'Primary Badge', class:'badge badge-primary'},
      {label:'Secondary Badge', class:'badge badge-secondary'},
      {label:'Success Badge', class:'badge badge-success'},
      {label:'Info Badge', class:'badge badge-info'},
      {label:'Warning Badge', class:'badge badge-warning'},
      {label:'Danger Badge', class:'badge badge-danger'},
      {label:'Light Badge', class:'badge badge-light'},
      {label:'Dark Badge', class:'badge badge-dark'},
    ],
    progress:[
      {label:'Primary', class:'progress-bar progress-bar-striped bg-primary'},
      {label:'Secondary', class:'progress-bar progress-bar-striped bg-secondary'},
      {label:'Success', class:'progress-bar progress-bar-striped bg-success'},
      {label:'Info', class:'progress-bar progress-bar-striped bg-info'},
      {label:'Warning', class:'progress-bar progress-bar-striped bg-warning'},
      {label:'Danger', class:'progress-bar progress-bar-striped bg-danger'},
      {label:'Dark', class:'progress-bar progress-bar-striped bg-dark'},
    ],
    table:[
      {label:'Primary', class:'table-primary'},
      {label:'Secondary', class:'table-secondary'},
      {label:'Success', class:'table-success'},
      {label:'Info', class:'table-info'},
      {label:'Warning', class:'table-warning'},
      {label:'Danger', class:'table-danger'},
      {label:'Light', class:'table-light'},
      {label:'Dark', class:'table-dark'},
      {label:'Primary', class:'bg-primary text-light'},
      {label:'Secondary', class:'bg-secondary text-light'},
      {label:'Success', class:'bg-success text-light'},
      {label:'Info', class:'bg-info text-dark'},
      {label:'Warning', class:'bg-warning text-light'},
      {label:'Danger', class:'bg-danger text-light'},
      {label:'Light', class:'bg-light text-dark'},
      {label:'Dark', class:'bg-dark text-light'},
    ],











    btn:[
      [
        {label:'Primary', class:'btn-primary'},
        {label:'Secondary', class:'btn-secondary'},
        {label:'Success', class:'btn-success'},
        {label:'Info', class:'btn-info'},
        {label:'Warning', class:'btn-warning'},
        {label:'Danger', class:'btn-danger'},
        {label:'Light', class:'btn-light'},
        {label:'Dark', class:'btn-dark'},
      ],
      [
        {label:'Primary', class:'btn-outline-primary'},
        {label:'Secondary', class:'btn-outline-secondary'},
        {label:'Success', class:'btn-outline-success'},
        {label:'Info', class:'btn-outline-info'},
        {label:'Warning', class:'btn-outline-warning'},
        {label:'Danger', class:'btn-outline-danger'},
        {label:'Light', class:'btn-outline-light'},
        {label:'Dark', class:'btn-outline-dark'},
      ],
      [
        {label:'Large', class:'btn-primary btn-lg'},
        {label:'Default', class:'btn-primary'},
        {label:'Small', class:'btn-primary btn-sm'},
        {label:'Disabled', class:'btn-primary disabled'},
        {label:'Large', class:'btn-outline-primary btn-lg'},
        {label:'Default', class:'btn-outline-primary'},
        {label:'Small', class:'btn-outline-primary btn-sm'},
        {label:'Disabled', class:'btn-outline-primary disabled'},
      ],
    ]

  };

</script>

<style>

</style>

<div class="container bg-debug mb-5">
  {#each combinations.navbar as item, index}
    <div class="row py-3">
        <div class="col">
          <Navbar class={item.class + ' ' + globalClass}>
            <form slot="after" class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2 text-night bg-night" type="search" placeholder="Search" aria-label="Search">
              <button class="btn {item.button} {globalClass} my-2 my-sm-0" type="submit">Search</button>
            </form>
          </Navbar>
        </div>
    </div>
  {/each}
</div>

<div class="container mb-5">
  {#each combinations.btn as set, index}
  <div class="row py-3 bg-debug mb-5">
  {#each set as item, index}
        <div class="col">
        <button class="btn {item.class} {globalClass}">{item.label}</button>

        </div>
  {/each}
  </div>
  {/each}
</div>



<div class="container bg-debug mb-5">
  {#each combinations.bg as item, index}
    <div class="row py-3">
        <div class="col">
          <div class="p-3 {item.class} {globalClass}">
            The sky above the port was the color of television, tuned to a dead channel.
          </div>
        </div>
    </div>
  {/each}
</div>


<div class="container border border-dark mb-5">
  {#each combinations.color as item, index}
    <div class="row py-3">
        <div class="col">
          <div class="p-3 border border-dark {item.class} {globalClass}">
            Well, all information looks like noise until you break the code.
          </div>
        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug border-dark mb-5">
    <div class="row py-3">
        <div class="col">
        {#each combinations.badge as item, index}
          <span class="{item.class} {globalClass}">{item.label}</span> &nbsp;
          {/each}
        </div>
    </div>
</div>



<div class="container bg-debug border-dark mb-5">
  {#each combinations.progress as item, index}
    <div class="row py-3">
        <div class="col">

          <div class="progress {globalClass}">
            <div class="{item.class}" role="progressbar" style="width: {(index+1)*10}%" aria-valuenow="{(index+1)*10}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
    </div>
  {/each}
</div>



<div class="container bg-debug border-dark mb-5">
  {#each combinations.alert as item, index}
    <div class="row py-3">
        <div class="col">

        <div class="{item.class} {globalClass}" role="alert">
          <h4 class="alert-heading">Achtung!</h4>
          <p>Alles turisten und nonteknischen lookenspeepers! Das komputermaschine ist nicht für der gefingerpoken und mittengraben! Oderwise ist easy to schnappen der springenwerk, blowenfusen und poppencorken mit spitzensparken.</p>
          <hr>
          <p class="mb-0">Ist nicht für gewerken bei dummkopfen. Der rubbernecken sightseeren keepen das cottonpicken händer in das pockets muss. Zo relaxen und watschen der blinkenlichten.</p>
        </div>

        </div>
    </div>
  {/each}
</div>

<div class="container bg-debug border-dark mb-5">
  {#each combinations.card as set, index}
  {#each set as item, index}
    <div class="row py-3">
        <div class="col">

        <div class="{item.class} {globalClass}">
         <div class="card-header">Header</div>
         <div class="card-body">
           <h5 class="card-title">Primary card title</h5>
           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
       </div>

        </div>
        <div class="col">

        <div class="{item.class} {globalClass}">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <h6 class="card-subtitle mb-2">Card subtitle</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="/" class="{item.link}">Card link</a>
            <a href="/" class="{item.link}">Another link</a>
          </div>
        </div>

        </div>
    </div>
  {/each}
  {/each}
</div>







<div class="container bg-debug border-dark mb-5">
  <div class="row py-3">
    <div class="col">


    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Second</th>
          <th scope="col">Third</th>
        </tr>
      </thead>
      <tbody>

      {#each combinations.table as item, index}
        <tr class="{item.class} {globalClass}">
          <th class="{globalClass}" scope="row">{index}</th>
          <td class="{globalClass}">Alfa</td>
          <td class="{globalClass}">Beta</td>
          <td class="{globalClass}">Delta</td>
        </tr>
      {/each}

      </tbody>
    </table>



    </div>
  </div>
</div>
