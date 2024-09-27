export type BreakPointType = 'sm' | 'md' | 'lg' | 'xl' | 'hamburger';

export type BreakPointConfigInterface = Record<BreakPointType, number>;

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
