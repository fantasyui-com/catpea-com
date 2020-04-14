<script>

  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';

  import { css } from 'emotion'
  import chroma from 'chroma-js';

  let primaryColor = '#a4a2bb';
  let pickerColor = primaryColor;
  let borderRadius = .5;

  // afterUpdate(() => {
  //   //Has the color have been changed?
  //   //if yes, then recalculate initial values one more time
  //   if(pickerColor != primaryColor){
  //     primaryColor = pickerColor;
  //     updateColor()
  //   }
  // });

  $: foregroundColor = chroma(primaryColor).darken(0).saturate(0).hex();

  let highlightBase;
  let highlightHue;
  let highlightSaturation;
  let highlightLuminosity;
  let shadeBase;
  let shadeHue;
  let shadeSaturation;
  let shadeLuminosity;
  let shadowBase;
  let shadowHue;
  let shadowSaturation;
  let shadowLuminosity;


  function updateColor(){

    console.log('Updated color from %s to %s',primaryColor, pickerColor);
    primaryColor = pickerColor;

    highlightBase = chroma(primaryColor).brighten(1).saturate(1);
    highlightHue = chroma(highlightBase).get('hsl.h');
    highlightSaturation = chroma(highlightBase).get('hsl.s');
    highlightLuminosity = chroma(highlightBase).get('hsl.l');
    shadeBase = chroma(primaryColor).darken(1).saturate(0);
    shadeHue = chroma(shadeBase).get('hsl.h');
    shadeSaturation = chroma(shadeBase).get('hsl.s');
    shadeLuminosity = chroma(shadeBase).get('hsl.l');

    shadowBase = chroma(primaryColor).set('hsl.l',.3).set('hsl.s',.1)
    shadowHue = chroma(shadowBase).get('hsl.h');
    shadowSaturation = chroma(shadowBase).get('hsl.s');
    shadowLuminosity = chroma(shadowBase).get('hsl.l');

  }

  updateColor();

  let highlightOffsetX = 0;
  let highlightOffsetY = 4;
  let highlightBlurRadius = 1;
  let highlightSpreadRadius = 1;
  $: highlightColor = chroma(highlightBase).set('hsl.h', highlightHue).set('hsl.s', highlightSaturation).set('hsl.l', highlightLuminosity).hex();






  let shadeOffsetX = 0;
  let shadeOffsetY = -3;
  let shadeBlurRadius = 1;
  let shadeSpreadRadius = 1;
  $: shadeColor = chroma(shadeBase).set('hsl.h', shadeHue).set('hsl.s', shadeSaturation).set('hsl.l', shadeLuminosity).hex();






  let shadowOffsetX = 0;
  let shadowOffsetY = 4;
  let shadowBlurRadius = 1;
  let shadowSpreadRadius = 1;
  $: shadowColor = chroma(shadowBase).set('hsl.h', shadowHue).set('hsl.s', shadowSaturation).set('hsl.l', shadowLuminosity).hex();

  $: boxStyleCSS = `
      min-height: 3rem;
      position: relative;
      border-radius: ${borderRadius}rem;
      box-shadow: ${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlurRadius}px ${shadowSpreadRadius}px ${shadowColor}, inset ${highlightOffsetX}px ${highlightOffsetY}px ${highlightBlurRadius}px ${highlightSpreadRadius}px ${highlightColor}, inset ${shadeOffsetX}px ${shadeOffsetY}px ${shadeBlurRadius}px ${shadeSpreadRadius}px ${shadeColor};
      background: ${foregroundColor};
  `;

  $: boxClass = css`${boxStyleCSS}`; // use string

  console.log(chroma(chroma(primaryColor).darken(2).desaturate(2)).get('hsl.h'))

</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Component Designer</title>
</svelte:head>



