const removeCookie = (name: string): void => {
  if (!name) {
    return;
  }

  document.cookie = `${name} =; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
};

export default removeCookie;
