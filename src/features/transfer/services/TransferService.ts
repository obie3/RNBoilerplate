import { CrashService } from '@core/services/CrashService';
import { api } from '@core/api/apiClient';

const crash = new CrashService();

export class TransferService {
  async transfer(amount: number) {
    try {
      api.post('/transfer', {
        amount,
        transactionId: '888888',
      });
      // api call
    } catch (e) {
      crash.recordError(e as Error);
      throw e;
    }
  }
}
