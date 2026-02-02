import { api } from '@core/api/apiClient';
import { KeychainStorage } from '@core/storage/KeychainStorage';

const storage = new KeychainStorage();

export class AuthService {
  async login(email: string, password: string) {
    const res = await api.post('/login', { email, password });
    await storage.set('access', res.data.accessToken);
    await storage.set('refresh', res.data.refreshToken);
    return res.data;
  }

  async getAccessToken() {
    return storage.get('access');
  }

  async logout() {
    await storage.remove('access');
    await storage.remove('refresh');
  }
}
