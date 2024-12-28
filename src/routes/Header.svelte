<script lang="ts">
	import { page } from "$app/state";
	import CrSharpButton from "$lib/components/CrSharpButton.svelte";
	import { onMount } from "svelte";
	import yeralti from "../lib/images/yeralti.png";
	import { Motion } from "svelte-motion";

	const navItems = [
		{ name: "Ana Sayfa", url: "/" },
		{ name: "Hakkımızda", url: "/about" },
		{ name: "Başvur", url: "/apply" },
	];

	let selected = $state(page.url.pathname);
	let blob = $state.raw({ x: 0, y: 0, width: 0, height: 0 });
	let boundary: HTMLElement;

	function moveBlob(
		event: any & { currentTarget: EventTarget & HTMLAnchorElement },
		url: string,
	) {
		selected = url;

		const rect = event.target.getBoundingClientRect();
		blob = {
			x: rect.left - boundary.getBoundingClientRect().left,
			y: rect.top - boundary.getBoundingClientRect().top,
			width: rect.width,
			height: rect.height,
		};
	}

	onMount(() => {
		onEvent();
	});

	function onEvent() {
		moveBlob(
			{ target: document.querySelector("a[href='" + selected + "']") },
			selected,
		);
	}
</script>

<svelte:window onresize={onEvent} />

{#snippet NavLink(name: string, url: string)}
	<li
		aria-current={page.url.pathname == url ? "page" : undefined}
		class="relative"
	>
		<a
			href={url}
			onclick={(event) => moveBlob(event, url)}
			class="inline-flex rounded-full px-4 py-2.5 transition-colors duration-200
	   hover:text-soft"
		>
			{name}
		</a>
	</li>
{/snippet}

<header
	bind:this={boundary}
	class="flex h-20 mx-auto w-full max-w-7xl items-center justify-between border-b-2 border-gray-100 px-8
	  mt-8 sticky top-0 backdrop-blur-md z-50"
>
	<picture class="flex flex-1 items-center">
		<source srcset={yeralti} type="image/webp" />
		<img src={yeralti} alt="Yeralti" class="h-4 w-auto" />
	</picture>
	<nav class="flex justify-center">
		<ul
			class="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-8"
		>
			{#each navItems as { name, url }, i}
				{@render NavLink(name, url)}
			{/each}
		</ul>
		<Motion
			let:motion
			transition={{ type: "spring", duration: 0.5 }}
			animate={blob}
		>
			<div
				use:motion
				class={`absolute bg-primary -z-10 rounded-full left-0 inset-y-0`}
			></div>
		</Motion>
	</nav>
	<div class="flex flex-1 justify-end">
		<CrSharpButton noBorder>Kaydol</CrSharpButton>
	</div>
</header>
