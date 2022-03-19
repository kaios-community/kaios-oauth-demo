function getToken() {
  // This doesn't work in KaiOS
  // const code = new URLSearchParams(location.search).get('code');
  const code = location.search.split('?code=')[1];

  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  var urlencoded = new URLSearchParams();
  urlencoded.append('code', code);
  urlencoded.append('grant_type', 'authorization_code');
  urlencoded.append('redirect_uri', 'https://com.garredow.kaios-oauth-demo/openstreetmap');
  urlencoded.append('client_id', 'WVt0xgaGY6DfLNyARhYqiURd_dqhI09twcJGzv4rln8');

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  return fetch('https://www.openstreetmap.org/oauth2/token', requestOptions).then((response) =>
    response.json()
  );
}

getToken().then((result) => {
  window.dispatchEvent(
    new CustomEvent('tokens', {
      detail: result,
    })
  );

  window.close();
});
