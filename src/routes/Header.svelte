<script lang="ts">
	import { page } from "$app/state";
	import CrSharpButton from "$lib/components/CrSharpButton.svelte";
	import { onMount } from "svelte";
	import yeralti from "../lib/images/yeralti.png";
	import { Motion } from "svelte-motion";
	import { Menu, X } from "lucide-svelte";
	import { goto } from "$app/navigation";

	const navItems = [
		{ name: "Ana Sayfa", url: "/" },
		{ name: "Hizmetlerimiz", url: "/#hizmetlerimiz" },
		{ name: "Hakkımızda", url: "/about" },
	];

	let isMenuOpen = $state(false);

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

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	$effect(() => {
		if (page.url) {
			isMenuOpen = false;
		}
	});

	$effect(() => {
		if (isMenuOpen) {
			document.body.classList.add("menu-open");
		} else {
			document.body.classList.remove("menu-open");
		}
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
			class="inline-flex relative rounded-full px-4 py-2.5 transition-colors duration-200 hover:text-soft hover:before:w-[80%] hover:before:-translate-x-1/2
			hover:before:h-0.5 hover:before:bg-primary-soft hover:before:absolute hover:before:bottom-0 hover:before:left-1/2"
		>
			{name}
		</a>
	</li>
{/snippet}

<header
	bind:this={boundary}
	class="flex h-20 mx-auto w-full max-w-7xl items-center justify-between border-b-2 border-gray-100 px-4 sm:px-8
    sm:mt-4 sticky top-0 backdrop-blur-md z-50"
>
	<button
		type="button"
		onclick={() => goto("/")}
		class="flex-1 flex flex-col items-start"
		style="font-family: var(--font-mono)"
	>
		<span class="text-xl font-bold tracking-tight">RISING STARS</span>
		<span class="text-md opacity-60">mentorship</span>
	</button>

	<nav class="hidden md:flex justify-center">
		<ul class="flex flex-wrap items-center gap-8 text-sm font-medium">
			{#each navItems as { name, url }}
				{@render NavLink(name, url)}
			{/each}
		</ul>
		<Motion
			let:motion
			transition={{ type: "spring", duration: 0.5 }}
			animate={blob}
		>
			<!-- svelte-ignore element_invalid_self_closing_tag -->
			<div
				use:motion
				class="absolute bg-primary-soft -z-10 rounded-lg left-0 inset-y-0"
			/>
		</Motion>
	</nav>

	<button
		class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
		onclick={toggleMenu}
		aria-label="Toggle menu"
	>
		{#if isMenuOpen}
			<X class="w-6 h-6" />
		{:else}
			<Menu class="w-6 h-6" />
		{/if}
	</button>

	<div class="hidden md:flex flex-1 justify-end">
		<CrSharpButton href="/apply" noBorder>Kaydol</CrSharpButton>
	</div>
</header>

<Motion
	let:motion
	transition={{ type: "spring", duration: 0.5 }}
	animate={{ x: isMenuOpen ? "100%" : "0%" }}
>
	<nav
		use:motion
		class="fixed top-0 right-full bottom-0 w-[280px] bg-white shadow-2xl z-[60]
			flex flex-col p-6 {isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}"
	>
		<div class="flex justify-end mb-6">
			<button
				class="p-2 rounded-lg hover:bg-gray-100 transition-colors"
				onclick={toggleMenu}
			>
				<X class="w-6 h-6" />
			</button>
		</div>

		<ul class="space-y-4">
			{#each navItems as { name, url }}
				<li>
					<a
						href={url}
						onclick={() => (selected = url)}
						class="block py-2 px-4 rounded-lg transition-colors duration-200
                        {selected === url
							? 'bg-primary-soft/10 text-primary'
							: 'hover:bg-gray-100'}"
					>
						{name}
					</a>
				</li>
			{/each}
		</ul>

		<div class="mt-auto pt-6 border-t">
			<CrSharpButton href="/apply" class="w-full justify-center">
				Kaydol
			</CrSharpButton>
		</div>
	</nav>
</Motion>

<!-- Backdrop -->
{#if isMenuOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<Motion
		let:motion
		initial={{ opacity: 0 }}
		animate={{ opacity: 0.5 }}
		transition={{ duration: 0.2 }}
	>
		<!-- svelte-ignore a11y_click_events_have_key_events -->
		<!-- svelte-ignore element_invalid_self_closing_tag -->
		<div
			use:motion
			class="fixed inset-0 bg-black z-50"
			onclick={toggleMenu}
		/>
	</Motion>
{/if}

<style>
	/* Prevent body scroll when menu is open */
	:global(body.menu-open) {
		overflow: hidden;
	}
</style>
