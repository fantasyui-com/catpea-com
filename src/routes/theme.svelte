<script>
import capitalize from 'lodash/capitalize.js'

let night = true;

const themeColors = [ 'primary', 'secondary', 'success', 'info', 'warning', 'danger', 'light', 'dark', ];
const gradientAngles = [ "45", "90", "135", "180", "225", "270", "315" ];

const gradients = {};

for(let color of themeColors){
  gradients[ `0&deg; ${capitalize(color)}` ] = `gr-${color}` ;
  for(let angle of gradientAngles){
    gradients[ `${angle}&deg; ${capitalize(color)}` ] = `gr-${color}-${angle}` ;
  }
}





</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Bootstrap Theme</title>
</svelte:head>




<div class="container {night?'night':'day'}">

  <div class="row mb-5">
    <div class="col">
      <h1 class="text-light text-uppercase">Custom Theme Development</h1>
      <h2 class="text-light">Bootstrap Based Theme for Applications</h2>
    </div>
  </div>

  <div class="row my-4">
    <div class="col">
    </div>
  </div>


  <div class="row my-4">
    <div class="col">
      <h3 class="text-warning">Night Mode &beta;</h3>
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

  <div class="row mb-3">
    <div class="col">

    <div class="card text-dark bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/f.jpg" class="card-img-top" alt="Le Cowboy">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-primary bg-night text-night">Go somewhere</a>
      </div>
    </div>

    <div class="card text-dark bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/c.jpg" class="card-img-top" alt="Le Captain">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

    <div class="card bg-primary text-dark bg-night text-night" style="width: 18rem; display: inline-block;">
      <img src="nordhouse/h.jpg" class="card-img-top" alt="Le Horse">
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="." class="btn btn-secondary">Go somewhere</a>
      </div>
    </div>

    </div>
  </div>


  <div class="row my-4">
    <div class="col">
      <h3 class="text-warning">Rotational Gradients</h3>
    </div>
  </div>

  <div class="row mb-3">
    <div class="col">

      <div class="alert alert-dark" role="alert">

        <ul class="list-unstyled">
          <li>&middot; {Object.keys(gradients).length} Additional Classes</li>
          <li>&middot; Naming scheme: <span class="badge badge-light text-dark">gr</span>-<span class="badge badge-light text-dark">contextual color</span>-<span class="badge badge-light text-dark">degree of angle</span></li>
          <li>&middot; Angles {@html gradientAngles.map(o=>`${o}&deg;`).join(', ')}.</li>
          <li>&middot; Colors {@html themeColors.map(o=>`${o}`).join(', ')}.</li>
          <li>&middot; Example: "gr-primary-45"</li>
          <li>&middot; Note: 0&deg; angle is expressed without indicating any degree of angle (ex: Gradient of primary color at 0&deg; is written as "gr-primary")</li>
        </ul>
      </div>

    </div>
  </div>


  <div class="container rounded gr-info-45 mb-4">
    <div class="row justify-content-center">
      {#each Object.keys(gradients).filter(name=>1).map(name=>({name, className:gradients[name]})) as item, i}

        <div class="col-xs-12 col-md-6 col-lg-3 text-center p-2">
          <div class="d-inline-block p-2 {item.className} rounded shadow">
            <div class="text-dark"><span class="badge badge-dark text-white">{@html item.name}</span></div>
            <div class="d-inline-block" style="height: 6rem; width: 10rem;"></div>
            <div class="text-dark"><span class="badge badge-dark text-white">.{item.className}</span></div>
          </div>
        </div>

      {/each}
    </div>
  </div>


</div>
