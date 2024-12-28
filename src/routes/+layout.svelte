<script lang="ts">
	import Header from "./Header.svelte";
	import "../app.css";
	import yeralti from "../lib/images/yeralti.png";
	import { FacebookIcon, InstagramIcon, Youtube } from "lucide-svelte";

	let { children } = $props();
</script>

<div class="app">
	<Header />
	<main>
		{@render children()}
	</main>
	<svg
		width="1920"
		height="240"
		viewBox="0 0 1920 240"
		xmlns="http://www.w3.org/2000/svg"
		><path
			d="M1920,240C1633,263.1666666666667,289.6666666666667,258.1666666666667,0,240C-289.6666666666667,221.83333333333334,119.16666666666666,142,182,131C244.83333333333334,120,311.8333333333333,171.33333333333334,377,174C442.1666666666667,176.66666666666666,508,150,573,147C638,144,702.8333333333334,152.5,767,156C831.1666666666666,159.5,894,166.66666666666666,958,168C1022,169.33333333333334,1087.6666666666667,174.16666666666666,1151,164C1214.3333333333333,153.83333333333334,1275.3333333333333,102.5,1338,107C1400.6666666666667,111.5,1463,192,1527,191C1591,190,1656.5,92.83333333333333,1722,101C1787.5,109.16666666666667,2207,216.83333333333334,1920,240C1633,263.1666666666667,289.6666666666667,258.1666666666667,0,240"
			fill="#db9e81"
		/></svg
	>
	<div class="w-full bg-primary md:p-8">
		<div class="w-full mx-auto max-w-7xl px-4 flex flex-col">
			<div class="flex flex-row justify-between items-center">
				<h1
					class="w-full flex-auto text-7xl text-primary-soft font-mono font-bold tracking-tighter"
				>
					Sanata Dair Her Şey, Burada.
				</h1>
				<form class=" flex-initial md:min-w-80 pt-6 md:pt-0">
					<div class="relative max-w-xl">
						<label class="sr-only" for="email"> Email </label>

						<input
							class="w-full rounded-full border-primary-soft bg-bg p-4 pe-32 text-sm font-medium"
							id="email"
							type="email"
							placeholder="yeralti@yeralti.org"
						/>

						<button
							class="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-bg
						 transition hover:bg-primary-soft hover:text-main"
						>
							Haberdar Ol
						</button>
					</div>
				</form>
			</div>
			<div class="flex flex-col">
				<div
					class="flex my-8 flex-row justify-between text-primary-soft lowercase"
				>
					<div
						class="flex flex-col justify-start space-x-8 text-primary-soft"
					>
						<picture class="flex items-center">
							<source srcset={yeralti} type="image/webp" />
							<img
								src={yeralti}
								alt="Yeralti"
								class="h-8 w-auto"
							/>
						</picture>
						<p class=" text-xs">Copyright © 2024 "Yeralti"</p>
					</div>

					<div
						class="flex flex-row space-x-8 items-center text-primary-soft justify-between"
					>
						<a href="/#">
							<FacebookIcon />
						</a>
						<a href="/#">
							<InstagramIcon />
						</a>
						<a href="/#">
							<Youtube />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
</style>
