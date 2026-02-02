import { useMutation } from '@tanstack/react-query';
import { TransferService } from '../services/TransferService';

const service = new TransferService();

export const useTransfer = () =>
  useMutation({
    mutationFn: (amount: number) => service.transfer(amount),
  });
