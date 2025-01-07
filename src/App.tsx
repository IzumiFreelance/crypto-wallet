import React, { useState } from 'react';
import { WalletCard } from './components/WalletCard';
import { TransactionList } from './components/TransactionList';
import { SendForm } from './components/SendForm';
import { NetworkSelector } from './components/NetworkSelector';
import { Settings } from './components/Settings';
import { PriceChart } from './components/PriceChart';
import { AssetAllocation } from './components/AssetAllocation';
import { Activity, Settings2 } from 'lucide-react';
import type { Wallet, Transaction } from './types';

export default function App() {
  const [wallet] = useState<Wallet>({
    address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
    balance: {
      btc: 0.5432,
      eth: 4.321,
      usdt: 1234.56,
    },
    networks: ['Ethereum', 'Bitcoin', 'Polygon'],
    totalValueUSD: 156234.89
  });

  const [priceData] = useState([
    { price: 45000, timestamp: '2024-03-01' },
    { price: 47000, timestamp: '2024-03-02' },
    { price: 46500, timestamp: '2024-03-03' },
    { price: 48000, timestamp: '2024-03-04' },
    { price: 49000, timestamp: '2024-03-05' },
  ]);

  const [assets] = useState([
    { currency: 'BTC', value: 80000, color: '#f7931a' },
    { currency: 'ETH', value: 60000, color: '#627eea' },
    { currency: 'USDT', value: 16234.89, color: '#26a17b' },
  ]);

  const [activeNetwork, setActiveNetwork] = useState('Ethereum');
  const [showSettings, setShowSettings] = useState(false);

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      type: 'receive',
      amount: 0.1,
      currency: 'BTC',
      address: '0x123...789',
      timestamp: new Date('2024-03-10'),
      status: 'completed',
      network: 'Bitcoin',
      fee: 0.0001
    },
    {
      id: '2',
      type: 'send',
      amount: 0.05,
      currency: 'ETH',
      address: '0x456...012',
      timestamp: new Date('2024-03-09'),
      status: 'completed',
      network: 'Ethereum',
      fee: 0.002
    }
  ]);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(wallet.address);
    alert('Address copied to clipboard!');
  };

  const handleSend = (address: string, amount: number, currency: string) => {
    alert(`Sending ${amount} ${currency} to ${address} on ${activeNetwork}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0b0d] to-[#1a1b1f] text-white">
      <div className="max-w-6xl mx-auto p-6">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
            Crypto Wallet
          </h1>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 hover:bg-white/10 rounded-full transition-all"
            >
              <Settings2 className="w-6 h-6" />
            </button>
          </div>
        </header>

        <NetworkSelector 
          networks={wallet.networks} 
          activeNetwork={activeNetwork}
          onNetworkChange={setActiveNetwork}
        />
        
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <WalletCard 
              wallet={wallet} 
              onCopyAddress={handleCopyAddress}
              activeNetwork={activeNetwork}
            />
            <div className="grid gap-8 md:grid-cols-2">
              <PriceChart currency="BTC" data={priceData} />
              <AssetAllocation assets={assets} />
            </div>
            <SendForm 
              onSend={handleSend} 
              network={activeNetwork}
            />
          </div>
          
          <div className="space-y-8">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-5 h-5 text-orange-400" />
              <h2 className="text-xl font-semibold">Activity</h2>
            </div>
            <TransactionList 
              transactions={transactions.filter(tx => 
                !activeNetwork || tx.network === activeNetwork
              )} 
            />
          </div>
        </div>

        {showSettings && (
          <Settings onClose={() => setShowSettings(false)} />
        )}
      </div>
    </div>
  );
}