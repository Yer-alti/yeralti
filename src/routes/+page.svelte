<script lang="ts">
	import { redirect } from "@sveltejs/kit";
	import Caruosel from "./Caruosel.svelte";
	let isVisible = false;

	// Add animation on mount
	import { onMount } from "svelte";
	import { goto } from "$app/navigation";
	onMount(() => {
		isVisible = true;
	});
</script>

<svelte:head>
	<title>Rising Stars Mentorship</title>
	<meta name="description" content="Rising Stars Mentorship" />
</svelte:head>

<div
	class="flex flex-col items-center justify-center gap-16 mx-auto w-full max-w-7xl"
>
	<div class="relative w-full min-h-screen overflow-hidden">
		<div class="absolute inset-0 opacity-20">
			<div
				class="absolute top-20 left-20 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-xl animate-blob"
			></div>
			<div
				class="absolute top-40 right-20 w-72 h-72 bg-secondary-soft rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
			></div>
			<div
				class="absolute -bottom-8 left-40 w-72 h-72 bg-pop rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
			></div>
		</div>

		<div class="relative z-10 px-6 py-20 mx-auto max-w-7xl lg:px-8">
			<div class="flex flex-col gap-2.5 items-center text-center">
				<div
					class={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<span
						class="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-soft rounded-full opacity-85 ring-1 ring-primary"
					>
						Geleceğini Şekillendir
					</span>
				</div>

				<h1
					class={`mt-8 text-5xl font-bold tracking-tight  sm:text-7xl transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<span class="block text-secondary"
						>Öğrenme Yolculuğunda</span
					>
					<span
						class="block bg-gradient-to-r from-primary to-primary-soft bg-clip-text text-transparent"
						>Başarıya Eriş!</span
					>
				</h1>

				<p
					class={`mt-6 text-lg leading-8 max-w-4xl transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					İlk okuldan liseye her dersten eğitimi, başaranlardan ve
					uğruna gelişmiş olanlarla ilerlet.
				</p>

				<div
					class={`mt-10 flex items-center gap-x-6 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<button
						class="rounded-xl px-8 py-3 text-base font-semibold text-bg bg-primary hover:bg-primary-soft
					transition-all duration-300 shadow-sm hover:shadow-pop hover:-translate-y-2"
						onclick={() => goto("/apply")}
					>
						İletişime Geç
					</button>
					<button
						class="rounded-full px-8 py-3 text-base font-semibold text-primary-soft border border-primary hover:bg-primary
						 transition-all duration-300 hover:text-bg"
					>
						Biz kimiz?
					</button>
				</div>

				<div
					class={`mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					{#each [["Akademi Odaklı", "Tekrar"], ["8", "Sınıf"], ["Kişiye Özel", "Mentörlük"]] as [stat, label]}
						<div class="flex flex-col items-center">
							<dt class="text-3xl font-bold text-primary">
								{stat}
							</dt>
							<dd class="text-sm">{label}</dd>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<Caruosel />
</div>

<style>
	@keyframes blob {
		0% {
			transform: translate(0px, 0px) scale(1);
		}
		33% {
			transform: translate(30px, -50px) scale(1.1);
		}
		66% {
			transform: translate(-20px, 20px) scale(0.9);
		}
		100% {
			transform: translate(0px, 0px) scale(1);
		}
	}

	:global(.animate-blob) {
		animation: blob 7s infinite;
	}

	:global(.animation-delay-2000) {
		animation-delay: 2s;
	}

	:global(.animation-delay-4000) {
		animation-delay: 4s;
	}
</style>
