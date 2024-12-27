<script lang="ts">
	import { page } from "$app/state";
	import yeralti from "../lib/images/yeralti.png";
</script>

{#snippet NavLink(name: string, url: string)}
	<li aria-current={page.url.pathname == url ? "page" : undefined}>
		<a
			href={url}
			class="inline-flex rounded-full px-3 py-1.5 text-slate-500
	   hover:text-indigo-500 [&.active]:bg-indigo-100 [&.active]:text-indigo-600"
		>
			{name}
		</a>
	</li>
{/snippet}

<header
	class="flex h-14 mx-auto w-full max-w-7xl items-center justify-between gap-4 rounded-full border border-gray-100 bg-white px-4
	 shadow-xl mt-8 sticky top-4
	 shadow-black/[0.04]"
>
	<div class="flex flex-1 items-center">
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a
			class="ml-0.5 inline-flex text-indigo-400 hover:text-indigo-500"
			href="#0"
		>
			<picture>
				<source srcset={yeralti} type="image/webp" />
				<img src={yeralti} alt="Yeralti" class="h-4 w-auto" />
			</picture>
		</a>
	</div>
	<nav class="flex justify-center">
		<ul
			class="flex flex-wrap items-center gap-3 text-sm font-medium md:gap-8
			[&>li[aria-current='page']]:bg-indigo-100 [&>li[aria-current='page']]:text-indigo-600
			"
		>
			{@render NavLink("Ana Sayfa", "/")}
			{@render NavLink("Başvur", "/apply")}
			{@render NavLink("Hakkımızda", "/about")}
		</ul>
	</nav>
	<div class="flex flex-1 items-center justify-end">
		<a
			class="inline-flex justify-center whitespace-nowrap rounded-full bg-indigo-500 px-3 py-1.5 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300"
			href="#0"
		>
			Kaydol
		</a>
	</div>
</header>
