<script>

  import octicons from 'octicons';

  export let name = "eye";
  export let color = "warning";


  let icon = octicons['squirrel'].toSVG();

  if(octicons[name]){
    icon = octicons[name].toSVG();
  }

</script>

<span class="fill-{color} hover-fill-danger">{@html icon}</span>
