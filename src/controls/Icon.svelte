<script>
  import icons from '../devices/icons.js';
  const octicons = icons();
  export let name = "eye";
  export let color = "warning";
  let icon = "";
  if(octicons && octicons[name]){
    icon = octicons[name].toSVG({width:24, height: 24, class:`fill-${color} hover-fill-danger`});
  }
</script>
<span>{@html icon}</span>
