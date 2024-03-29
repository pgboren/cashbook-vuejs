import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import {BaseService} from './BaseService';
import axios from 'axios';

class DocumentService extends BaseService {

  async update(endPoint: string, id: string, formData:any) : Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${endPoint}/${id}`;
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

  async getAll(endpoint: string, keyword: string, deleted:boolean, page:number, limit:number, sort:string, order: string) {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': useUserStore().currentUser.accessToken || ''
        }
      };
      const apiUrl = `${endpoint}?deleted=${deleted}&page=${page}&limit=${limit}&sort=${sort}&order=${order}&keyword=${keyword}`;

      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
  }

  async delete(api_end_point:string, docId: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${api_end_point }/${docId}`;
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

  add(url: string, formData:any): Promise<any> {

    return new Promise((resolve, reject) => {
      axios.post(url, formData, this.config).then(response => {
        if (response.status === 201) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
    });
  }
    

  async get(endPoint:string, id: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': useUserStore().currentUser.accessToken|| '' // or any default string value
        }
      };
      const apiUrl = `${endPoint}/${id}`;
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

export default DocumentService;