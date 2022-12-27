/// <reference types="svelte" />

export type BreakPointType = 'sm' | 'md' | 'lg' | 'xl' | 'hamburger';

export interface BreakPointConfigInterface {
  [key: BreakPointType]: number;
}

export interface TestHelperConfigInterface {
  [key: string]: boolean;
}

export interface HelperConfigInterface {
  [key: string]: any;
}

export type AppConfigType = {
  breakpoints?: BreakPointConfigInterface,
}

export type AppType = {
  config: AppConfigType;
  test: TestHelperConfigInterface,
  helper: HelperConfigInterface,
}

declare global {
  var app: AppType;

  interface Window {
    Bouncer: any;
  }
}
