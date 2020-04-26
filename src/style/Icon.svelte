<script>
  import icons from '../devices/icons.js';
  const octicons = icons();

  let classes;
  export { classes as class };

  export let name = "eye";
  export let color = "warning";
  export let size = 24;

  let icon = "";
  if(octicons && octicons[name]){
    icon = octicons[name].toSVG({width:size});
  }
</script>
<span class="fill-{color} {classes}">{@html icon}</span>
