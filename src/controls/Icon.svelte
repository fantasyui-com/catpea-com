<script>

  import octicons from 'octicons';

  export let name = "eye";
  export let color = "warning";

  console.log('octicons',octicons);
  console.log('octicon',name);
  let icon = "";

  if(octicons && octicons[name]){
    icon = octicons[name].toSVG();
  }

</script>

<span class="fill-{color} hover-fill-danger">{@html icon}</span>
