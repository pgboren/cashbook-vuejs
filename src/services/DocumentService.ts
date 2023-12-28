import { ref } from 'vue';
import type { ApiEndpoints } from '@/config/config';

class DocumentService {

  private apiEndpoints: ApiEndpoints;

  constructor(apiEndpoints: ApiEndpoints) {
    this.apiEndpoints = apiEndpoints;
  }
 
}

export default DocumentService;
