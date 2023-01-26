import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

export const hamburgerIsActive = writable(false) as Writable<boolean>;
