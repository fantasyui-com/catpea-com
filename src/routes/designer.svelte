<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import { css } from 'emotion'

  import chroma from 'chroma-js';

  const profiles = [
    {
      primaryColor: '#a4a2bb',
      borderRadius:1,

      highlightBaseLuminosity: .80,

      shadowTopBaseLuminosity: .40,
      shadowCenterBaseLuminosity: .30,
      shadowBottomBaseLuminosity: .20,
      dropshadowBaseLuminosity: .10,

      highlightBaseSaturation:.10,
      shadowTopBaseSaturation:.05,
      shadowCenterBaseSaturation:.05,
      shadowBottomBaseSaturation:.05,
      dropshadowBaseSaturation:.10,

      highlightOffsetX: 1,
      highlightOffsetY: 1,
      highlightBlurRadius: 0,
      highlightSpreadRadius: 0,
      shadowTopOffsetX: 0,
      shadowTopOffsetY: 5,
      shadowTopBlurRadius: 0,
      shadowTopSpreadRadius: 0,
      shadowCenterOffsetX: 0,
      shadowCenterOffsetY: 8,
      shadowCenterBlurRadius: 0,
      shadowCenterSpreadRadius: 0,
      shadowBottomOffsetX: 0,
      shadowBottomOffsetY: 13,
      shadowBottomBlurRadius: 0,
      shadowBottomSpreadRadius: 0,
      dropshadowOffsetX: -2,
      dropshadowOffsetY: 18,
      dropshadowBlurRadius: 0,
      dropshadowSpreadRadius: 0,

    }
  ];
  const selected = 0;
  let profile = profiles[selected];




  let pickerColor = profile.primaryColor;


  $: foregroundColor = chroma(profile.primaryColor).darken(0).saturate(0).hex();

  let highlightBase;
  let highlightHue;
  let highlightSaturation;
  let highlightLuminosity;

  let dropshadowBase;
  let dropshadowHue;
  let dropshadowSaturation;
  let dropshadowLuminosity;


  let shadowTopBase;
  let shadowTopHue;
  let shadowTopSaturation;
  let shadowTopLuminosity;

  let shadowCenterBase;
  let shadowCenterHue;
  let shadowCenterSaturation;
  let shadowCenterLuminosity;

  let shadowBottomBase;
  let shadowBottomHue;
  let shadowBottomSaturation;
  let shadowBottomLuminosity;

  function updateColor(){

     profile.primaryColor = pickerColor;




    highlightBase = chroma(profile.primaryColor).set('hsl.l', profile.highlightBaseLuminosity).set('hsl.s',profile.highlightBaseSaturation);
    shadowCenterBase = chroma(profile.primaryColor).set('hsl.l', profile.shadowCenterBaseLuminosity).set('hsl.s',profile.shadowCenterBaseSaturation);
    shadowTopBase = chroma(profile.primaryColor).set('hsl.l', profile.shadowTopBaseLuminosity).set('hsl.s',profile.shadowTopBaseSaturation);
    shadowBottomBase = chroma(profile.primaryColor).set('hsl.l', profile.shadowBottomBaseLuminosity).set('hsl.s',profile.shadowBottomBaseSaturation);
    dropshadowBase = chroma(profile.primaryColor).set('hsl.l', profile.dropshadowBaseLuminosity).set('hsl.s',profile.dropshadowBaseSaturation);



    highlightHue = chroma(highlightBase).get('hsl.h');
    highlightSaturation = chroma(highlightBase).get('hsl.s');
    highlightLuminosity = chroma(highlightBase).get('hsl.l');


    shadowCenterHue = chroma(shadowCenterBase).get('hsl.h');
    shadowCenterSaturation = chroma(shadowCenterBase).get('hsl.s');
    shadowCenterLuminosity = chroma(shadowCenterBase).get('hsl.l');

    shadowTopHue = chroma(shadowTopBase).get('hsl.h');
    shadowTopSaturation = chroma(shadowTopBase).get('hsl.s');
    shadowTopLuminosity = chroma(shadowTopBase).get('hsl.l');

    shadowBottomHue = chroma(shadowBottomBase).get('hsl.h');
    shadowBottomSaturation = chroma(shadowBottomBase).get('hsl.s');
    shadowBottomLuminosity = chroma(shadowBottomBase).get('hsl.l');

    dropshadowHue = chroma(dropshadowBase).get('hsl.h');
    dropshadowSaturation = chroma(dropshadowBase).get('hsl.s');
    dropshadowLuminosity = chroma(dropshadowBase).get('hsl.l');


  }

  updateColor();


  $: highlightColor = chroma(highlightBase).set('hsl.h', highlightHue).set('hsl.s', highlightSaturation).set('hsl.l', highlightLuminosity).hex();
  $: shadowTopColor = chroma(shadowTopBase).set('hsl.h', shadowTopHue).set('hsl.s', shadowTopSaturation).set('hsl.l', shadowTopLuminosity).hex();
  $: shadowCenterColor = chroma(shadowCenterBase).set('hsl.h', shadowCenterHue).set('hsl.s', shadowCenterSaturation).set('hsl.l', shadowCenterLuminosity).hex();
  $: shadowBottomColor = chroma(shadowBottomBase).set('hsl.h', shadowBottomHue).set('hsl.s', shadowBottomSaturation).set('hsl.l', shadowBottomLuminosity).hex();
  $: dropshadowColor = chroma(dropshadowBase).set('hsl.h', dropshadowHue).set('hsl.s', dropshadowSaturation).set('hsl.l', dropshadowLuminosity).hex();


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


  $: boxClass = css`${ boxStyleCSS }`; // use string


</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Component Designer</title>
</svelte:head>






