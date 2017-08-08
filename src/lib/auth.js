const AUTH_URL = 'http://localhost:3000/auth';

export default {
  signup(user) {
    return fetch(`${AUTH_URL}/signup`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'content-type': 'application/json'
      }
    }).then(res => res.json());
  }
};
