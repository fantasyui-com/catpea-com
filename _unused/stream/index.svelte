<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`stream.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>

</style>

<svelte:head>
	<title>Catpea Stream</title>
</svelte:head>

<div class="container-fluid">
	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col">
			{#each posts as post}
				<div class="card bg-secondary mb-3 shadow-lg" style="max-width: 40rem;">
				  <div class="card-header">{post.category}</div>
				  <div class="card-body">
				    <h5 class="card-title">{post.title}</h5>
				    <p class="card-text text-dark small">{post.date}</p>
				    <p class="card-text small">{post.about}</p>
				  </div>
				  <div class="card-body text-right">
				 		<a class="btn btn-dark btn-sm shadow" rel='prefetch' href='stream/{post.slug}'>{post.title} &raquo;</a>
				  </div>
				</div>
			{/each}
		</div>
		<div class="col-lg-4"></div>
	</div>
</div>
