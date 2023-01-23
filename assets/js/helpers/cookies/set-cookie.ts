const setCookie = (name: string, value: string, days?: number, url?: string): void => {
  if (!name || !value) {
    return;
  }

  let expires;
  let domain;

  if (days) {
    const date = new Date();

    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  } else {
    expires = '';
  }

  if (url) {
    domain = `; domain=${url}`;
  } else {
    domain = '';
  }

  document.cookie = `${name}=${value}${expires}; path=/${domain}`;
};

export default setCookie;
