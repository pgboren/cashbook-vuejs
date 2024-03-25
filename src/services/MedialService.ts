import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';
import axios from 'axios';

class MediaService {

  private config = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'application/json',
    },
  };

  private fordata_config = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'multipart/form-data',
    },
  };

  private apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }

  upload(file:File, folder: string, subFolder: string, docName: string, docField: string, docId: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const apiUrl = this.apiEndpoints.auth.media + `?folder=${folder}&sub_folder=${subFolder}&attach_document_name=${docName}&attach_document_field=${docField}&attach_document_id=${docId}`;
      const formData: FormData = new FormData();
      formData.append('file', file);
      axios.post(apiUrl, formData, this.fordata_config).then(response => {
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

export default MediaService;
