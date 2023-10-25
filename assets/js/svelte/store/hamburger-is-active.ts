import { writable, type Writable } from 'svelte/store';

export const hamburgerIsActive: Writable<boolean> = writable(false);
