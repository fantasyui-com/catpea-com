<script>
  import octicons from 'octicons';

  export let name = "eye";
  export let context = "warning";

  // {"class": "fill-"+context}
</script>


<span class="fill-{context} hover-fill-danger">{@html octicons[name].toSVG()}</span>
