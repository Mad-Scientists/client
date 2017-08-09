const BASE_URL = window.location.hostname === 'localhost' ? 'http://localhost:3000' : 'https://api.bestie.chat';
const AUTH_URL = `${BASE_URL}/auth`;

function setToken(result) {
  localStorage.token = result.token;
}

let currentUser = null;

export default {
  getCurrentUser() {
    const localStorageToken = localStorage.getItem('token');

    if (localStorageToken && this.currentToken !== localStorageToken) {
      this.currentToken = localStorageToken;
      const payload = localStorage.getItem('token').split('.')[1].replace('-', '+').replace('_', '/');
      currentUser = JSON.parse(atob(payload));
      return currentUser;
    } else if (!localStorageToken) {
      return null;
    }

    return currentUser;
  },
  signup(user) {
    return fetch(`${AUTH_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(setToken);
  },
  login(user) {
    return fetch(`${AUTH_URL}/login`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json())
    .then(setToken);
  }
};
