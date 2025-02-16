<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface CustomButtonAttributes extends HTMLButtonAttributes {
        noBorder?: boolean;
        href?: string;
    }

    let {
        children,
        type = "button",
        class: className,
        noBorder = false,
        href,
        ...rest
    }: CustomButtonAttributes = $props();
</script>

{#if href}
    <a
        {href}
        class={`${className} inline-flex font-medium justify-center rounded-lg px-3.5 py-2.5 text-sm relative
               transition-all duration-300 hover:bg-primary hover:text-bg before:absolute before:inset-0
               ${noBorder ? "" : "shadow bg-primary-soft"}
              hover:before:duration-1000`}
    >
        {@render children?.()}
    </a>
{:else}
    <button
        {type}
        {...rest}
        class={`${className} inline-flex font-medium justify-center rounded-lg px-3.5 py-2.5 text-sm relative
           transition-all duration-300 hover:bg-primary hover:text-bg before:absolute before:inset-0
           ${noBorder ? "" : "shadow bg-primary-soft text-bg"}
          hover:before:duration-1000`}
    >
        {@render children?.()}
    </button>
{/if}

<style>
    a:before,
    button:before {
        background-image: linear-gradient(
            45deg,
            transparent 25%,
            var(--primary-soft) 50%,
            transparent 75%,
            transparent 100%
        );
        background-size:
            250% 250%,
            100% 100%;
        background-position:
            200% 0,
            0 0;
        background-repeat: no-repeat;

        border-radius: inherit;
    }

    button:hover:before,
    a:hover:before {
        background-position:
            -100% 0,
            0 0;
        transition: background-position 1s ease;
    }
</style>
