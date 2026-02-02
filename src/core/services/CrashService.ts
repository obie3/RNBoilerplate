import crashlytics from '@react-native-firebase/crashlytics';

export class CrashService {
  log(message: string) {
    crashlytics().log(message);
  }

  recordError(error: Error) {
    crashlytics().recordError(error);
  }

  setUser(id: string) {
    crashlytics().setUserId(id);
  }
}
