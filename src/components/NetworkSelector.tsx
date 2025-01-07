import React from 'react';
import { Network } from 'lucide-react';

interface NetworkSelectorProps {
  networks: string[];
  activeNetwork: string;
  onNetworkChange: (network: string) => void;
}

export function NetworkSelector({ networks, activeNetwork, onNetworkChange }: NetworkSelectorProps) {
  return (
    <div className="mb-8 bg-white/5 p-4 rounded-2xl backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <Network className="w-5 h-5 text-orange-400" />
        <h2 className="text-lg font-semibold">Network</h2>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2">
        {networks.map((network) => (
          <button
            key={network}
            onClick={() => onNetworkChange(network)}
            className={`px-4 py-2 rounded-xl transition-all transform hover:scale-105 ${
              activeNetwork === network
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                : 'bg-white/10 hover:bg-white/20'
            }`}
          >
            {network}
          </button>
        ))}
      </div>
    </div>
  );
}