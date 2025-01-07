import React from 'react';
import { X, Shield, Eye, Globe, Moon, Sun, Wallet } from 'lucide-react';

interface SettingsProps {
  onClose: () => void;
}

export function Settings({ onClose }: SettingsProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#1a1b1f] rounded-2xl p-6 w-full max-w-md transform transition-all animate-slideIn">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-full transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-orange-400" />
                <span>Security</span>
              </div>
              <button className="text-orange-400">&gt;</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Eye className="w-5 h-5 text-orange-400" />
                <span>Privacy</span>
              </div>
              <button className="text-orange-400">&gt;</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-orange-400" />
                <span>Network</span>
              </div>
              <button className="text-orange-400">&gt;</button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
              <div className="flex items-center gap-3">
                <Sun className="w-5 h-5 text-orange-400" />
                <span>Theme</span>
              </div>
              <button className="bg-white/10 p-2 rounded-full">
                <Moon className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Wallet className="w-5 h-5 text-orange-400" />
                <span>Backup Wallet</span>
              </div>
              <button className="text-orange-400">&gt;</button>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-center text-sm text-white/50">
              Version 1.0.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}