<div class="container">
    <div class="row">

      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
        <div class="text-center">Highlight</div>
        <div class="small strong">Hue {highlightHue.toFixed(0)}</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={highlightHue}>
        <div class="small strong">Saturation {highlightSaturation.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={highlightSaturation}>
        <div class="small strong">Luminosity {highlightLuminosity.toFixed(2)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={highlightLuminosity}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Drop Shadow</div>
          <div class="small strong">Hue {dropshadowHue.toFixed(0)}</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={dropshadowHue}>
          <div class="small strong">Saturation {dropshadowSaturation.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={dropshadowSaturation}>
          <div class="small strong">Luminosity {dropshadowLuminosity.toFixed(2)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={dropshadowLuminosity}>
        </div>
      </div>
      <div class="col-lg-8 p-3">

      <div class="box p-3 mb-5 {boxClass}" style="min-height: 16rem;">
        Example Box
      </div>


      </div>
      <div class="col-lg-2 p-3">

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Top</div>
          <div class="small strong">Hue {shadowTopHue.toFixed(0)}</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={shadowTopHue}>
          <div class="small strong">Saturation {shadowTopSaturation.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowTopSaturation}>
          <div class="small strong">Luminosity {shadowTopLuminosity.toFixed(2)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowTopLuminosity}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Center</div>
          <div class="small strong">Hue {shadowCenterHue.toFixed(0)}</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={shadowCenterHue}>
          <div class="small strong">Saturation {shadowCenterSaturation.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowCenterSaturation}>
          <div class="small strong">Luminosity {shadowCenterLuminosity.toFixed(2)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowCenterLuminosity}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Bottom</div>
          <div class="small strong">Hue {shadowBottomHue.toFixed(0)}</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={shadowBottomHue}>
          <div class="small strong">Saturation {shadowBottomSaturation.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowBottomSaturation}>
          <div class="small strong">Luminosity {shadowBottomLuminosity.toFixed(2)}</div><input type="range" class="custom-range" min="0" max="1" step="0.01" bind:value={shadowBottomLuminosity}>
        </div>

      </div>

    </div>
    <div class="row">

    <div class="col-lg-2 p-3">
      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
        <div class="small strong">Color {profile.primaryColor}</div><input class="mb-2 mt-1" type="color" bind:value={profile.primaryColor} on:input={()=>updateColor()}>
        <div class="small strong">Corners {profile.borderRadius.toFixed(1)}</div><input type="range" class="custom-range" min="0" max="3" step="0.1" bind:value={profile.borderRadius}>
      </div>
    </div>

      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Highlight</div>
          <div class="small strong">X Offset {profile.highlightOffsetX}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.highlightOffsetX}>
          <div class="small strong">Y Offset {profile.highlightOffsetY}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.highlightOffsetY}>
          <div class="small strong">Blur {profile.highlightBlurRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.highlightBlurRadius}>
          <div class="small strong">Spread {profile.highlightSpreadRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.highlightSpreadRadius}>
        </div>
      </div>

      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Top</div>
          <div class="small strong">X Offset {profile.shadowTopOffsetX}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowTopOffsetX}>
          <div class="small strong">Y Offset {profile.shadowTopOffsetY}</div><input type="range" class="custom-range" min="0" max="15" step="1" bind:value={profile.shadowTopOffsetY}>
          <div class="small strong">Blur {profile.shadowTopBlurRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.shadowTopBlurRadius}>
          <div class="small strong">Spread {profile.shadowTopSpreadRadius}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowTopSpreadRadius}>
        </div>
      </div>
      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Center</div>
          <div class="small strong">X Offset {profile.shadowCenterOffsetX}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowCenterOffsetX}>
          <div class="small strong">Y Offset {profile.shadowCenterOffsetY}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.shadowCenterOffsetY}>
          <div class="small strong">Blur {profile.shadowCenterBlurRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.shadowCenterBlurRadius}>
          <div class="small strong">Spread {profile.shadowCenterSpreadRadius}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowCenterSpreadRadius}>
        </div>
      </div>
      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow Bottom</div>
          <div class="small strong">X Offset {profile.shadowBottomOffsetX}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowBottomOffsetX}>
          <div class="small strong">Y Offset {profile.shadowBottomOffsetY}</div><input type="range" class="custom-range" min="0" max="15" step="1" bind:value={profile.shadowBottomOffsetY}>
          <div class="small strong">Blur {profile.shadowBottomBlurRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.shadowBottomBlurRadius}>
          <div class="small strong">Spread {profile.shadowBottomSpreadRadius}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.shadowBottomSpreadRadius}>
        </div>
      </div>

      <div class="col-lg-2 p-3">
        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Drop Shadow</div>
          <div class="small strong">X Offset {profile.dropshadowOffsetX}</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={profile.dropshadowOffsetX}>
          <div class="small strong">Y Offset {profile.dropshadowOffsetY}</div><input type="range" class="custom-range" min="0" max="20" step="1" bind:value={profile.dropshadowOffsetY}>
          <div class="small strong">Blur {profile.dropshadowBlurRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.dropshadowBlurRadius}>
          <div class="small strong">Spread {profile.dropshadowSpreadRadius}</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={profile.dropshadowSpreadRadius}>
        </div>
      </div>

      <div class="col-lg-2 p-3">
      </div>

    </div>
</div>


<div class="bg-dark text-primary p-3 rounded bg-night text-night mb-5">
    {@html JSON.stringify(profile,null,'  ').split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
</div>


<div class="bg-dark text-primary p-3 rounded bg-night text-night">
  <div>.box {'{'}</div>
    {@html boxStyleCSS.split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
  <div>{'}'}</div>
</div>
