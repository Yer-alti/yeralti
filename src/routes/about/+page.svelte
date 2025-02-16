<script lang="ts">
	import { onMount } from "svelte";
	import { GraduationCap, Users, Target, BookOpen } from "lucide-svelte";

	let isVisible = false;
	onMount(() => {
		isVisible = true;
	});

	const team = [
		{
			role: "Lal",
			experience: "Bilmem ne bilmem ne",
			description:
				"Robert Koleji'nde matematik kulübü başkanı ve mentor öğrenci.",
		},
		{
			role: "Diğer Arkadaş",
			experience: "LGS de 1.ci",
			description:
				"Bilim olimpiyatlarında başarılı, laboratuvar asistanı.",
		},
	];
</script>

<svelte:head>
	<title>Hakkımızda</title>
	<meta name="description" content="Yeraltı Hakkında" />
</svelte:head>

<div class="min-h-screen pt-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-24">
		<div
			class={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
		>
			<h1 class="text-4xl font-bold sm:text-5xl md:text-6xl">
				<span class="block">Robert Koleji'nden</span>
				<span class="block text-primary mt-3">Geleceğe Rehberlik</span>
			</h1>
			<p class="mt-6 max-w-lg mx-auto text-xl opacity-85 sm:max-w-3xl">
				Biz, Robert Koleji öğrencileri olarak edindiğimiz deneyimi ve
				başarı yolculuğumuzu sizlerle paylaşıyoruz.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
			{#each [{ icon: GraduationCap, title: "Deneyimli Mentorlar", description: "Robert Koleji'nin başarılı öğrencilerinden oluşan ekip" }, { icon: Users, title: "Birebir İlgi", description: "Her öğrenciye özel yaklaşım ve destek" }, { icon: Target, title: "Hedef Odaklı", description: "Sınav başarısı için stratejik hazırlık" }, { icon: BookOpen, title: "Kapsamlı Eğitim", description: "Tüm dersler için profesyonel destek" }] as { icon, title, description }, i}
				<div
					class={`flex flex-col hover:translate-y-2 items-center p-6  rounded-lg shadow-lg transform transition-all duration-700 delay-${i * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
				>
					<svelte:component
						this={icon}
						class="w-12 h-12 text-primary mb-4"
					/>
					<h3 class="text-lg font-semibold mb-2">{title}</h3>
					<p class="text-gray-600 text-center">{description}</p>
				</div>
			{/each}
		</div>
		<div class="">
			<h2 class="text-3xl font-bold text-center mb-12">
				Mentor Ekibimiz
			</h2>
			<div class="flex gap-8 justify-center">
				{#each team as { role, experience, description }, i}
					<div
						class={` p-6 flex-1 hover:translate-y-2 max-w-sm rounded-lg shadow-lg transform transition-all duration-700 delay-${i * 200} ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
					>
						<h3 class="text-xl font-semibold text-primary mb-2">
							{role}
						</h3>

						<p class="text-sm opacity-85 mb-4">{experience}</p>
						<p class="">{description}</p>
					</div>
				{/each}
			</div>
		</div>

		<div
			class={` text-center transform transition-all duration-1000 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
		>
			<h2 class="text-3xl font-bold mb-6">
				Başarı Yolculuğuna Başlamaya Hazır mısın?
			</h2>
			<a href="/apply">
				<button
					class="rounded-xl px-8 mt-10 py-3 text-base font-semibold text-bg bg-primary hover:bg-primary-soft
					transition-all duration-300 shadow-sm hover:shadow-pop hover:-translate-y-2"
				>
					Ücretsiz Danışmanlık Al
				</button>
			</a>
		</div>
	</div>
</div>

<style>
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
