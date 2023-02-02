<script lang="ts">
  import { hamburgerIsActive } from '@svelte/store/hamburger-is-active';

  const toggleHamburgerMenu = (): void => {
    hamburgerIsActive.set($hamburgerIsActive !== true);
    document.body.toggleAttribute('data-hamburger-is-active');
  };
</script>

<button class="hamburger" on:click={toggleHamburgerMenu}>
  <span />
  <span />
  <span />
</button>

<style lang="scss">
  @import '../../../css/1-settings/__settings.scss';

  $h-height: 40px; /* height of the wrapper */
  $h-width: 40px; /* width of the wrapper */
  $h-icon-width: 20px; /* width of the stripes */
  $h-icon-height: 2px; /* thickness of the stripes */
  $h-icon-space: 4px; /* space between the stripes */
  $h-icon-color: $color-black; /* color of the stripes */
  $h-icon-border-radius: 0; /* border-radius of the stripes */

  .hamburger {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .hamburger span {
    display: block;
    width: $h-icon-width;
    height: $h-icon-height;
    transform-origin: center;
    border-radius: $h-icon-border-radius;
    background-color: $h-icon-color;
    transition: all 0.2s ease;

    &:nth-child(1) {
      transform: translateY(-$h-icon-space);
    }

    &:nth-child(3) {
      transform: translateY($h-icon-space);
    }

    [data-hamburger-is-active] & {
      &:nth-child(1) {
        transform: translateY($h-icon-height) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:nth-child(3) {
        transform: translateY(-$h-icon-height) rotate(-45deg);
      }
    }
  }
</style>
