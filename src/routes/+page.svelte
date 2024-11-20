<script lang="ts">
	import splashImage from '$lib/images/logo.png';
</script>

<svelte:head>
	<title>Gem & Pollux</title>
	<meta name="description" content="Gem & Pollux website" />
</svelte:head>

<section>
	<div class="logo-container">
		<img src={splashImage} alt="Gem & Pollux Logo" />
	</div>
	<h2>Coming soon!</h2>
</section>

<style>
	:global(body) {
		background-color: #F5F0F0;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.logo-container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 500px;
		height: 500px;
	}

	.logo-container img {
		width: 100%;
		height: 100%;
		
		object-fit: cover;
	}

	h2 {
		font-size: 2rem;
		margin-top: 20px;
	}
</style>
