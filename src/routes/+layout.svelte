<script lang="ts">
	import Header from "./Header.svelte";
	import "../app.css";
	import { Toaster } from "svelte-sonner";
	import {
		FacebookIcon,
		InstagramIcon,
		Youtube,
		ChevronRight,
		Rocket,
		GraduationCap,
		Users,
		Calendar,
	} from "lucide-svelte";

	const footerLinks = [
		{
			title: "Hizmetler",
			links: [
				"Akademik Eğitim",
				"Özel Dersler",
				"Grup Dersleri",
				"Online Eğitim",
			],
		},
		{
			title: "Kaynaklar",
			links: ["Blog", "Eğitim Materyalleri", "Başarı Hikayeleri", "SSS"],
		},
		{
			title: "Kurumsal",
			links: ["Hakkımızda", "Kariyer", "İletişim", "Gizlilik Politikası"],
		},
	];

	let isVisible = $state(false);
	import { onMount } from "svelte";
	onMount(() => {
		isVisible = true;
	});
	let { children } = $props();
</script>

<Toaster position="top-right" richColors />
<div class="w-dvw">
	<Header />
	<main>
		{@render children()}
	</main>
	<div class="relative">
		<svg
			width="1920"
			height="240"
			viewBox="0 0 1920 240"
			xmlns="http://www.w3.org/2000/svg"
			><path
				d="M1920,240C1633,263.1666666666667,289.6666666666667,258.1666666666667,0,240C-289.6666666666667,221.83333333333334,119.16666666666666,142,182,131C244.83333333333334,120,311.8333333333333,171.33333333333334,377,174C442.1666666666667,176.66666666666666,508,150,573,147C638,144,702.8333333333334,152.5,767,156C831.1666666666666,159.5,894,166.66666666666666,958,168C1022,169.33333333333334,1087.6666666666667,174.16666666666666,1151,164C1214.3333333333333,153.83333333333334,1275.3333333333333,102.5,1338,107C1400.6666666666667,111.5,1463,192,1527,191C1591,190,1656.5,92.83333333333333,1722,101C1787.5,109.16666666666667,2207,216.83333333333334,1920,240C1633,263.1666666666667,289.6666666666667,258.1666666666667,0,240"
				fill="var(--inverted)"
			/></svg
		>
	</div>

	<footer class="bg-inverted relative z-10">
		<div class="max-w-7xl mx-auto px-4 py-16">
			<div class="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
				<div class="space-y-6 col-span-1 lg:col-span-1">
					<div
						class={`transform transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<h1
							class=" text-4xl text-primary font-bold leading-tight"
						>
							PROJE Adımız
						</h1>
						<p class="text-sm text-bg leading-relaxed">
							Eğitimde mükemmelliği hedefleyen, akademide başarıyı
							hedefleyen bir grubuz.
						</p>
					</div>
				</div>

				<!-- Quick Links -->
				{#each footerLinks as section, i}
					<div
						class={`space-y-4 transform transition-all duration-700 delay-${i * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<h3 class="text-lg font-semibold text-white">
							{section.title}
						</h3>
						<ul class="space-y-2">
							{#each section.links as link}
								<li>
									<a
										href="/#"
										class="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
									>
										<ChevronRight
											class="w-4 h-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300"
										/>
										{link}
									</a>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<!-- Stats Section -->
			<div
				class={`grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-800 transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
			>
				{#each [{ icon: Users, stat: "5000+", label: "Öğrenci" }, { icon: GraduationCap, stat: "100+", label: "Eğitmen" }, { icon: Calendar, stat: "10+", label: "Yıllık Tecrübe" }, { icon: Rocket, stat: "95%", label: "Başarı Oranı" }] as item: { icon: any, stat, label }}
					<div
						class="flex flex-col items-center text-center space-y-2 group"
					>
						<!-- svelte-ignore svelte_component_deprecated -->
						<svelte:component
							this={item.icon}
							class="w-8 h-8 text-primary-soft group-hover:scale-110 transition-transform duration-300"
						/>
						<div class="text-2xl font-bold text-white">
							{item.stat}
						</div>
						<div class="text-sm text-gray-400">{item.label}</div>
					</div>
				{/each}
			</div>

			<!-- Bottom Section -->
			<div
				class={`mt-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transform transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
			>
				<div class="text-sm text-gray-400">
					© 2024 Yeralti. Tüm hakları saklıdır.
				</div>
				<div class="flex space-x-6">
					{#each [FacebookIcon, InstagramIcon, Youtube] as Icon}
						<a
							href="/#"
							class="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
						>
							<Icon class="w-6 h-6" />
						</a>
					{/each}
				</div>
			</div>
		</div>
	</footer>
</div>

<style>
	/* Add any additional styles here */
	:global(.delay-200) {
		animation-delay: 200ms;
	}
	:global(.delay-400) {
		animation-delay: 400ms;
	}
	:global(.delay-600) {
		animation-delay: 600ms;
	}
</style>
