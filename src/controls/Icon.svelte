<script>
  import octicons from 'octicons';

  export let name = "eye";
  export let context = "warning";

</script>

<span>{@html octicons[name].toSVG({ "class": "fill-"+context })}</span>
