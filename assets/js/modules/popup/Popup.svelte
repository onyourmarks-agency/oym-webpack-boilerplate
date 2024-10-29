<script lang="ts">
  /* eslint svelte/no-at-html-tags: "off" */
  import { onDestroy, onMount, tick } from 'svelte';
  import { fade } from 'svelte/transition';
  import { translate } from '@translations/index';
  import createDOMPurify from 'dompurify';

  const { source, type }: { source: string; type: string | boolean } = $props();

  const sourceHTML = document.querySelector(source);
  const DOMPurify = createDOMPurify(window);

  let visible = $state(false);
  let popupElement: HTMLElement | null = $state(null);
  let lastFocus: HTMLElement | null;

  /**
   * Prevent body scroll when the popup is open
   */
  const checkBodyScroll = (): void => {
    document.body.style.overflow = visible ? 'hidden' : 'inherit';
  };

  /**
   * Focus content on opening, focus on the last focused element when the popup is closed
   */
  const handleFocus = (): void => {
    if (visible) {
      lastFocus = document.activeElement as HTMLElement | null;

      if (popupElement) {
        popupElement.setAttribute('tabindex', '0');
        popupElement.focus();
      }

      return;
    }

    if (lastFocus) {
      lastFocus.focus();
    }
  };

  /**
   * Close the popup when the escape key is pressed
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

    window.addEventListener('keydown', handleKeydown);
  });

  onDestroy((): void => {
    window.removeEventListener('keydown', handleKeydown);
  });

  $effect(() => {
    (async (): Promise<void> => {
      await tick();
      handleFocus();
      checkBodyScroll();
    })();
  });
</script>

{#if visible}
  <div
    role="dialog"
    class="popup {type ? `popup--${type}` : ''}"
    bind:this={popupElement}
    transition:fade|global>
    <div
      class="popup-background"
      role="button"
      tabindex="-1"
      onclick={(e) => {
        e.stopPropagation();
        visible = false;
      }}
      onkeydown={handleKeydown}>
    </div>
    <div class="popup-content" transition:fade|global={{ delay: 200, duration: 100 }}>
      <button
        aria-label={translate('popup.closebutton.a11y.aria')}
        class="popup-close"
        type="button"
        onclick={() => {
          visible = false;
        }}>
        <span>x</span>
      </button>

      {@html DOMPurify.sanitize(sourceHTML?.innerHTML || '')}
      <button
        class="sr-only-focusable"
        type="button"
        onclick={() => {
          visible = false;
        }}>
        <span>{translate('popup.closebutton.a11y.sronly')}</span>
      </button>
    </div>
  </div>
{/if}

<style lang="scss">
  @use '../../../css/1-settings' as *;

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

  .popup:focus {
    outline: none;
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
