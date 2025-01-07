import React from 'react';
import { Wallet } from '../types';
import { Wallet as WalletIcon, Copy, ChevronDown } from 'lucide-react';

interface WalletCardProps {
  wallet: Wallet;
  onCopyAddress: () => void;
}

export function WalletCard({ wallet, onCopyAddress }: WalletCardProps) {
  return (
    <div className="gradient-border">
      <div className="card-3d bg-gradient-to-br from-[#1a1b1f] to-[#2d2f36] rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center justify-between mb-8">
          <div className="floating">
            <WalletIcon className="w-10 h-10 text-orange-400" />
          </div>
          <button
            onClick={onCopyAddress}
            className="flex items-center gap-2 text-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-all transform hover:scale-105"
          >
            <span>{wallet.address.slice(0, 6)}...{wallet.address.slice(-4)}</span>
            <Copy className="w-4 h-4" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="transform transition-all hover:scale-105 space-y-1 bg-white/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/70">Bitcoin</p>
              <div className="flex items-center text-orange-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold">{wallet.balance.btc.toFixed(8)} BTC</p>
          </div>
          
          <div className="transform transition-all hover:scale-105 space-y-1 bg-white/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/70">Ethereum</p>
              <div className="flex items-center text-blue-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold">{wallet.balance.eth.toFixed(8)} ETH</p>
          </div>
          
          <div className="transform transition-all hover:scale-105 space-y-1 bg-white/5 p-4 rounded-xl">
            <div className="flex justify-between items-center">
              <p className="text-sm text-white/70">USDT</p>
              <div className="flex items-center text-green-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <p className="text-2xl font-bold">{wallet.balance.usdt.toFixed(2)} USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
}