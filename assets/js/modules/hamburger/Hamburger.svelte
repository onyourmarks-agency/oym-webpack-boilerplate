<div class="hamburger" on:click={toggleHamburgerMenu}>
	<span></span>
	<span></span>
	<span></span>
</div>

<script>
  import { menuIsActive } from '../../svelte-store/menu-is-active';

  const toggleHamburgerMenu = () => {
    menuIsActive.set($menuIsActive !== true);
    document.body.toggleAttribute('menu-is-active');
  }
</script>
