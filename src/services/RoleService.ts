import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

class RoleService {

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

  getAll(): Promise<any> {      
    return new Promise((resolve, reject) => {
      const apiUrl = `${this.apiEndpoints.auth.role}`;
      axios.get(apiUrl, this.config).then(response => {
        if (response.status === 200) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
      });       
    }
}

export default RoleService;
