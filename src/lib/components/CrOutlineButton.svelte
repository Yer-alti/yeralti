<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface CustomButtonAttributes extends HTMLButtonAttributes {
        name?: string;
        url?: string;
    }
    let { name, url, ...rest }: CustomButtonAttributes = $props();

    function handleClick() {
        if (url) {
            window.location.href = url;
        }
    }
</script>

<button
    onclick={handleClick}
    {...rest}
    class="rounded-full px-8 py-3 text-base font-semibold text-primary-soft border border-primary hover:bg-primary
						 transition-all duration-300 hover:text-bg"
>
    {name}
</button>
