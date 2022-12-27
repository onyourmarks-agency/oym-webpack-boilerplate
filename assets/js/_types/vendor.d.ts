declare module 'formbouncerjs';

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}
