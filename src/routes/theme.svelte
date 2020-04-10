<script>
import capitalize from 'lodash/capitalize.js'

let night = true;

const themeColors = [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ];
const gradientAngles = [ "45", "90", "135", "180", "225", "270", "315" ];

const gradients = {};

const textColors = {};
const bgColors = {};

for(let color of themeColors){
  gradients[ `0&deg; ${capitalize(color)}` ] = `bg-${color} gr` ;
  for(let angle of gradientAngles){
    gradients[ `${angle}&deg; ${capitalize(color)}` ] = `bg-${color} gr-${angle}` ;
  }
}
for(let color of themeColors){
  textColors[`${capitalize(color)}`] = `text-${color}`;
}
for(let color of themeColors){
  bgColors[`${capitalize(color)}`] = `bg-${color}`;
}





</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Bootstrap Theme</title>
</svelte:head>




<div class="container">



  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
        <h1 class="text-uppercase">Custom Theme Development</h1>
        <h2>Bootstrap Based Theme for Applications</h2>
        </div>
    </div>
  </div>

  <div class="row my-4">
    <div class="col">
    </div>
  </div>


  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
          <h3>Design Guidelines</h3>
        </div>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">
      <div class="alert alert-dark" role="alert">
        <ul class="list-styled">
          <li>You may only place text in components with a background.</li>
          <li>Use text color sparingly, keep track of it, and ensure it is always readable.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="row my-4">
    <div class="col">
    </div>
  </div>


  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
          <h3>Background Colors</h3>
        </div>
    </div>
  </div>

  <div class="container rounded gr-info-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(bgColors).filter(name=>1).map(name=>({name, className:bgColors[name]})) as item, i}

      <div class="col-xs-12 col-md-6 col-lg-3 text-center p-2">
        <div class="d-inline-block p-2 {item.className} rounded shadow bg-night">
          <div><span class="badge badge-dark text-white">{@html item.name}</span></div>
          <div class="d-inline-block" style="height: 6rem; width: 10rem;">

          {#each Object.keys(textColors).filter(name=>1).map(name=>({name, className:textColors[name]})) as item, i}
            <strong class="{item.className}">{item.name} </strong>
          {/each}

          </div>
          <div><span class="badge badge-dark text-white">{item.className}</span></div>
        </div>
      </div>

    {/each}
  </div>
  </div>

  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
          <h3>Text Colors</h3>
        </div>
    </div>
  </div>

  <div class="container rounded gr-info-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(textColors).filter(name=>1).map(name=>({name, className:textColors[name]})) as item, i}

      <div class="col-xs-12 col-md-6 col-lg-3 text-center p-2">
        <div class="d-inline-block p-2 bg-light rounded shadow {item.className}">
          <div><span class="badge badge-dark text-white">{@html item.name}</span></div>
          <div class="d-inline-block" style="padding-top:1rem; height: 6rem; width: 10rem;">
            <div class="lead">Hello World</div>
            <div><strong>Hello World</strong></div>
            <div><small>Hello World</small></div>
          </div>
          <div><span class="badge badge-dark text-white">{item.className}</span></div>
        </div>
      </div>

    {/each}
  </div>
  </div>

  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
          <h3>Night Mode</h3>
        </div>
    </div>
  </div>


  <div class="row mb-3">
    <div class="col">

      <div class="alert {night?'alert-dark':'alert-light'}" role="alert">
        The Night Mode Subsystem allows stitching between Dark/Night and Day/Light modes.

        <div class="form-check">
          <input class="form-check-input" type="checkbox" bind:checked={night} id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Toggle Night Mode ({night?"Night Mode is presently enabled":"Night Mode is disabled."})
          </label>
        </div>

      </div>

    </div>
  </div>

  <div class="row mb-3" class:night>
    <div class="col">

    <div class="card bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/f.jpg" class="card-img-top" alt="Le Cowboy">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-primary bg-night text-night">Go somewhere</a>
      </div>
    </div>

    <div class="card bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/c.jpg" class="card-img-top" alt="Le Captain">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card bg-primary bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/h.jpg" class="card-img-top" alt="Le Horse">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-secondary">Go somewhere</a>
      </div>
    </div>

    </div>
  </div>


  <div class="container text-primary bg-secondary gr-135 bg-night text-night rounded p-2 mb-4">
    <div class="row">
        <div class="col">
          <h3>Rotational Gradients</h3>
        </div>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">

      <div class="alert alert-dark" role="alert">

        <ul class="list-unstyled">
          <li>&middot; {Object.keys(gradients).length} Additional Classes</li>
          <li>&middot; Naming scheme: <span class="badge badge-light">bg-primary</span> <span class="badge badge-light">gr</span>-<span class="badge badge-light">degree of angle</span></li>
          <li>&middot; Angles {@html gradientAngles.map(o=>`${o}&deg;`).join(', ')}.</li>
          <li>&middot; Colors {@html themeColors.map(o=>`${o}`).join(', ')}.</li>
          <li>&middot; Example: "bg-primary gr-45" applies a primary colored gradient at 45&deg; of angle.</li>
          <li>&middot; Note: 0&deg; angle is expressed without indicating any degree of angle (ex: Gradient of primary color at 0&deg; is written as "bg-primary gr").</li>
          <li>&middot; Note: you can lower class count (file size) by removing angles from configuration.</li>
          <li>&middot; Note: you fallback on standard colors by disabling the Rotational Gradient stylesheet.</li>
        </ul>
      </div>

    </div>
  </div>


  <div class="container rounded gr-info-45 mb-4">
    <div class="row justify-content-center">
      {#each Object.keys(gradients).filter(name=>1).map(name=>({name, className:gradients[name]})) as item, i}

        <div class="col-xs-12 col-md-6 col-lg-3 text-center p-2">
          <div class="d-inline-block p-2 {item.className} rounded shadow">
            <div><span class="badge badge-dark text-white">{@html item.name}</span></div>
            <div class="d-inline-block" style="height: 6rem; width: 10rem;"></div>
            <div><span class="badge badge-dark text-white">{item.className}</span></div>
          </div>
        </div>

      {/each}
    </div>
  </div>


</div>
