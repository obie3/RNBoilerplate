import crashlytics from '@react-native-firebase/crashlytics';
import messaging from '@react-native-firebase/messaging';
import appCheck from '@react-native-firebase/app-check';

export const initFirebase = async () => {
  // Crashlytics collection
  crashlytics().setCrashlyticsCollectionEnabled(true);

  // App Check
  await appCheck().activate(
    __DEV__ ? 'debug' : 'playIntegrity', // android
    __DEV__ ? 'debug' : 'deviceCheck', // ios
  );

  // FCM permission
  await messaging().requestPermission();
};
