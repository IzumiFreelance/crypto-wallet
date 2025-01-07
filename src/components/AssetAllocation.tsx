import React from 'react';
import { PieChart } from 'lucide-react';

interface AssetAllocationProps {
  assets: {
    currency: string;
    value: number;
    color: string;
  }[];
}

export function AssetAllocation({ assets }: AssetAllocationProps) {
  const total = assets.reduce((sum, asset) => sum + asset.value, 0);

  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
      <div className="flex items-center gap-2 mb-4">
        <PieChart className="w-5 h-5 text-orange-400" />
        <h3 className="font-semibold">Portfolio Allocation</h3>
      </div>

      <div className="flex items-center gap-8">
        <div className="w-32 h-32 relative">
          <svg className="w-full h-full transform -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="32"
              stroke="#2a2b2f"
              strokeWidth="32"
              fill="none"
            />
            {assets.map((asset, index) => {
              const percentage = (asset.value / total) * 100;
              const circumference = 2 * Math.PI * 32;
              const offset = circumference - (percentage / 100) * circumference;
              const previousOffset = assets
                .slice(0, index)
                .reduce((sum, a) => sum + (a.value / total) * circumference, 0);

              return (
                <circle
                  key={asset.currency}
                  cx="64"
                  cy="64"
                  r="32"
                  stroke={asset.color}
                  strokeWidth="32"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  transform={`rotate(${(previousOffset / circumference) * 360} 64 64)`}
                  fill="none"
                  className="transition-all duration-1000"
                />
              );
            })}
          </svg>
        </div>

        <div className="flex-1 space-y-2">
          {assets.map(asset => (
            <div key={asset.currency} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: asset.color }} />
                <span>{asset.currency}</span>
              </div>
              <span className="text-sm text-white/70">
                {((asset.value / total) * 100).toFixed(1)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}