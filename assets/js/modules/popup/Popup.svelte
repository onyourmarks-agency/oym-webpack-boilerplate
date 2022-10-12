<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  export let source;
  export let type;

  const sourceHTML = document.querySelector(source);
  let visible = false;

  /**
   * Stop scrolling on body when open
   */
  const checkBodyScroll = () => {
    document.body.style.overflow = visible ? 'hidden' : 'inherit';
  };

  /**
   * Handle key down and close overlay when press Escape
   * @param e
   */
  const handleKeydown = (e) => {
    if (!visible) {
      return;
    }

    if (e.key === 'Escape') {
      visible = false;
    }
  };

  onMount(() => {
    if (!sourceHTML) {
      return;
    }

    visible = true;
  });

  $: checkBodyScroll(visible);
</script>

<svelte:window on:keydown={handleKeydown} />
{#if visible}
  <div class="popup {type ? `popup--${type}` : ''}" transition:fade>
    <div
      class="popup-background"
      on:click|stopPropagation={() => {
        visible = false;
      }}
      on:keydown={handleKeydown}
    />
    <div class="popup-content" transition:fade={{ delay: 200, in: 50, out: 50 }}>
      <button
        class="popup-close"
        type="button"
        on:click={() => {
          visible = false;
        }}
	  >x</button>
      {@html sourceHTML.innerHTML}
    </div>
  </div>
{/if}
