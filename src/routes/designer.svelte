<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { css } from 'emotion'
  import chroma from 'chroma-js';

  import kebabCase from 'dashify';


  const profileInternals = new Set(['name', 'enableBackground', 'backgroundColor']);
  const profileDatatypes = {

      "primaryColor": "",

      "borderRadius": 'rem',

      "highlightOffsetX": 'px',
      "highlightOffsetY": 'px',
      "highlightBlurRadius": 'px',
      "highlightSpreadRadius": 'px',
      "shadowTopOffsetX": 'px',
      "shadowTopOffsetY": 'px',
      "shadowTopBlurRadius": 'px',
      "shadowTopSpreadRadius": 'px',
      "shadowCenterOffsetX": 'px',
      "shadowCenterOffsetY": 'px',
      "shadowCenterBlurRadius": 'px',
      "shadowCenterSpreadRadius": 'px',
      "shadowBottomOffsetX": 'px',
      "shadowBottomOffsetY": 'px',
      "shadowBottomBlurRadius": 'px',
      "shadowBottomSpreadRadius": 'px',
      "dropshadowOffsetX": 'px',
      "dropshadowOffsetY": 'px',
      "dropshadowBlurRadius": 'px',
      "dropshadowSpreadRadius": 'px',

      "highlightSaturation": '%',
      "highlightLightness": '%',
      "shadowTopSaturation": '%',
      "shadowTopLightness": '%',
      "shadowCenterSaturation": '%',
      "shadowCenterLightness": '%',
      "shadowBottomSaturation": '%',
      "shadowBottomLightness": '%',
      "dropshadowSaturation": '%',
      "dropshadowLightness": '%',
    };

  const profiles =
  [
{
"name": "Blueberry",
"primaryColor": "#bcb8ee",
"enableBackground": true,
"backgroundColor": "#a2e6a6",
"borderRadius": 2.1,
"highlightOffsetX": 0,
"highlightOffsetY": 0,
"highlightBlurRadius": 18,
"highlightSpreadRadius": 5,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 17,
"shadowTopBlurRadius": 8,
"shadowTopSpreadRadius": -6,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 30,
"shadowCenterBlurRadius": 10,
"shadowCenterSpreadRadius": -4,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 40,
"shadowBottomBlurRadius": 0,
"shadowBottomSpreadRadius": 0,
"dropshadowOffsetX": 0,
"dropshadowOffsetY": 46,
"dropshadowBlurRadius": 31,
"dropshadowSpreadRadius": 12,
"highlightSaturation": -0.15,
"highlightLightness": -0.16,
"shadowTopSaturation": -0.47,
"shadowTopLightness": -0.29,
"shadowCenterSaturation": -0.65,
"shadowCenterLightness": -0.39,
"shadowBottomSaturation": -0.65,
"shadowBottomLightness": -0.54,
"dropshadowSaturation": -0.24,
"dropshadowLightness": -0.63
},
{
"name": "Lemon",
"primaryColor": "#efe697",
"enableBackground": true,
"backgroundColor": "#9cc9cb",
"borderRadius": 3,
"highlightOffsetX": 1,
"highlightOffsetY": 5,
"highlightBlurRadius": 12,
"highlightSpreadRadius": 2,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 5,
"shadowTopBlurRadius": 9,
"shadowTopSpreadRadius": 0,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 15,
"shadowCenterBlurRadius": 6,
"shadowCenterSpreadRadius": -4,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 21,
"shadowBottomBlurRadius": 0,
"shadowBottomSpreadRadius": 0,
"dropshadowOffsetX": -2,
"dropshadowOffsetY": 19,
"dropshadowBlurRadius": 12,
"dropshadowSpreadRadius": 11,
"highlightSaturation": -0.75,
"highlightLightness": 0.07,
"shadowTopSaturation": -0.78,
"shadowTopLightness": -0.13,
"shadowCenterSaturation": -0.24,
"shadowCenterLightness": -0.3,
"shadowBottomSaturation": -0.59,
"shadowBottomLightness": -0.53,
"dropshadowSaturation": -0.7,
"dropshadowLightness": -0.62
},
{
"name": "Aluminium",
"primaryColor": "#92949d",
"enableBackground": true,
"backgroundColor": "#4f4f4f",
"borderRadius": 0.4,
"highlightOffsetX": 1,
"highlightOffsetY": 1,
"highlightBlurRadius": 0,
"highlightSpreadRadius": 0,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 3,
"shadowTopBlurRadius": 0,
"shadowTopSpreadRadius": 0,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 8,
"shadowCenterBlurRadius": 5,
"shadowCenterSpreadRadius": -4,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 11,
"shadowBottomBlurRadius": 3,
"shadowBottomSpreadRadius": -3,
"dropshadowOffsetX": 20,
"dropshadowOffsetY": 32,
"dropshadowBlurRadius": 31,
"dropshadowSpreadRadius": -3,
"highlightSaturation": -1,
"highlightLightness": 0.13,
"shadowTopSaturation": -1,
"shadowTopLightness": -0.33,
"shadowCenterSaturation": -1,
"shadowCenterLightness": -0.25,
"shadowBottomSaturation": -1,
"shadowBottomLightness": -0.42,
"dropshadowSaturation": -0.87,
"dropshadowLightness": -0.79
},
{
"name": "Gold",
"primaryColor": "#ff9f2c",
"enableBackground": true,
"backgroundColor": "#ffca8c",
"borderRadius": 0.8,
"highlightOffsetX": 1,
"highlightOffsetY": 1,
"highlightBlurRadius": 0,
"highlightSpreadRadius": 0,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 3,
"shadowTopBlurRadius": 5,
"shadowTopSpreadRadius": -1,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 8,
"shadowCenterBlurRadius": 5,
"shadowCenterSpreadRadius": -4,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 9,
"shadowBottomBlurRadius": 0,
"shadowBottomSpreadRadius": 0,
"dropshadowOffsetX": 0,
"dropshadowOffsetY": 16,
"dropshadowBlurRadius": 8,
"dropshadowSpreadRadius": 0,
"highlightSaturation": -0.07,
"highlightLightness": 0.27,
"shadowTopSaturation": -0.21,
"shadowTopLightness": -0.09,
"shadowCenterSaturation": -0.48,
"shadowCenterLightness": -0.25,
"shadowBottomSaturation": -0.17,
"shadowBottomLightness": -0.35,
"dropshadowSaturation": -0.36,
"dropshadowLightness": -0.45
},
{
"name": "Energon",
"primaryColor": "#fc90ff",
"enableBackground": true,
"backgroundColor": "#262858",
"borderRadius": 0.4,
"highlightOffsetX": 0,
"highlightOffsetY": 0,
"highlightBlurRadius": 18,
"highlightSpreadRadius": 5,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 8,
"shadowTopBlurRadius": 8,
"shadowTopSpreadRadius": -1,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 27,
"shadowCenterBlurRadius": 9,
"shadowCenterSpreadRadius": -5,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 40,
"shadowBottomBlurRadius": 6,
"shadowBottomSpreadRadius": -11,
"dropshadowOffsetX": 0,
"dropshadowOffsetY": 50,
"dropshadowBlurRadius": 31,
"dropshadowSpreadRadius": 12,
"highlightSaturation": 0,
"highlightLightness": -0.27,
"shadowTopSaturation": 0,
"shadowTopLightness": -0.29,
"shadowCenterSaturation": 0,
"shadowCenterLightness": -0.44,
"shadowBottomSaturation": 0,
"shadowBottomLightness": -0.55,
"dropshadowSaturation": -0.24,
"dropshadowLightness": -0.63
},
{
"name": "Structure",
"primaryColor": "#ff00c3",
"enableBackground": true,
"backgroundColor": "#ffca8c",
"borderRadius": 0.8,
"highlightOffsetX": 0,
"highlightOffsetY": 0,
"highlightBlurRadius": 0,
"highlightSpreadRadius": 5,
"shadowTopOffsetX": 0,
"shadowTopOffsetY": 5,
"shadowTopBlurRadius": 0,
"shadowTopSpreadRadius": 5,
"shadowCenterOffsetX": 0,
"shadowCenterOffsetY": 10,
"shadowCenterBlurRadius": 0,
"shadowCenterSpreadRadius": 10,
"shadowBottomOffsetX": 0,
"shadowBottomOffsetY": 15,
"shadowBottomBlurRadius": 0,
"shadowBottomSpreadRadius": 15,
"dropshadowOffsetX": 0,
"dropshadowOffsetY": 20,
"dropshadowBlurRadius": 0,
"dropshadowSpreadRadius": 20,
"highlightSaturation": 0,
"shadowTopSaturation": 0,
"shadowCenterSaturation": 0,
"shadowBottomSaturation": 0,
"dropshadowSaturation": 0,
"highlightLightness": -0.1,
"shadowTopLightness": -0.2,
"shadowCenterLightness": -0.3,
"shadowBottomLightness": -0.4,
"dropshadowLightness": -0.5
}
]