<div class="container">
    <div class="row">

      <div class="col-lg-8 p-3">
      </div>

    </div>

    <div class="row">



      <div class="col-lg-2 p-3">

      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
        <div class="small strong">Color</div><input class="mb-2 mt-1" type="color" bind:value={pickerColor} on:input={()=>updateColor()}>
        <div class="small strong">Corners</div><input type="range" class="custom-range" min="0" max="3" step="0.1" bind:value={borderRadius}>
      </div>

      <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
        <div class="text-center">Highlight</div>
        <!-- <div class="small text-center">{highlightHue.toFixed(0)}/{highlightSaturation.toFixed(1)}/{highlightLuminosity.toFixed(1)}</div> -->

        <div class="small strong">Hue</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={highlightHue}>
        <div class="small strong">Saturation</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={highlightSaturation}>
        <div class="small strong">Luminosity</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={highlightLuminosity}>
      </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shade</div>
          <!-- <div class="small text-center">{shadeHue.toFixed(0)}/{shadeSaturation.toFixed(1)}/{shadeLuminosity.toFixed(1)}</div> -->

          <div class="small strong">Hue</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={shadeHue}>
          <div class="small strong">Saturation</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={shadeSaturation}>
          <div class="small strong">Luminosity</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={shadeLuminosity}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow</div>
          <!-- <div class="small text-center">{shadowHue.toFixed(0)}/{shadowSaturation.toFixed(1)}/{shadowLuminosity.toFixed(1)}</div> -->

          <div class="small strong">Hue</div><input type="range" class="custom-range" min="0" max="359" step="1" bind:value={shadowHue}>
          <div class="small strong">Saturation</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={shadowSaturation}>
          <div class="small strong">Luminosity</div><input type="range" class="custom-range" min="0" max="1" step=".1" bind:value={shadowLuminosity}>
        </div>


      </div>

      <div class="col-lg-8 p-3">


        <div class="box p-3 mb-5 {boxClass}" style="min-height: 16rem;">
          Example Box
        </div>

        <div class="bg-dark text-primary p-3 rounded bg-night text-night">
          <div>.box {'{'}</div>
            {@html boxStyleCSS.split('\n').map(i=>`<div class="pl-3">${i}</div>`).join('')}
          <div>{'}'}</div>
        </div>

      </div>

      <div class="col-lg-2 p-3">

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Highlight</div>
          <!-- <div class="small text-center">{highlightOffsetX}/{highlightOffsetY}/{highlightBlurRadius}/{highlightSpreadRadius}</div> -->
          <div class="small strong">X Offset</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={highlightOffsetX}>
          <div class="small strong">Y Offset</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={highlightOffsetY}>
          <div class="small strong">Blur</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={highlightBlurRadius}>
          <div class="small strong">Spread</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={highlightSpreadRadius}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shade</div>
          <!-- <div class="small text-center">{shadeOffsetX}/{shadeOffsetY}/{shadeBlurRadius}/{shadeSpreadRadius}</div> -->
          <div class="small strong">X Offset</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={shadeOffsetX}>
          <div class="small strong">Y Offset</div><input type="range" class="custom-range" min="-10" max="0" step="1" bind:value={shadeOffsetY}>
          <div class="small strong">Blur</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={shadeBlurRadius}>
          <div class="small strong">Spread</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={shadeSpreadRadius}>
        </div>

        <div class="p-3 mb-2 rounded bg-dark text-warning bg-night text-night">
          <div class="text-center">Shadow</div>
          <!-- <div class="small text-center">{shadowOffsetX}/{shadowOffsetY}/{shadowBlurRadius}/{shadowSpreadRadius}</div> -->
          <div class="small strong">X Offset</div><input type="range" class="custom-range" min="-10" max="10" step="1" bind:value={shadowOffsetX}>
          <div class="small strong">Y Offset</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={shadowOffsetY}>
          <div class="small strong">Blur</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={shadowBlurRadius}>
          <div class="small strong">Spread</div><input type="range" class="custom-range" min="0" max="10" step="1" bind:value={shadowSpreadRadius}>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col">

      </div>
    </div>

</div>
