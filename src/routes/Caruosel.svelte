<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { Tween } from "svelte/motion";
	import { fade, scale } from "svelte/transition";
	import dergi from "../lib/images/dergi.png";
	import erlik from "../lib/images/erlik.png";
	import events from "../lib/images/events.png";
	import monthly from "../lib/images/monthly.png";
	import { Armchair } from "lucide-svelte";

	let items = [
		{
			img: dergi,
			desc: "Dergi",
			buttonIcon: Armchair,
		},
		{
			img: erlik,
			desc: "Erlik",
			buttonIcon: Armchair,
		},
		{
			img: events,
			desc: "Etkinlikler",
			buttonIcon: Armchair,
		},
		{
			img: monthly,
			desc: "Aylık Sayı",
			buttonIcon: Armchair,
		},
	];

	let active = 0;
	let progress = new Tween(0, { duration: 0 });
	const duration = 5000;

	let frame: number;

	let firstFrameTime: number;
	let itemsRef: HTMLDivElement;

	const startAnimation = () => {
		firstFrameTime = performance.now();
		frame = requestAnimationFrame(animate);
	};

	const animate = (now: number) => {
		let timeFraction = (now - firstFrameTime) / duration;
		if (timeFraction <= 1) {
			progress.set(timeFraction * 100);
			frame = requestAnimationFrame(animate);
		} else {
			timeFraction = 1;
			progress.set(0);
			active = (active + 1) % items.length;
			startAnimation();
		}
	};

	const stopAnimation = () => {
		cancelAnimationFrame(frame);
	};

	const setHeightFix = () => {
		if (itemsRef && itemsRef.parentElement) {
			itemsRef.parentElement.style.height = `${itemsRef.offsetHeight}px`;
		}
	};

	const selectItem = (index: number) => {
		active = index;
		progress.set(0);
		stopAnimation();
		startAnimation();
	};

	onMount(() => {
		setHeightFix();
		startAnimation();

		return () => {
			stopAnimation();
		};
	});
</script>

<div class="mx-auto w-full max-w-7xl text-center">
	<div class="transition-all delay-300 duration-150 ease-in-out">
		<div bind:this={itemsRef} class="relative flex flex-col">
			{#each items as item, index}
				<div
					transition:fade={{
						duration: 500,
						delay: active === index ? 200 : 0,
					}}
					class="inset-0"
					style="display: {active === index ? 'block' : 'none'};"
				>
					<img
						src={item.img}
						alt={item.desc}
						class="rounded-xl w-full h-auto"
					/>
				</div>
			{/each}
		</div>
	</div>

	<div
		class="mx-auto mt-8 grid max-w-xs grid-cols-2 gap-4 sm:max-w-sm md:max-w-3xl md:grid-cols-4"
	>
		{#each items as item, index}
			<button
				class="group rounded p-2 focus:outline-none focus-visible:ring focus-visible:ring-indigo-300"
				on:click={() => selectItem(index)}
			>
				<span
					class="flex flex-col items-center text-center {active ===
					index
						? ''
						: 'opacity-50 transition-opacity group-hover:opacity-100 group-focus:opacity-100'}"
				>
					<span
						class="relative mb-2 flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100"
					>
						<svelte:component this={item.buttonIcon} />
					</span>
					<span class="mb-2 block text-sm font-medium text-slate-900">
						{item.desc}
					</span>
					<span
						class="relative block h-1 w-full rounded-full bg-slate-200"
						role="progressbar"
						aria-valuenow={active === index ? progress.current : 0}
					>
						<span
							class="absolute inset-0 rounded-[inherit] bg-indigo-500"
							style="width: {active === index
								? progress.current + '%'
								: '0%'}"
						></span>
					</span>
				</span>
			</button>
		{/each}
	</div>
</div>
