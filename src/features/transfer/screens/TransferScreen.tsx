import React from 'react';
import { View, Button, ActivityIndicator, Alert } from 'react-native';
import { useTransfer } from '../hooks/useTransfer';

export const TransferScreen = () => {
  const { mutate, isPending } = useTransfer();

  const sendMoney = () => {
    mutate(5000, {
      onSuccess: () => Alert.alert('Success', 'Transfer complete'),
      onError: () => Alert.alert('Error', 'Transfer failed'),
    });
  };

  return (
    <View>
      {isPending && <ActivityIndicator />}
      <Button title="Send ₦5000" onPress={sendMoney} />
    </View>
  );
};
