const API_BASE_URL = 'http://localhost:8080';

const apiEndpoints = {
  base:`${API_BASE_URL}/`,
  auth: {
    signIn: `${API_BASE_URL}/api/auth/signin`,
    user: `${API_BASE_URL}/api/users`,
    role: `${API_BASE_URL}/api/roles`,
  },
  view: {
    doc_list: `${API_BASE_URL}/api`,
  }
  // Add more modules for different parts of your application
} as const;

export type ApiEndpoints = typeof apiEndpoints;

export default apiEndpoints;