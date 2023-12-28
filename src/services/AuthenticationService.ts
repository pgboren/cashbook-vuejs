import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';

class AuthenticationService {

  private apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }

 login(username:string, pass: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: pass })
    };

    fetch(this.apiEndpoints.auth.signIn, requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json().then(data => resolve(data));
        } else {
          reject(`Error: ${response.status} - ${response.statusText}`);
        }
      })
      .catch(error => {
        // Handle any other network or parsing errors
        reject(`Error: ${error.message}`);
      });
  });

  }
}

export default AuthenticationService;
