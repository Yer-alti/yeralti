<script lang="ts">
	import Caruosel from "./Caruosel.svelte";
</script>

<svelte:head>
	<title>Yeralti</title>
	<meta name="description" content="Yeralti Grubu" />
</svelte:head>

<div
	class="flex flex-col items-center justify-center gap-16 mx-auto w-full max-w-7xl"
>
	<section
		class="font-extrabold text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-b from-primary
		 to-80% to-primary-soft h-[80vh] text-center flex flex-col gap-8 items-center justify-center"
	>
		<div
			class="text-7xl md:text-9xl text-primary
		block w-full"
		>
			Yeraltı
		</div>

		saklı bir topluluk ve “seçilmiş” insanların girdiği bir komite
	</section>
	<Caruosel />
</div>
