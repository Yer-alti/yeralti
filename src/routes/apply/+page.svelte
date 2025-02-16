<script lang="ts">
	import { superForm } from "sveltekit-superforms/client";
	import Input from "$lib/components/Input.svelte";
	import toast, { Toaster } from "svelte-french-toast";
	import { zodClient } from "sveltekit-superforms/adapters";
	import { formSchema } from "$lib/schemas/index.js";
	import CrOutlineButton from "$lib/components/CrOutlineButton.svelte";
	import CrSharpButton from "$lib/components/CrSharpButton.svelte";

	let { data } = $props();

	const { form, errors, enhance } = superForm(data.form, {
		validators: zodClient(formSchema),
		onResult: (result) => {
			console.log(result.result.type);
			switch (result.result.type) {
				case "success":
					toast.success("Başvurunuz başarıyla alındı!");
					break;
				case "failure":
					toast.error(
						`Başvuruda bir sorun var, lütfen tekrar deneyiniz!`,
					);
					break;
			}
		},
		onError: (errors) => {
			toast.error("Başvuruda gerçekleştirilemedi, bize bildiriniz!");
		},
	});
</script>

<svelte:head>
	<title>Başvuru Formu | Robert Koleji Mentörlük</title>
	<meta
		name="description"
		content="Robert Koleji öğrencilerinden özel ders almak için başvuru formu"
	/>
</svelte:head>

<Toaster />
<div class=" py-12">
	<form
		method="POST"
		use:enhance
		class={`flex flex-col sm:flex-row sm:max-w-6xl mx-auto gap-6`}
	>
		<div
			class={`text-left sm:basis-2/5 h-fit min-h-[40rem] p-8 sticky top-24 flex flex-col justify-stretch`}
		>
			<div>
				<h1 class="text-5xl font-bold">
					<span class="block">Başvuru Formu</span>
					<span class="block text-primary mt-3 text-3xl"
						>Özel Ders Programı</span
					>
				</h1>
				<p class="mt-4 text-lg opacity-85">
					Sizinle tanışmak için sabırsızlanıyoruz, ulaşmak için
					soldaki formu doldurun!
				</p>
			</div>

			<div class="flex justify-left">
				<CrSharpButton type="submit">Başvuruyu Gönder!</CrSharpButton>
			</div>
		</div>

		<div class="shadow-lg flex-1 rounded-xl p-8 space-y-6">
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">Kişisel Bilgiler</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Input
						label="Ad"
						name="firstName"
						bind:value={$form.firstName}
						ariaInvalid={$errors.firstName ? "true" : undefined}
						error={$errors.firstName}
						required
					/>
					<Input
						label="Soyad"
						name="lastName"
						bind:value={$form.lastName}
						error={$errors.lastName}
						required
					/>
					<Input
						label="Email"
						type="email"
						name="email"
						bind:value={$form.email}
						error={$errors.email}
						required
					/>
					<Input
						label="Telefon"
						type="tel"
						name="phone"
						bind:value={$form.phone}
						error={$errors.phone}
						required
					/>
				</div>
			</div>

			<div class="space-y-4 pt-6 border-t">
				<h2 class="text-xl font-semibold">Eğitim Bilgileri</h2>
				<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
					<Input
						label="Okul"
						name="school"
						bind:value={$form.school}
						error={$errors.school}
						required
					/>
					<Input
						label="Sınıf"
						type="number"
						name="grade"
						bind:value={$form.grade}
						error={$errors.grade}
						required
					/>
				</div>
				<div class="space-y-2">
					<label for="subjects" class="block text-sm font-medium">
						İlgilendiğiniz Dersler
					</label>
					<select
						id="subjects"
						multiple
						name="subjects"
						bind:value={$form.subjects}
						class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary rounded-md"
					>
						<option value="matematik">Matematik</option>
						<option value="fen">Fen Bilimleri</option>
						<option value="turkce">Türkçe</option>
						<option value="sosyal">Sosyal Bilgiler</option>
					</select>
					{#if $errors.subjects}
						<p class="text-red-500 text-sm">
							{Array.isArray($errors.subjects)
								? $errors.subjects[0]
								: $errors.subjects}
						</p>
					{/if}
				</div>
			</div>

			<div class="space-y-4 pt-6 border-t">
				<h2 class="text-xl font-semibold">Ek Bilgiler</h2>
				<div class="space-y-2">
					<label for="message" class="block text-sm font-medium">
						Mesajınız
					</label>
					<!-- svelte-ignore element_invalid_self_closing_tag -->
					<textarea
						id="message"
						name="message"
						bind:value={$form.message}
						rows="4"
						class="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
					/>
					{#if $errors.message}
						<p class="text-red-500 text-sm">
							{$errors.message}
						</p>
					{/if}
				</div>
			</div>
		</div>
	</form>
</div>
