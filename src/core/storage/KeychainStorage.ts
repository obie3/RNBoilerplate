import * as Keychain from 'react-native-keychain';
import { SecureStorage } from './SecureStorage';

export class KeychainStorage implements SecureStorage {
  async set(key: string, value: string) {
    await Keychain.setGenericPassword(key, value, { service: key });
  }

  async get(key: string) {
    const res = await Keychain.getGenericPassword({ service: key });
    return res ? res.password : null;
  }

  async remove(key: string) {
    await Keychain.resetGenericPassword({ service: key });
  }
}
