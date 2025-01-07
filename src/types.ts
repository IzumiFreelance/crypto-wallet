export interface Transaction {
  id: string;
  type: 'send' | 'receive';
  amount: number;
  currency: string;
  address: string;
  timestamp: Date;
  status: 'pending' | 'completed' | 'failed';
  network?: string;
  fee?: number;
}

export interface Wallet {
  address: string;
  balance: {
    btc: number;
    eth: number;
    usdt: number;
  };
  networks: string[];
  totalValueUSD: number;
}