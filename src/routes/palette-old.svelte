<script>
import SongMachine from '../components/SongMachine.svelte';

let red = 'black';

let colors = [
  {name:'white', value:'#fff'},
  {name:'gray-100', value:'#f8f9fa'},
  {name:'gray-200', value:'#e9ecef'},
  {name:'gray-300', value:'#dee2e6'},
  {name:'gray-400', value:'#ced4da'},
  {name:'gray-500', value:'#adb5bd'},
  {name:'gray-600', value:'#6c757d'},
  {name:'gray-700', value:'#495057'},
  {name:'gray-800', value:'#343a40'},
  {name:'gray-900', value:'#212529'},
  {name:'black', value:'#000'},
  {name:'blue', value:'#007bff'},
  {name:'indigo', value:'#6610f2'},
  {name:'purple', value:'#6f42c1'},
  {name:'pink', value:'#e83e8c'},
  {name:'red', value:'#dc3545'},
  {name:'orange', value:'#fd7e14'},
  {name:'yellow', value:'#ffc107'},
  {name:'green', value:'#28a745'},
  {name:'teal', value:'#20c997'},
  {name:'cyan', value:'#17a2b8'},
];

function test(){
  red = 'cyan';
  colors[11].value = 'pink';

}

function makeStyle(){
  //return colors.map(i=>`--${i.name}:${i.value};`).join('');
  return colors.map((o,i)=>`--${o.name}:{colors[${i}].value};`).join('');
  //--red:{red};
}
</script>

<svelte:head>
  <title>𝗖𝗔𝗧𝗣𝗘𝗔: Color Palette Designer</title>
</svelte:head>

<style type="text/scss" or lang="scss">

$blue:    var(--blue);


  @import "../../node_modules/bootstrap/scss/functions";
  $white:    #fff !default;
  $gray-100: #f8f9fa !default;
  $gray-200: #e9ecef !default;
  $gray-300: #dee2e6 !default;
  $gray-400: #ced4da !default;
  $gray-500: #adb5bd !default;
  $gray-600: #6c757d !default;
  $gray-700: #495057 !default;
  $gray-800: #343a40 !default;
  $gray-900: #212529 !default;
  $black:    #000 !default;

  $grays: () !default;
  // stylelint-disable-next-line scss/dollar-variable-default
  $grays: map-merge(
    (
      "100": $gray-100,
      "200": $gray-200,
      "300": $gray-300,
      "400": $gray-400,
      "500": $gray-500,
      "600": $gray-600,
      "700": $gray-700,
      "800": $gray-800,
      "900": $gray-900
    ),
    $grays
  );

  $blue:    #007bff !default;
  $indigo:  #6610f2 !default;
  $purple:  #6f42c1 !default;
  $pink:    #e83e8c !default;
  $red:     #dc3545 !default;
  $orange:  #fd7e14 !default;
  $yellow:  #ffc107 !default;
  $green:   #28a745 !default;
  $teal:    #20c997 !default;
  $cyan:    #17a2b8 !default;

  $colors: () !default;
  // stylelint-disable-next-line scss/dollar-variable-default
  $colors: map-merge(
    (
      "blue":       $blue,
      "indigo":     $indigo,
      "purple":     $purple,
      "pink":       $pink,
      "red":        $red,
      "orange":     $orange,
      "yellow":     $yellow,
      "green":      $green,
      "teal":       $teal,
      "cyan":       $cyan,
      "white":      $white,
      "gray":       $gray-600,
      "gray-dark":  $gray-800
    ),
    $colors
  );

  $primary:       $blue !default;
  $secondary:     $gray-600 !default;
  $success:       $green !default;
  $info:          $cyan !default;
  $warning:       $yellow !default;
  $danger:        $red !default;
  $light:         $gray-100 !default;
  $dark:          $gray-800 !default;

  $theme-colors: () !default;
  // stylelint-disable-next-line scss/dollar-variable-default
  $theme-colors: map-merge(
    (
      "primary":    $primary,
      "secondary":  $secondary,
      "success":    $success,
      "info":       $info,
      "warning":    $warning,
      "danger":     $danger,
      "light":      $light,
      "dark":       $dark
    ),
    $theme-colors
  );

  // $link-hover-color:                        darken($link-color, 15%) !default;


  ul {
    //background: var(--red);
    background: $primary;
  }
</style>
<!--
<style type="text/scss" or lang="scss">
  @import "../../node_modules/bootstrap/scss/functions";
  $blue:    var(--blue);
  $blue:    #007bff !default;
  $primary: $blue !default;

  ul {
    //background: var(--red);
    background: $primary;
  }
</style> -->

<!-- //<ul style="--blue:{colors[11].value};" on:click={()=>test()}> -->
<ul style="--white:{colors[0].value};--gray-100:{colors[1].value};--gray-200:{colors[2].value};--gray-300:{colors[3].value};--gray-400:{colors[4].value};--gray-500:{colors[5].value};--gray-600:{colors[6].value};--gray-700:{colors[7].value};--gray-800:{colors[8].value};--gray-900:{colors[9].value};--black:{colors[10].value};--blue:{colors[11].value};--indigo:{colors[12].value};--purple:{colors[13].value};--pink:{colors[14].value};--red:{colors[15].value};--orange:{colors[16].value};--yellow:{colors[17].value};--green:{colors[18].value};--teal:{colors[19].value};--cyan:{colors[20].value};" on:click={()=>test()}>
  Hello
</ul>



<div class="row">
  <div class="col">
    {makeStyle()}
  </div>
</div>

{#each colors as item, i}
  <div class="row">
    <div class="col">
      {item.name}: {item.value}
    </div>
  </div>
{/each}
