import { createBrowserHistory } from 'history';

const hostname = window.location.hostname;

const base = {
  localhost: '/',
  platform: '/',
};

let basename = '';
if (hostname === 'localhost' || hostname === '192.168.2.228') {
  basename = base.localhost;
} else {
  basename = base.platform;
}
export default createBrowserHistory({ basename: basename });
