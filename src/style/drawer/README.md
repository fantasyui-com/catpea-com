# Drawer Component

## Notes

- ```.drawer-closed``` must be applied to .drawer-body
- ```.drawer-title``` should have the on click event
- you can use any icon you like, example shown with octicons

## HTML Overview

```html

<div class="drawer">
  <div class="drawer-title">
    <span class="drawer-label">Hello World</span>
    <span class="drawer-toggle">
      <svg width="256" height="256" class="octicon octicon-primitive-square" viewBox="0 0 8 16" version="1.1" aria-hidden="true"><path fill-rule="evenodd" d="M8 12H0V4h8v8z"></path></svg>
    </span>
  </div>
  <div class="drawer-body small text-info">
    Hello World.
  </div>
</div>

```

## Svelte Example

```html

<div class="drawer">
  <div class="drawer-title" on:click={()=>showLineProperties=!showLineProperties}>
    <span class="drawer-label">Presets</span>
    <span class="drawer-toggle">
      {#if showHelp}
      {@html octicons['fold-up'].toSVG({ "class": "fill-warning" })}
      {:else}
      {@html octicons['fold-down'].toSVG({ "class": "fill-warning" })}
      {/if}
    </span>
  </div>
  <div class="drawer-body small text-info " class:collapsed={!showLineProperties}>
    {#each presets as item, index}
     <div  class="cursor-pointer mb-2 bg-hover-dark px-1" on:click={()=>loadPresetByIndex(index)}>
       <span class="">{item.name}</span>
       <span class="text-muted">{item.bpm}BPM {item.parts}/{item.beats}</span>
     </div>
   {/each}
  </div>
</div>

```
