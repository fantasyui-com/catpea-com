<script>
  import octicons from 'octicons';

  export let name = "eye";
  export let color = "warning";

  // {"class": "fill-"+context}
</script>


<span class="fill-{color} hover-fill-danger">{@html octicons[name].toSVG()}</span>
