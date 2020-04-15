<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
  import { css } from 'emotion'
  import chroma from 'chroma-js';

  const profiles = [
    {
    "name": "Blueberry",
    "primaryColor": "#bcb8ee",
    "borderRadius": 1,
    "highlightOffsetX": 1,
    "highlightOffsetY": 5,
    "highlightBlurRadius": 12,
    "highlightSpreadRadius": 2,
    "shadowTopOffsetX": 0,
    "shadowTopOffsetY": 12,
    "shadowTopBlurRadius": 9,
    "shadowTopSpreadRadius": 0,
    "shadowCenterOffsetX": 0,
    "shadowCenterOffsetY": 30,
    "shadowCenterBlurRadius": 6,
    "shadowCenterSpreadRadius": -4,
    "shadowBottomOffsetX": 0,
    "shadowBottomOffsetY": 40,
    "shadowBottomBlurRadius": 0,
    "shadowBottomSpreadRadius": 0,
    "dropshadowOffsetX": -2,
    "dropshadowOffsetY": 50,
    "dropshadowBlurRadius": 23,
    "dropshadowSpreadRadius": 6,
    "highlightSaturation": 0,
    "highlightLuminosity": 1.07,
    "shadowTopSaturation": 0,
    "shadowTopLuminosity": 0.63,
    "shadowCenterSaturation": 0,
    "shadowCenterLuminosity": 0.49,
    "shadowBottomSaturation": 0,
    "shadowBottomLuminosity": 0.47,
    "dropshadowSaturation": 0.13,
    "dropshadowLuminosity": 0.19
  },
  {
  "name": "Lemon",
  "primaryColor": "#efe697",
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
  "dropshadowBlurRadius": 23,
  "dropshadowSpreadRadius": 6,
  "highlightSaturation": 0.25,
  "highlightLuminosity": 1.07,
  "shadowTopSaturation": 0.22,
  "shadowTopLuminosity": 0.87,
  "shadowCenterSaturation": 0.76,
  "shadowCenterLuminosity": 0.7,
  "shadowBottomSaturation": 0.41,
  "shadowBottomLuminosity": 0.47,
  "dropshadowSaturation": 0.13,
  "dropshadowLuminosity": 0.19
  },

  {
  "name": "Heavy Metal",
  "primaryColor": "#92949d",
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
  "dropshadowOffsetX": -2,
  "dropshadowOffsetY": 16,
  "dropshadowBlurRadius": 5,
  "dropshadowSpreadRadius": -6,
  "highlightSaturation": 0,
  "highlightLuminosity": 1.13,
  "shadowTopSaturation": 0,
  "shadowTopLuminosity": 0.8,
  "shadowCenterSaturation": 0,
  "shadowCenterLuminosity": 0.75,
  "shadowBottomSaturation": 0,
  "shadowBottomLuminosity": 0.46,
  "dropshadowSaturation": 0.13,
  "dropshadowLuminosity": 0.19
  }

  ];

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
      {label:'Highlight', reference:'highlight', controls:[ {label:'saturation', key:'Saturation', min:0, max:1, step:.01},{label:'luminosity', key:'Luminosity', min:0, max:2, step:.01}]},
      {label:'Shadow Top', reference:'shadowTop', controls:[ {label:'saturation', key:'Saturation', min:0, max:1, step:.01},{label:'luminosity', key:'Luminosity', min:0, max:1, step:.01}]},
      {label:'Shadow Center', reference:'shadowCenter', controls:[ {label:'saturation', key:'Saturation', min:0, max:1, step:.01},{label:'luminosity', key:'Luminosity', min:0, max:1, step:.01}]},
      {label:'Shadow Bottom', reference:'shadowBottom', controls:[ {label:'saturation', key:'Saturation', min:0, max:1, step:.01},{label:'luminosity', key:'Luminosity', min:0, max:1, step:.01}]},
      {label:'Drop Shadow', reference:'dropshadow', controls:[ {label:'saturation', key:'Saturation', min:0, max:1, step:.01},{label:'luminosity', key:'Luminosity', min:0, max:1, step:.01}]},
    ],

  }




  let pickerColor = profile.primaryColor;
  $: foregroundColor = chroma(profile.primaryColor).darken(0).saturate(0).hex();




  // updateColor();
  //
  $: highlightColor = chroma(profile.primaryColor).set('hsl.s', '*'+profile.highlightSaturation).set('hsl.l', '*'+profile.highlightLuminosity).hex();
  $: shadowTopColor = chroma(profile.primaryColor).set('hsl.s', '*'+profile.shadowTopSaturation).set('hsl.l', '*'+profile.shadowTopLuminosity).hex();
  $: shadowCenterColor = chroma(profile.primaryColor).set('hsl.s', '*'+profile.shadowCenterSaturation).set('hsl.l', '*'+profile.shadowCenterLuminosity).hex();
  $: shadowBottomColor = chroma(profile.primaryColor).set('hsl.s', '*'+profile.shadowBottomSaturation).set('hsl.l', '*'+profile.shadowBottomLuminosity).hex();
  $: dropshadowColor = chroma(profile.primaryColor).set('hsl.s', '*'+profile.dropshadowSaturation).set('hsl.l', '*'+profile.dropshadowLuminosity).hex();
  //
  $: boxStyleCSS = `
      min-height: 3rem;
      border-radius: ${profile.borderRadius}rem;
      background: ${foregroundColor};
      box-shadow:
      inset ${profile.highlightOffsetX}px ${profile.highlightOffsetY}px ${profile.highlightBlurRadius}px ${profile.highlightSpreadRadius}px ${highlightColor},
            ${profile.shadowTopOffsetX}px ${profile.shadowTopOffsetY}px ${profile.shadowTopBlurRadius}px ${profile.shadowTopSpreadRadius}px ${shadowTopColor},
            ${profile.shadowCenterOffsetX}px ${profile.shadowCenterOffsetY}px ${profile.shadowCenterBlurRadius}px ${profile.shadowCenterSpreadRadius}px ${shadowCenterColor},
            ${profile.shadowBottomOffsetX}px ${profile.shadowBottomOffsetY}px ${profile.shadowBottomBlurRadius}px ${profile.shadowBottomSpreadRadius}px ${shadowBottomColor},
            ${profile.dropshadowOffsetX}px ${profile.dropshadowOffsetY}px ${profile.dropshadowBlurRadius}px ${profile.dropshadowSpreadRadius}px ${dropshadowColor};
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


      <div class="col-lg-12 p-3">
      <div class="box p-3 mb-5 {boxClass}" style="min-height: 10rem;" class:animate>

      </div>
      </div>

    </div>

    <div class="row">
    <div class="col-lg-2 p-3">
      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 17rem;">

        <div class="small strong mb-1">Design Presets</div>
        <select class="form-control mb-3" on:change={o=>{animation(); profile=profiles[parseInt(o.target.value)]}}>
          {#each profiles as profile, index}
            <option value={index} selected={profile==index}>
              {profile.name}
            </option>
          {/each}
        </select>

        <div class="small strong">Color {profile.primaryColor}</div><input class="mb-2 mt-1" type="color" bind:value={profile.primaryColor}>

      </div>
    </div>
      {#each gui.sizePane as setup}
        <div class="col-lg-2 p-3">
          <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night" style="min-height: 17rem;">
            <div class="text-center">{setup.label}</div>
            {#each setup.controls as control}
              <div class="small strong">{control.label} {profile[setup.reference+control.key]}</div><input type="range" class="custom-range" min={control.min} max={control.max} step={control.step} bind:value={profile[setup.reference+control.key]}>
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
    {@html boxStyleCSS.split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
  <div>{'}'}</div>
</div>


<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">
{@html JSON.stringify(profile, null,'  ').split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
</div>
