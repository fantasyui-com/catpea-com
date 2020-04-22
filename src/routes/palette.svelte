<script>
import Drawer from '../containers/Drawer.svelte';
// import Icon from '../controls/Icon.svelte';

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
$white:    #fff !default;
$gray-100: #fefbf4 !default;
$gray-200: #fdf6e3 !default;
$gray-300: #eee8d5 !default;
$gray-400: #93a1a1 !default;
$gray-500: #839496 !default;
$gray-600: #657b83 !default;
$gray-700: #586e75 !default;
$gray-800: #073642 !default;
$gray-900: #002b36 !default;
$black:    #000 !default;

$blue:    #268bd2 !default;
$indigo:  #8061b5 !default;
$purple:  #6c71c4 !default;
$pink:    #d33682 !default;
$red:     #c15755 !default;
$orange:  #c85f33 !default;
$yellow:  #b58900 !default;
$green:   #859900 !default;
$teal:    #20c997 !default;
$cyan:    #2aa198 !default;


$primary:       $indigo !default;
$secondary:     $orange !default;
$success:       $green !default;
$info:          $cyan !default;
$warning:       $yellow !default;
$danger:        $red !default;
$light:         $gray-100 !default;
$dark:          $gray-800 !default;
*/

let blend = '#042c38';
let ratio = .9;


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

  'black':'#011418',

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
  'white':0.25,
  'gray-100':0.25,
  'gray-200':0.25,
  'gray-300':0.25,
  'gray-400':0.25,
  'gray-500':0.75,
  'gray-600':0.75,
  'gray-700':0.75,
  'gray-800':0.75,
  'gray-900':0.75,
  'black':0,
  'blue':.40,
  'indigo':.40,
  'purple':.40,
  'pink':.40,
  'red':.40,
  'orange':.40,
  'yellow':.40,
  'green':.40,
  'teal':.40,
  'cyan':.40,
};

let theme = {
  'primary': 'blue',
  'secondary': 'orange',
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
  <title>CATPEA! Color Palette Designer</title>
</svelte:head>

<style type="text/css" lang="css">

</style>




<div class="container bg-dark gr-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Adjust Color Palette</div>
      </div>
  </div>
</div>

<div class="container rounded bg-dark gr-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

        <div class="p-2 pb-4 bg-dark gr-135 rounded shadow">
          <div>{capitalize(item.name)}</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {item.color}; height: 10rem; width: 10rem;"></div>
          <div><input type="color" bind:value={colors[item.name]}></div>
        </div>

      </div>
    {/each}
  </div>
</div>

<div class="container bg-dark gr-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Select Blend Color</div>
      </div>
  </div>
</div>

<div class="container   mb-4">
  <div class="row justify-content-center">
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2 bg-dark gr-45 rounded">
        <div class="p-2 pb-4 bg-dark gr-135 rounded shadow">
          <div>Blend</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {blend}; height: 10rem; width: 10rem;"></div>
          <div> <input type="color" bind:value={blend}> </div>
          <input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={ratio}>
        </div>
      </div>

  </div>
</div>

<div class="container bg-dark gr-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Fine-tune Blending</div>
      </div>
  </div>
</div>

<div class="container rounded bg-dark gr-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

        <div class="p-2 pb-4 bg-dark gr-135 rounded shadow">
          <div>Blended {capitalize(item.name)}</div>
          <div class="d-inline-block rounded shadow border border-dark" style="background: {mix(blend,item.color,ratio*ratios[item.name])}; height: 10rem; width: 10rem;"></div>
          <input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={ratios[item.name]}>
        </div>

      </div>
    {/each}
  </div>
</div>



<div class="container bg-dark gr-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Assign Contextual Colors</div>
      </div>
  </div>
</div>

<div class="container rounded bg-dark gr-45 mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(theme).map(name=>({name, id:theme[name], color:colors[theme[name]]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">

      <div class="p-2 pb-4 bg-dark gr-135 rounded shadow">
        <div>{capitalize(item.name)} ({item.id})</div>
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

<div class="container bg-dark gr-45 rounded p-2 mb-4">
  <div class="row">
      <div class="col">
        <div class="p-2">Copy Code</div>
      </div>
  </div>
</div>

<div class="container">
  <div class="row">
  <div class="col bg-dark p-3 rounded">
  <Drawer title="Bootstrap Theme" opened>
      <code class="bg-dark">
      <div>//</div>
      <div>// Color System</div>
      <div>//</div>
      <br>
      <!-- <div>// Add this to your <a href="https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss" rel="noopener noreferrer" target="_blank">variables.scss</a> file.</div> -->
      {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as item, i}
        <div><span>${item.name}</span>: <span>{mix(blend,item.color,ratio*ratios[item.name])};</span></div>
        <!-- <div><span>${item.name}</span>: <span>{item.color};</span></div> -->
      {/each}
      <br>
      {#each Object.keys(theme).map(name=>({name, color:theme[name]})) as item, i}
        <div><span>${item.name}</span>: <span>${item.color};</span></div>
      {/each}
      </code>
      </Drawer>
    </div>
  </div>
</div>
