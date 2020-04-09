<script>
import Drawer from '../containers/Drawer.svelte';
import Icon from '../controls/Icon.svelte';

import chroma from 'chroma-js';
import capitalize from 'lodash/capitalize.js'
// COLOR THEORIST

/*

analogous
monochromatic
complementary
splitcomplementary
double splitcomplementary'

triad
tetrad

square
compound
shades

*/

let blend = '#042c38';
let ratio = .7;


let colors = {
  'white':'#ffffff',

  'gray-100':'#f8f9fa',
  'gray-200':'#e9ecef',
  'gray-300':'#dee2e6',
  'gray-400':'#ced4da',
  'gray-500':'#adb5bd',
  'gray-600':'#6c757d',
  'gray-700':'#495057',
  'gray-800':'#343a40',
  'gray-900':'#212529',

  'black':'#000000',
  'blue':'#007bff',
  'indigo':'#6610f2',
  'purple':'#6f42c1',
  'pink':'#e83e8c',
  'red':'#dc3545',
  'orange':'#fd7e14',
  'yellow':'#ffc107',
  'green':'#28a745',
  'teal':'#20c997',
  'cyan':'#17a2b8',

};

let ratios = {
  'white':1,
  'gray-100':1,
  'gray-200':1,
  'gray-300':1,
  'gray-400':1,
  'gray-500':1,
  'gray-600':1,
  'gray-700':1,
  'gray-800':1,
  'gray-900':1,
  'black':1,
  'blue':1,
  'indigo':1,
  'purple':1,
  'pink':1,
  'red':1,
  'orange':1,
  'yellow':1,
  'green':1,
  'teal':1,
  'cyan':1,
};

let theme = {
  'primary': 'orange',
  'secondary': 'gray-600',
  'success': 'green',
  'info': 'cyan',
  'warning': 'yellow',
  'danger': 'red',
  'light': 'gray-100',
  'dark': 'gray-800',
}

function mix(a,b,r){
  let color1 = chroma(a);
  let color2 = chroma(b);
  let result = chroma.mix(color1, color2, 1-r);

  return result;
}

function makeStyle(){
   return colors.map((o,i)=>`--${o.name}:{colors[${i}].value};`).join('');

}
</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Color Palette Designer</title>
</svelte:head>

<style type="text/css" lang="css">

</style>




<div class="container gr-info-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Adjust Color Palette</div>
      </div>
  </div>
</div>

<div class="container rounded gr-info-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(colors).filter(name=>!name.startsWith('gray-')).map(name=>({name, color:colors[name]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

        <div class="p-2 pb-4 gr-light-135 rounded shadow">
          <div class="text-dark">{capitalize(item.name)}</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {item.color}; height: 10rem; width: 10rem;"></div>
          <div class=""> <Icon name="pencil" color="dark" size="16"/>  <input type="color" bind:value={colors[item.name]}> </div>
        </div>

      </div>
    {/each}
  </div>
</div>

<div class="container gr-info-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Select Blend Color</div>
      </div>
  </div>
</div>

<div class="container   mb-4">
  <div class="row justify-content-center">
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2 gr-info-45 rounded">
        <div class="p-2 pb-4 gr-light-135 rounded shadow">
          <div class="text-dark">Blend</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {blend}; height: 10rem; width: 10rem;"></div>
          <div class=""> <Icon name="pencil" color="dark" size="16"/>  <input type="color" bind:value={blend}> </div>
          <input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={ratio}>
        </div>
      </div>

  </div>
</div>

<div class="container gr-info-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Fine-tune Blending</div>
      </div>
  </div>
</div>

<div class="container rounded gr-info-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(colors).filter(name=>!name.startsWith('gray-')).map(name=>({name, color:colors[name]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

        <div class="p-2 pb-4 gr-light-135 rounded shadow">
          <div class="text-dark">Blended {capitalize(item.name)}</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {mix(blend,item.color,ratio*ratios[item.name])}; height: 10rem; width: 10rem;"></div>
          <input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={ratios[item.name]}>
        </div>

      </div>
    {/each}
  </div>
</div>



<div class="container gr-info-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Assign Contextual Colors</div>
      </div>
  </div>
</div>

<div class="container rounded gr-info-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(theme).map(name=>({name, id:theme[name], color:colors[theme[name]]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

      <div class="p-2 pb-4 gr-light-135 rounded shadow">
        <div class="text-dark">{capitalize(item.name)} ({item.id})</div>
        <div class="d-inline-block rounded shadow border border-dark" style="background: {mix(blend,item.color,ratio*ratios[item.id])}; height: 10rem; width: 10rem;"></div>
        <input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={ratios[item.id]}>
        <select class="form-control" bind:value={theme[item.name]}>
          {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as color, i}
            <option value={color.name}>
              {capitalize(color.name)}
            </option>
          {/each}
        </select>
      </div>

      </div>

    {/each}
  </div>
</div>

<div class="container gr-info-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Copy Code</div>
      </div>
  </div>
</div>

<div class="container">
  <div class="row">
  <div class="col bg-dark text-success p-3">
  <Drawer title="Bootstrap Theme" opened>
      <code class="bg-dark">
      <div>// Color Declaration</div>
      <div>// Add this to your <a href="https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss" rel="noopener noreferrer" target="_blank">variables.scss</a> file.</div>
      {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as item, i}
        <div><span class="text-danger">${item.name}</span>: <span class="text-warning">{mix(blend,item.color,ratio*ratios[item.name])};</span></div>
        <!-- <div><span class="text-danger">${item.name}</span>: <span class="text-warning">{item.color};</span></div> -->
      {/each}
      <br>
      <div>// Theme Colors</div>
      {#each Object.keys(theme).map(name=>({name, color:theme[name]})) as item, i}
        <div><span class="text-info">${item.name}</span>: <span class="text-danger">${item.color};</span></div>
      {/each}
      </code>
      </Drawer>
    </div>
  </div>
</div>
