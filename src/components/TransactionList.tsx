import React from 'react';
import { Transaction } from '../types';
import { ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react';

interface TransactionListProps {
  transactions: Transaction[];
}

export function TransactionList({ transactions }: TransactionListProps) {
  return (
    <div className="bg-[#1a1b1f] rounded-2xl p-6 text-white shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <Clock className="w-6 h-6 text-orange-400" />
        <h2 className="text-xl font-semibold">Recent Transactions</h2>
      </div>
      <div className="space-y-4">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="flex items-center justify-between p-4 bg-white/5 rounded-xl transform transition-all hover:scale-[1.02] hover:bg-white/10"
          >
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-full ${
                tx.type === 'send' ? 'bg-red-400/20' : 'bg-green-400/20'
              }`}>
                {tx.type === 'send' ? (
                  <ArrowUpRight className={`w-5 h-5 ${tx.type === 'send' ? 'text-red-400' : 'text-green-400'}`} />
                ) : (
                  <ArrowDownLeft className={`w-5 h-5 ${tx.type === 'send' ? 'text-red-400' : 'text-green-400'}`} />
                )}
              </div>
              <div>
                <p className="font-medium">{tx.type === 'send' ? 'Sent' : 'Received'}</p>
                <p className="text-sm text-white/50">
                  {new Date(tx.timestamp).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-medium ${
                tx.type === 'send' ? 'text-red-400' : 'text-green-400'
              }`}>
                {tx.type === 'send' ? '-' : '+'}{tx.amount} {tx.currency}
              </p>
              <p className="text-sm text-white/50">
                {tx.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}