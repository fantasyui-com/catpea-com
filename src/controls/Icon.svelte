<script>

  import octicons from 'octicons';

  export let name = "eye";
  export let color = "warning";


</script>


<span class="fill-warning hover-fill-danger">{@html octicons[name].toSVG()}</span>
