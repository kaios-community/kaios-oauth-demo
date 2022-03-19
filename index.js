// Auth0 demo
document.querySelector('#btnAuth0').addEventListener('click', () => {
  const url = new URL('https://foxcasts-dev.us.auth0.com/authorize');
  url.searchParams.append('response_type', 'token');
  url.searchParams.append('client_id', 'uY3OFjoG97aEZtOrZpd3FLxP1KgM7Iax');
  url.searchParams.append('audience', 'com.foxcasts.api');
  url.searchParams.append('redirect_uri', 'https://com.garredow.kaios-oauth-demo/auth0');

  const windowRef = window.open(url.toString());
  windowRef.addEventListener('tokens', (ev) => console.log('got tokens', ev.detail));
});

// OpenStreetMap demo
document.querySelector('#btnOpenStreetMap').addEventListener('click', () => {
  const url = new URL('https://www.openstreetmap.org/oauth2/authorize');
  url.searchParams.append('response_type', 'code');
  url.searchParams.append('client_id', 'WVt0xgaGY6DfLNyARhYqiURd_dqhI09twcJGzv4rln8');
  url.searchParams.append('redirect_uri', 'https://com.garredow.kaios-oauth-demo/openstreetmap');
  url.searchParams.append('scope', 'read_prefs');

  const windowRef = window.open(url.toString());
  windowRef.addEventListener('tokens', (ev) => console.log('got tokens', ev.detail));
});
