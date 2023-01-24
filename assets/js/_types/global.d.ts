export type BreakPointType = 'sm' | 'md' | 'lg' | 'xl' | 'hamburger';

export interface BreakPointConfigInterface {
  [key: BreakPointType]: number;
}

export interface HelperConfigInterface {
  [key: string]: any;
}

export type AppConfigType = {
  breakpoints?: BreakPointConfigInterface;
};

export type AppType = {
  config: AppConfigType;
  storage: {
    local: Storage;
    session: Storage;
  };
};

declare global {
  var app: AppType;

  interface Window {
    Bouncer: any;
  }
}
