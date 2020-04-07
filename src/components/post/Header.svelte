<script>

import Icon from '../../controls/Icon.svelte';

export let icon = "info";
export let title = "";
export let date = "";

</script>

{#if icon}<span class="align-text-bottom shake pr-2"><Icon name={icon}/></span>{/if}
{#if title}<span class="align-middle pr-2">{title}</span>{/if}
{#if date}<span class="align-middle badge badge-secondary">{date}</span>{/if}
