import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

class UserService {

  private config = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'application/json',
    },
  };

  private apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }

  async checkUsernameExisted(username:String, userId: any): Promise<boolean> {
    try {
      var apiUrl = `${this.apiEndpoints.auth.user}/check-username-exists?username=${username}`;
      if (userId) {
        apiUrl += `&id=${userId}`;
      }
      const response = await axios.get(apiUrl, this.config);
      const usernameExists = response.data.exist;
      if (usernameExists) {
        return true;
      }
      return false;
    } catch (error: any) {
      return error.message;
    }
}

  async checkEmailExisted(email:String, userId: any): Promise<boolean> {
    try {
      var apiUrl = `${this.apiEndpoints.auth.user}/check-email-exists?email=${email}`;
      if (userId) {
        apiUrl += `&id=${userId}`;
      }
      const response = await axios.get(apiUrl, this.config);
      const emailExists = response.data.exist;
      if (emailExists) {
        return true;
      }
      return false;
    } catch (error: any) {
      return error.message;
    }
}

  getAllUsers(deleted:boolean, page:number, limit:number, sort:string, order: string): Promise<any> {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            'x-access-token': useUserStore().currentUser.accessToken || ''
          }
        };
        const apiUrl = `${this.apiEndpoints.auth.user}?deleted=${deleted}&page=${page}&limit=${limit}&sort=${sort}&order=${order}`;
        fetch(apiUrl, requestOptions)
          .then(response => {
            if (response.ok) {
              return response.json().then(data => resolve(data));
            } else {
              reject(`Error: ${response.status} - ${response.statusText}`);
            }
          })
          .catch(error => {
            reject(`Error: ${error.message}`);
          });
      });

    }
}

export default UserService;
