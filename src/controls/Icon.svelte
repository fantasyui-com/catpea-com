<script>

import octicons from '@primer/octicons';


  export let name = "eye";
  export let color = "warning";

  console.log('octicons installed?',!!octicons);

  let icon = "";
  if(octicons && octicons[name]){
    icon = octicons[name].toSVG({class:`fill-${color} hover-fill-danger`});
  }

</script>

<span class="">{@html icon}</span>
