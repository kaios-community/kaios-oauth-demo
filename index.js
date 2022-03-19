document.querySelector('#btnLogin').addEventListener('click', () => {
  const windowRef = window.open(
    'https://foxcasts-dev.us.auth0.com/authorize?response_type=token&client_id=uY3OFjoG97aEZtOrZpd3FLxP1KgM7Iax&audience=com.foxcasts.api&redirect_uri=http://com.garredow.kaios-oauth-example/oauth'
  );
  windowRef.addEventListener('tokens', (ev) => console.log('got tokens', ev.detail));
});
