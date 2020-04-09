<script>
  import icons from '../devices/icons.js';
  const octicons = icons();
  export let name = "eye";
  export let color = "warning";
  export let size = 24;

  let icon = "";
  if(octicons && octicons[name]){
    icon = octicons[name].toSVG({width:size});
  }
</script>
<span class="fill-{color}">{@html icon}</span>
