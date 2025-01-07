import React from 'react';
import { TrendingUp } from 'lucide-react';

interface PriceChartProps {
  currency: string;
  data: { price: number; timestamp: string }[];
}

export function PriceChart({ currency, data }: PriceChartProps) {
  const maxPrice = Math.max(...data.map(d => d.price));
  const minPrice = Math.min(...data.map(d => d.price));
  const priceChange = ((data[data.length - 1].price - data[0].price) / data[0].price) * 100;

  return (
    <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm transform transition-all hover:scale-[1.02]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-orange-400" />
          <h3 className="font-semibold">{currency} Price</h3>
        </div>
        <span className={`text-sm ${priceChange >= 0 ? 'text-green-400' : 'text-red-400'}`}>
          {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)}%
        </span>
      </div>
      
      <div className="h-32 relative">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d={`M 0 ${100 - ((data[0].price - minPrice) / (maxPrice - minPrice)) * 100} ${data.map((d, i) => {
              const x = (i / (data.length - 1)) * 100;
              const y = 100 - ((d.price - minPrice) / (maxPrice - minPrice)) * 100;
              return `L ${x} ${y}`;
            }).join(' ')}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="2"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}