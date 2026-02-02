import crashlytics from '@react-native-firebase/crashlytics';

export const registerGlobalErrorHandler = () => {
  const defaultHandler = ErrorUtils.getGlobalHandler();

  ErrorUtils.setGlobalHandler((error, isFatal) => {
    crashlytics().recordError(error);

    if (defaultHandler) {
      defaultHandler(error, isFatal);
    }
  });
};
