import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';
import { useUserStore } from '@/stores/user';

export class BaseService {

  protected config = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'application/json; charset=utf-8',
    },
  };

  protected config_formdata = {
    headers: {
      'x-access-token': useUserStore().currentUser.accessToken,
      'Content-Type': 'multipart/form-data',
    },
  };

  protected apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }
  
}