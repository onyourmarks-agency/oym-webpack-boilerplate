export type SameSiteType = 'Lax' | 'Strict' | 'None' | null;

export const getCookie = (name: string): string | null => {
  const escapedCookieName = name.replace(/([.*+?^$(){}|[\]/\\])/g, '\\$1');

  const matchedCookie = document.cookie.match(RegExp(`(?:^|;\\s*)${escapedCookieName}=([^;]*)`));

  return matchedCookie ? matchedCookie[1] : null;
};

export const setCookie = (
  name: string,
  value: string,
  maxAge?: number,
  url?: string,
  path?: string,
  sameSite?: SameSiteType
): void => {
  const cookieProperties = {
    [name]: value,
    'Max-Age': maxAge || null,
    Path: path || '/',
    Domain: url || null,
    Secure: '',
    SameSite: sameSite || 'Lax',
  };

  document.cookie = Object.keys(cookieProperties)
    .map((key) => {
      const cookiePropertValue = cookieProperties[key];
      if (cookiePropertValue === null) {
        return '';
      }

      return `${key}${cookiePropertValue ? `=${cookiePropertValue}` : ''}`;
    })
    .filter((filterValue) => filterValue !== '')
    .join('; ');
};

export const removeCookie = (name: string): void => {
  setCookie(name, '', -1);
};

export default getCookie;
