import React, { useState } from 'react';
import { Send, ArrowRight } from 'lucide-react';

interface SendFormProps {
  onSend: (address: string, amount: number, currency: string) => void;
}

export function SendForm({ onSend }: SendFormProps) {
  const [address, setAddress] = useState('');
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('BTC');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (address && amount) {
      onSend(address, parseFloat(amount), currency);
      setAddress('');
      setAmount('');
    }
  };

  return (
    <div className="bg-[#1a1b1f] rounded-2xl p-6 text-white shadow-xl transform transition-all hover:scale-[1.02]">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-3 mb-6">
          <Send className="w-6 h-6 text-orange-400" />
          <h2 className="text-xl font-semibold">Send Crypto</h2>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-white/70">
            Recipient Address
          </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-white/30 transition-all"
            placeholder="Enter wallet address"
            required
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1 space-y-2">
            <label className="block text-sm font-medium text-white/70">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white placeholder-white/30 transition-all"
              placeholder="0.00"
              step="0.00000001"
              min="0"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-white/70">
              Currency
            </label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-32 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-white transition-all"
            >
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="USDT">USDT</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-4 rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all transform hover:scale-[1.02] mt-6"
        >
          <span>Send Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </form>
    </div>
  );
}