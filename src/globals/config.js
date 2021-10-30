const hostname = window.location.host;
const api = {
  //localhost: 'http://18.191.154.248:3001/',

  localhost: 'http://localhost:3001/',
  development: 'https://distributerhubackend.herokuapp.com/',
};

let apiBase = '';
if (
  hostname === 'localhost' ||
  hostname === '192.168.2.122' ||
  hostname == 'localhost:3000'
) {
  apiBase = api.localhost;
} else {
  apiBase = api.development;
}
export default apiBase;
