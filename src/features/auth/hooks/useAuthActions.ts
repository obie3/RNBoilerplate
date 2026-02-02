import { useAuth } from '../context/AuthContext';
import { AuthService } from '../services/AuthService';

const service = new AuthService();

export const useAuthActions = () => {
  const { setUser } = useAuth();

  const login = async (email: string, password: string) => {
    const user = await service.login(email, password);
    setUser(user);
  };

  const logout = async () => {
    await service.logout();
    setUser(null);
  };

  return { login, logout };
};
