import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import {BaseService} from './BaseService';
import axios from 'axios';

class DocumentService extends BaseService {

  async getAll(docname: string, keyword: string, deleted:boolean, page:number, limit:number, sort:string, order: string) {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': useUserStore().currentUser.accessToken
        }
      };
      const apiUrl = `${this.apiEndpoints.view.doc_list}/users?deleted=${deleted}&page=${page}&limit=${limit}&sort=${sort}&order=${order}&keyword=${keyword}`;

      const response = await fetch(apiUrl, requestOptions);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      return response.json();
  }

  async delete(docId: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = `${this.apiEndpoints.auth.user}/${docId}`;
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

  add(formData:any): Promise<any> {
    return new Promise((resolve, reject) => {
      axios.post(this.apiEndpoints.auth.user, formData, this.config).then(response => {
        if (response.status === 201) {
          return response.data;
        } else {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
      }).then(data => resolve(data))
        .catch(error => reject(`Error: ${error.message}`));
      });
    }

  async get(docId: String) : Promise<any> {
    return new Promise((resolve, reject) => {
      const requestOptions = {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          'x-access-token': useUserStore().currentUser.accessToken
        }
      };
      const apiUrl = `${this.apiEndpoints.auth.user}/${docId}`;
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