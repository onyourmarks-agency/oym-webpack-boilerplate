export const ENVIRONMENT = {
  DEVELOPMENT: 'development',
  STAGING: 'staging',
  PRODUCTION: 'production',
} as const;

type ObjectValues<T> = T[keyof T];
type Environment = ObjectValues<typeof ENVIRONMENT>;

export const getEnvironment = (): Environment => {
  if (
    window.location.host.indexOf('.tdev.team') > -1 ||
    window.location.host.indexOf('.dev.onyourmarks.tech') > -1 ||
    window.location.host.indexOf('.local') > -1
  ) {
    return ENVIRONMENT.DEVELOPMENT;
  }

  if (
    window.location.host.indexOf('.tdebv.nl') > -1 ||
    window.location.host.indexOf('staging') > -1
  ) {
    return ENVIRONMENT.STAGING;
  }

  return ENVIRONMENT.PRODUCTION;
};
