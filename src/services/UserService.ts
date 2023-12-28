import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

class UserService {

  private config = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'multipart/form-data',
    },
  };

  private apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }

  async checkEmailExisted(email:String, userId: any): boolean {
    try {
      var apiUrl = `${this.apiEndpoints.auth.user}/check-email-exists?email=${email}`;
      if (userId) {
        apiUrl += `&userId=${userId}`;
      }
      const response = await axios.get(apiUrl, this.config);
      const emailExists = response.data.exist;
      if (emailExists) {
        return true;
      }
      return false;
    } catch (error) {
      return error.message;
    }
}

  deleteUser(userId: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${this.apiEndpoints.auth.user}/${userId}`;
      axios.delete(apiUrl, this.config).then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
      });
  }

  updateUser(userId: String, formData:FormData) : Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${this.apiEndpoints.auth.user}/${userId}`;
      axios.put(apiUrl, formData, this.config).then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
      });
  }

  getUser(userId: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': useUserStore().currentUser.accessToken
        }
      };
      const apiUrl = `${this.apiEndpoints.auth.user}/${userId}`;
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

  createUser(formData:FormData): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(this.apiEndpoints.auth.user, formData, this.config).then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
      });
    }

  getAllUsers(deleted:boolean, page:number, limit:number, sort:string, order: string): Promise<any> {
      return new Promise((resolve, reject) => {
        const requestOptions = {
          method: 'GET',
          headers: { 
            'Content-Type': 'application/json',
            'x-access-token': useUserStore().currentUser.accessToken
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
