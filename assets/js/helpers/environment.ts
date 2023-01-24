export enum ENVIRONMENT {
  DEVELOPMENT,
  STAGING,
  PRODUCTION,
}

export const getEnvironment = () => {
  if (window.location.host.indexOf('.tdev.team') > -1) {
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
