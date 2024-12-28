<script>
    import { goto } from "$app/navigation";
    import CrSharpButton from "$lib/components/CrSharpButton.svelte";
</script>

<main
    class="flex flex-col text-center items-center justify-center h-[70vh] mx-auto gap-8 max-w-4xl"
>
    <h1 class="text-6xl font-bold text-primary">404</h1>
    <p class="text-2xl">Çarabelli'den Mesaj</p>
    <p class=" text-soft whitespace-pre-line">
        Şimdi ise ben oturuyorum karşısında kinci bir aynanın{""}
        Bir elimde gökten buğulu bir sis kadar hafif inancım{""}
        Diğerinde ise geceyi saran saat yelkovanına bağlı hırsım{""}
    </p>
    <a href="/">
        <CrSharpButton>Beni Eve Götür</CrSharpButton>
    </a>
</main>
