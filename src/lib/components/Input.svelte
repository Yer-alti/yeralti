<script lang="ts">
    export let label: string;
    export let name: string;
    export let value: any;
    export let error: string | string[] | any | undefined = undefined;
    export let type: string = "text";
    export let ariaInvalid: any = undefined;
    export let required: boolean = false;
</script>

<div class="space-y-2">
    <label for={name} class="block text-sm font-medium text-gray-700">
        {label}
        {#if required}
            <span class="text-red-500">*</span>
        {/if}
    </label>
    <input
        {type}
        {name}
        aria-invalid={ariaInvalid}
        id={name}
        bind:value
        class="mt-1 block w-full border-gray-300 rounded-md shadow-sm
        focus:ring-primary focus:border-primary
        {error ? 'border-red-500' : 'border-gray-300'}"
    />
    {#if error}
        <p class="text-red-500 text-sm">{error}</p>
    {/if}
</div>
