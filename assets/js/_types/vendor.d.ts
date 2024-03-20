declare module 'formbouncerjs';

declare module '*.svelte' {
  export { SvelteComponentDev as default } from 'svelte/internal';
}

declare namespace NodeJS {
  type Timeout = number;
  type Timer = number;
}
