import React from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { DownloadIcon, TrendingUpIcon, DollarSignIcon, CreditCardIcon, BarChart3Icon } from 'lucide-react';
export const Payments = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payments</h1>
        <Button variant="glass">
          <DownloadIcon size={16} className="mr-2" />
          Export
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
            <DollarSignIcon size={20} className="text-green-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Total Revenue</p>
            <p className="text-2xl font-bold">$84,392</p>
            <p className="text-xs text-green-400">+8% from last month</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
            <CreditCardIcon size={20} className="text-orange-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Pending Payouts</p>
            <p className="text-2xl font-bold">$12,850</p>
            <p className="text-xs text-orange-400">23 transactions</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
            <BarChart3Icon size={20} className="text-blue-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Total Transactions</p>
            <p className="text-2xl font-bold">1,293</p>
            <p className="text-xs text-green-400">+18% from last month</p>
          </div>
        </GlassCard>
      </div>
      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Revenue Overview</h2>
          <Button variant="outline" size="sm">
            <TrendingUpIcon size={14} className="mr-1" />
            Export
          </Button>
        </div>
        <div className="h-64 flex items-center justify-center">
          <div className="w-full h-full bg-gray-800/50 rounded-xl flex items-center justify-center">
            <p className="text-gray-400">Revenue Chart Placeholder</p>
          </div>
        </div>
      </GlassCard>
      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Transactions</h2>
          <Button variant="glass" size="sm">
            View All
          </Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Transaction ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Client
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Worker
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Amount
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(8).fill().map((_, i) => {
              const statusMap = {
                0: {
                  label: 'Completed',
                  class: 'bg-green-500/20 text-green-400'
                },
                1: {
                  label: 'Pending',
                  class: 'bg-orange-500/20 text-orange-400'
                },
                2: {
                  label: 'Failed',
                  class: 'bg-red-500/20 text-red-400'
                }
              };
              const status = statusMap[i % 3];
              return <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-3 px-4 text-sm">#TRX-{100000 + i}</td>
                      <td className="py-3 px-4 text-sm">Client {i + 1}</td>
                      <td className="py-3 px-4 text-sm">Worker {i + 1}</td>
                      <td className="py-3 px-4 text-sm">
                        {new Date(2023, 0, i + 1).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        ${(50 + i * 10).toFixed(2)}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${status.class}`}>
                          {status.label}
                        </span>
                      </td>
                    </tr>;
            })}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>;
};