// .map(profile=>{
//      profile.highlightSaturation = parseFloat(profile.highlightSaturation.toFixed(2));
//      profile.highlightLightness = parseFloat(profile.highlightLightness.toFixed(2));
//      profile.shadowTopSaturation = parseFloat(profile.shadowTopSaturation.toFixed(2));
//      profile.shadowTopLightness = parseFloat(profile.shadowTopLightness.toFixed(2));
//      profile.shadowCenterSaturation = parseFloat(profile.shadowCenterSaturation.toFixed(2));
//      profile.shadowCenterLightness = parseFloat(profile.shadowCenterLightness.toFixed(2));
//      profile.shadowBottomSaturation = parseFloat(profile.shadowBottomSaturation.toFixed(2));
//      profile.shadowBottomLightness = parseFloat(profile.shadowBottomLightness.toFixed(2));
//      profile.dropshadowSaturation = parseFloat(profile.dropshadowSaturation.toFixed(2));
//      profile.dropshadowLightness = parseFloat(profile.dropshadowLightness.toFixed(2));
//   return profile;
// })





  let selected = 0;
  let profile = profiles[0];

  const gui = {

    sizePane:[
      {label:'Highlight', reference:'highlight', controls:[ {label:'offsetx', key:'OffsetX', min:-20, max:20, step:1},{label:'offsety', key:'OffsetY', min:-20, max:20, step:1},{label:'blur', key:'BlurRadius', min:0, max:32, step:1},{label:'spread', key:'SpreadRadius', min:-5, max:5, step:1} ]},
      {label:'Shadow Top', reference:'shadowTop', controls:[{label:'offsetx', key:'OffsetX', min:-20, max:20, step:1},{label:'offsety', key:'OffsetY', min:-20, max:20, step:1},{label:'blur', key:'BlurRadius', min:0, max:32, step:1},{label:'spread', key:'SpreadRadius', min:-20, max:20, step:1}]},
      {label:'Shadow Center', reference:'shadowCenter', controls:[{label:'offsetx', key:'OffsetX', min:-20, max:20, step:1},{label:'offsety', key:'OffsetY', min:-20, max:30, step:1},{label:'blur', key:'BlurRadius', min:0, max:32, step:1},{label:'spread', key:'SpreadRadius', min:-20, max:20, step:1}]},
      {label:'Shadow Bottom', reference:'shadowBottom', controls:[{label:'offsetx', key:'OffsetX', min:-20, max:20, step:1},{label:'offsety', key:'OffsetY', min:-20, max:40, step:1},{label:'blur', key:'BlurRadius', min:0, max:32, step:1},{label:'spread', key:'SpreadRadius', min:-20, max:20, step:1}]},
      {label:'Drop Shadow', reference:'dropshadow', controls:[{label:'offsetx', key:'OffsetX', min:-20, max:20, step:1},{label:'offsety', key:'OffsetY', min:-20, max:50, step:1},{label:'blur', key:'BlurRadius', min:0, max:32, step:1},{label:'spread', key:'SpreadRadius', min:-20, max:20, step:1}]},
    ],

    colorPane:[
      {label:'Highlight', reference:'highlight', controls:[ {label:'saturation', key:'Saturation', min:-1, max:1, step:.01},{label:'lightness', key:'Lightness', min:-1, max:1, step:.01}]},
      {label:'Shadow Top', reference:'shadowTop', controls:[ {label:'saturation', key:'Saturation', min:-1, max:1, step:.01},{label:'lightness', key:'Lightness', min:-1, max:1, step:.01}]},
      {label:'Shadow Center', reference:'shadowCenter', controls:[ {label:'saturation', key:'Saturation', min:-1, max:1, step:.01},{label:'lightness', key:'Lightness', min:-1, max:1, step:.01}]},
      {label:'Shadow Bottom', reference:'shadowBottom', controls:[ {label:'saturation', key:'Saturation', min:-1, max:1, step:.01},{label:'lightness', key:'Lightness', min:-1, max:1, step:.01}]},
      {label:'Drop Shadow', reference:'dropshadow', controls:[ {label:'saturation', key:'Saturation', min:-1, max:1, step:.01},{label:'lightness', key:'Lightness', min:-1, max:1, step:.01}]},
    ],

  }




  let pickerColor = profile.primaryColor;
  $: foregroundColor = chroma(profile.primaryColor).darken(0).saturate(0).hex();


  const shadowStack = [
    {key:'highlight', refs:['Saturation', 'Lightness'],    dims:['OffsetX', 'OffsetY', 'BlurRadius', 'SpreadRadius', 'Color'], inset:true},
    {key:'shadowTop', refs:['Saturation', 'Lightness'],    dims:['OffsetX', 'OffsetY', 'BlurRadius', 'SpreadRadius', 'Color']},
    {key:'shadowCenter', refs:['Saturation', 'Lightness'], dims:['OffsetX', 'OffsetY', 'BlurRadius', 'SpreadRadius', 'Color']},
    {key:'shadowBottom', refs:['Saturation', 'Lightness'], dims:['OffsetX', 'OffsetY', 'BlurRadius', 'SpreadRadius', 'Color']},
    {key:'dropshadow', refs:['Saturation', 'Lightness'],   dims:['OffsetX', 'OffsetY', 'BlurRadius', 'SpreadRadius', 'Color']},

  ]


  let cssColors = {};
  $: shadowStack.forEach(o=>{

    cssColors[o.key + 'Color'] = chroma(profile.primaryColor).set('hsl.s', '*' + ((profile[o.key+o.refs[0]])+1)  ).set('hsl.l', '*' + ((profile[o.key+o.refs[1]])+1)  ).hex();
  });

  let sassColors = {};
  $: shadowStack.forEach(o=>{
    let name = `${kebabCase(profile.name)}-${'primary-color'}`;
    let changes = o.refs.map(p=>`$${kebabCase(p)}: $${kebabCase(profile.name)}-${kebabCase(o.key)}-${kebabCase(p)}`).join(', ')
    sassColors[o.key + 'Color'] = `color.adjust($${name}, ${changes})`
  });

  let sassBoxShadow = [];
  $: shadowStack.forEach((o,i)=>{
     if(i==0) sassBoxShadow.length = 0;
     sassBoxShadow.push(o.dims.map((p,j)=>`${(o.inset&&j==0)?'inset ':''}$${kebabCase(profile.name)}-${kebabCase(o.key)}-${kebabCase(p)}`).join(' '))
   });

  $: boxStyleCSS = `
      min-height: 3rem;
      border-radius: ${profile.borderRadius}rem;
      background: ${foregroundColor};
      box-shadow:
      inset ${profile.highlightOffsetX}px ${profile.highlightOffsetY}px ${profile.highlightBlurRadius}px ${profile.highlightSpreadRadius}px ${cssColors.highlightColor},
            ${profile.shadowTopOffsetX}px ${profile.shadowTopOffsetY}px ${profile.shadowTopBlurRadius}px ${profile.shadowTopSpreadRadius}px ${cssColors.shadowTopColor},
            ${profile.shadowCenterOffsetX}px ${profile.shadowCenterOffsetY}px ${profile.shadowCenterBlurRadius}px ${profile.shadowCenterSpreadRadius}px ${cssColors.shadowCenterColor},
            ${profile.shadowBottomOffsetX}px ${profile.shadowBottomOffsetY}px ${profile.shadowBottomBlurRadius}px ${profile.shadowBottomSpreadRadius}px ${cssColors.shadowBottomColor},
            ${profile.dropshadowOffsetX}px ${profile.dropshadowOffsetY}px ${profile.dropshadowBlurRadius}px ${profile.dropshadowSpreadRadius}px ${cssColors.dropshadowColor};
  `;

  $: boxStyleSASS = `
  @mixin ${kebabCase(profile.name)}() {

  // Configuration
  ${Object.keys(profile).filter(o=>!profileInternals.has(o)).map(name=>({name, value:profile[name]})).map(o=>`$${kebabCase(profile.name)}-${kebabCase(o.name)}: ${profileDatatypes[o.name]=='%'? ((o.value*100 )/2).toFixed(1) :o.value}${profileDatatypes[o.name]} !default;`).join('\n')}

  // Color Adjust
  ${Object.keys(sassColors).map(name=>({name, value:sassColors[name]})).map(o=>`$${kebabCase(profile.name)}-${kebabCase(o.name)}: ${o.value};`).join('\n')}

  // Declarations
     border-radius: $${kebabCase(profile.name)}-${'border-radius'};
     box-shadow: ${sassBoxShadow.join(',\n')} !important;

  }

  `;
  //
  //

  $: boxClass = css`${boxStyleCSS}`; // use string


  onMount(function(){




  })
  let animate = false;
  function animation(){
    animate = true;
    setTimeout(function(){
      animate=false;
    },1234)
  }

