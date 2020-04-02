<script>

import octicons from '../devices/icons.js';
import { onMount } from 'svelte';


  export let name = "eye";
  export let color = "warning";

  let icon = "";


    console.log('Are octicons installed?',!!octicons);

    if(octicons && octicons[name]){
      icon = octicons[name].toSVG({class:`fill-${color} hover-fill-danger`});
      //icon = `<img class="${`fill-${color} hover-fill-danger`}" src="icons/${name}.svg">`
    }

 

</script>

<span>{@html icon}</span>
