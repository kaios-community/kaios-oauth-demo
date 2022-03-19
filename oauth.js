const result = {};
location.hash
  .slice(1)
  .split('&')
  .forEach((item) => {
    const [key, val] = item.split('=');
    result[key] = val;
  }, {});

window.dispatchEvent(
  new CustomEvent('tokens', {
    detail: result,
  })
);

window.close();
