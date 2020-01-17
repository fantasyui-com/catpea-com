<script context="module">
	export async function preload({ params, query }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`stream/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { post: data };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>

<script>
	export let post;
</script>

<style>

</style>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>




<div class="container-fluid">
	<div class="row">
		<div class="col-lg-4"></div>

		<div class="col">

		<div class="card bg-secondary mb-3 shadow-lg">
		  <div class="card-header">{post.title}</div>

			<div class="card-body">
		    <p class="card-text">{@html post.html}</p>
		  </div>

		</div>

		</div>

		<div class="col-lg-4"></div>
	</div>
</div>
