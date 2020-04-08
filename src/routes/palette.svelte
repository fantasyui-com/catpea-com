<script>
import Drawer from '../containers/Drawer.svelte';
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

let theme = {
  'primary': 'orange',
  'secondary': 'gray-600',
  'success': 'green',
  'info': 'cyan',
  'warning': 'yellow',
  'danger': 'red',
  //'light': colors['gray-100'],
  //'dark': colors['gray-800'],
}

function test(){

  colors['gray-100'] = 'pink';

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



<div class="container rounded bg-secondary mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(colors).filter(name=>!name.startsWith('gray-')).map(name=>({name, color:colors[name]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">
      <div class="rounded bg-secondary">{capitalize(item.name)}</div>
        <div class="d-inline-block rounded shadow border border-dark" style="background: {item.color}; height: 10rem; width: 10rem;"></div>
        <!-- <div class="rounded bg-secondary">{item.color}</div> -->
        <div class="rounded bg-secondary">
          <input type="color" bind:value={colors[item.name]}>
        </div>
      </div>
    {/each}
  </div>
</div>


<div class="container rounded bg-secondary mb-4">
  <div class="row justify-content-center">
    {#each Object.keys(theme).map(name=>({name, color:colors[theme[name]]})) as item, i}
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-2 text-center p-2">
      <div class="rounded bg-secondary">{capitalize(item.name)}</div>
        <div class="d-inline-block rounded shadow border border-dark" style="background: {item.color}; height: 10rem; width: 10rem;"></div>
        <!-- <div class="rounded bg-secondary">{item.color}</div> -->
        <Drawer title="Palette">
          {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as color, i}
            <div class="rounded bg-secondary cursor-pointer" on:click={()=>theme[item.name]=color.name}>{capitalize(color.name)}</div>
          {/each}
        </Drawer>
      </div>
    {/each}
  </div>
</div>

<div class="container">
  <div class="row">
  <div class="col bg-dark text-success p-3">
  <Drawer title="Bootstrap Theme">
      <code>
      <div>// Color Declaration</div>
      <div>// Add this to your <a href="https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss" rel="noopener noreferrer" target="_blank">variables.scss</a> file.</div>
      {#each Object.keys(colors).map(name=>({name, color:colors[name]})) as item, i}
        <div><span class="text-danger">${item.name}</span>: <span class="text-warning">{item.color};</span></div>
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
