<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  export let source;
  export let type;

  const sourceHTML = document.querySelector(source);
  let visible = false;

  /**
   * Stop scrolling on body when open
   */
  const checkBodyScroll = (): void => {
    document.body.style.overflow = visible ? 'hidden' : 'inherit';
  };

  /**
   * Handle key down and close overlay when press Escape
   * @param e
   */
  const handleKeydown = (e: KeyboardEvent): void => {
    if (!visible) {
      return;
    }

    if (e.key === 'Escape') {
      visible = false;
    }
  };

  onMount((): void => {
    if (!sourceHTML) {
      return;
    }

    visible = true;
  });

  $: checkBodyScroll();
</script>

<svelte:window on:keydown={handleKeydown} />
{#if visible}
  <div class="popup {type ? `popup--${type}` : ''}" transition:fade>
    <div
      class="popup-background"
      on:click|stopPropagation={() => {
        visible = false;
      }}
      on:keydown={handleKeydown} />
    <div class="popup-content" transition:fade={{ delay: 200, duration: 100 }}>
      <button
        class="popup-close"
        type="button"
        on:click={() => {
          visible = false;
        }}>
        <span>x</span>
      </button>
      {@html sourceHTML.innerHTML}
    </div>
  </div>
{/if}

<style lang="scss">
  @import '../../../css/1-settings/__settings.scss';

  .popup,
  .popup-background {
    box-sizing: border-box;
    display: grid;
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .popup {
    overflow: auto;
  }

  .popup--small {
    padding: 16px;
  }

  .popup-background {
    background: rgba($color-black, 0.3);
  }

  .popup-content {
    box-sizing: border-box;
    z-index: 10;
    position: relative;
    width: 100%;
    height: 100%;
    margin: auto;
    padding: 40px 24px;
    background: $color-white;
    pointer-events: auto;

    .popup--small & {
      max-width: 640px;
      height: auto;
    }
  }

  .popup-close {
    display: flex;
    position: absolute;
    top: 16px;
    right: 16px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    text-indent: -9999em;

    &:hover,
    &:focus {
      background: rgba($color-black, 0.05);
    }

    &:before,
    &:after {
      width: 20px;
      height: 2px;
      transform-origin: center;
      background-color: $color-black;
      content: '';
    }

    &:before {
      transform: translateY(1px) rotate(45deg);
    }

    &:after {
      transform: translateY(-1px) rotate(-45deg);
    }
  }

  .popup-close span {
    position: absolute;
    left: -9999em;
  }

  .popup__template {
    display: none;
  }
</style>
