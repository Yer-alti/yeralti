<script lang="ts">
    import type { HTMLButtonAttributes } from "svelte/elements";

    interface CustomButtonAttributes extends HTMLButtonAttributes {
        noBorder?: boolean;
    }

    let {
        children,
        type = "button",
        class: className,
        noBorder = false,
        ...rest
    }: CustomButtonAttributes = $props();
</script>

<button
    {type}
    {...rest}
    class={`${className} inline-flex font-medium justify-center rounded-lg px-3.5 py-2.5 text-sm relative
           transition-all duration-300 hover:bg-primary hover:text-bg before:absolute before:inset-0
           ${noBorder ? "" : "shadow"}
          hover:before:duration-1000`}
>
    {@render children?.()}
</button>

<style>
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

    button:hover:before {
        background-position:
            -100% 0,
            0 0;
        transition: background-position 1s ease;
    }
</style>