</script>

<style>
  .animate{
    transition: all 1s ease-in 0s;
  }
</style>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Component Designer</title>
</svelte:head>






<div class="container">


    <div class="row">


      <div class="col-lg-12">

      {#if profile.enableBackground}

        <div class="rounded" style="padding: 5rem; background-color: {profile.backgroundColor}" class:animate>
          <div class="box p-3 mb-5 {boxClass}" style="min-height: 10rem;" class:animate>

          </div>
        </div>

      {:else}

      <div class="rounded" style="padding: 5rem;">

        <div class="box p-3 mb-5 {boxClass}" style="min-height: 10rem;" class:animate>
        </div>
        </div>

      {/if}

      </div>

    </div>

    <div class="row">
    <div class="col-lg-2 p-3">
      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 17rem;">

        <div class="text-center">Setup</div>

        <div class="small strong mb-1">Design Presets</div>
        <select class="form-control mb-3" on:change={o=>{animation(); profile=profiles[parseInt(o.target.value)]}}>
          {#each profiles as profile, index}
            <option value={index} selected={profile==index}>
              {profile.name}
            </option>
          {/each}
        </select>

        <div class="small strong">Primary Color</div>
        <!-- <div class="small strong">Primary Color {profile.primaryColor}</div> -->
        <input class="mb-2 mt-1" type="color" bind:value={profile.primaryColor}>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" bind:checked={profile.enableBackground} id="defaultCheck1">
          <label class="form-check-label small" for="defaultCheck1">
            Background Color
          </label>
        </div>

        {#if profile.enableBackground}
          <!-- <div class="small strong">{profile.backgroundColor}</div> -->
          <input class="mb-2 mt-1" type="color" bind:value={profile.backgroundColor}>
        {/if}


      </div>
    </div>
      {#each gui.sizePane as setup}
        <div class="col-lg-2 p-3">
          <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 17rem;">
            <div class="text-center">{setup.label}</div>
            {#each setup.controls as control}
              <div class="small strong">{control.label} {profile[setup.reference+control.key]}{profileDatatypes[setup.reference+control.key]}</div><input type="range" class="custom-range" min={control.min} max={control.max} step={control.step} bind:value={profile[setup.reference+control.key]}>
            {/each}
          </div>
        </div>
      {/each}
    </div>

    <div class="row">
    <div class="col-lg-2 p-3">
      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 10rem;">
        <div class="small strong">Corners {profile.borderRadius.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="3" step="0.1" bind:value={profile.borderRadius}>
      </div>
    </div>
      {#each gui.colorPane as setup}
        <div class="col-lg-2 p-3">
          <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 10rem;">
            <div class="text-center">{setup.label}</div>
            {#each setup.controls as control}
              <div class="small strong">{control.label} {profile[setup.reference+control.key]}</div><input type="range" class="custom-range" min={control.min} max={control.max} step={control.step} bind:value={profile[setup.reference+control.key]}>
            {/each}
          </div>
        </div>
      {/each}
    </div>

</div>


<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">
  <div>.box {'{'}</div>
    {@html boxStyleCSS.trim().split('\n').map(o=>o.trim()).map(o=>(o=='')?'<br>':o).map(i=>`<div class="pl-3">${i}</div>`).join('')}
  <div>{'}'}</div>
</div>
<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">

    {@html boxStyleSASS.trim().split('\n').map(o=>o.trim()).map(o=>(o=='')?'<br>':o).map(i=>`<div class="pl-3">${i}</div>`).join('')}

</div>


<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">
{@html JSON.stringify(profile, null,'  ').split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
</div>
<!--
<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">
{@html JSON.stringify(profiles, null,'  ').split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
</div> -->
