import React, { useState } from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { SearchIcon, FilterIcon, DownloadIcon } from 'lucide-react';
export const Jobs = () => {
  const [activeTab, setActiveTab] = useState('active');
  const tabs = [{
    id: 'active',
    label: 'Active'
  }, {
    id: 'pending',
    label: 'Pending'
  }, {
    id: 'completed',
    label: 'Completed'
  }];
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Management</h1>
        <Button variant="glass">
          <DownloadIcon size={16} className="mr-2" />
          Export
        </Button>
      </div>
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <div className="flex space-x-1 p-1 glass-effect rounded-xl">
          {tabs.map(tab => <button key={tab.id} className={`px-4 py-2 rounded-lg text-sm transition-all ${activeTab === tab.id ? 'bg-orange-500 text-white' : 'hover:bg-gray-800/50'}`} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>)}
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Search jobs..." className="bg-gray-800/50 pl-10 pr-4 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" />
          </div>
          <Button variant="glass">
            <FilterIcon size={16} className="mr-2" />
            Filter
          </Button>
        </div>
      </div>
      <GlassCard>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Job ID
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Client
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Service Type
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Worker
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Date
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Payment
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array(10).fill().map((_, i) => {
              const statusMap = {
                0: {
                  label: 'In Progress',
                  class: 'bg-blue-500/20 text-blue-400'
                },
                1: {
                  label: 'Pending',
                  class: 'bg-orange-500/20 text-orange-400'
                },
                2: {
                  label: 'Completed',
                  class: 'bg-green-500/20 text-green-400'
                }
              };
              const paymentMap = {
                0: {
                  label: 'Paid',
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
              const payment = paymentMap[i % 3];
              return <tr key={i} className="border-b border-gray-800 hover:bg-gray-800/30">
                      <td className="py-3 px-4 text-sm">#SRV-{10000 + i}</td>
                      <td className="py-3 px-4 text-sm">Client {i + 1}</td>
                      <td className="py-3 px-4 text-sm">
                        {['Home Cleaning', 'Plumbing', 'Electrical', 'Gardening', 'Moving'][i % 5]}
                      </td>
                      <td className="py-3 px-4 text-sm">Worker {i + 1}</td>
                      <td className="py-3 px-4 text-sm">
                        {new Date(2023, 0, i + 1).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${status.class}`}>
                          {status.label}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <span className={`px-2 py-1 text-xs rounded-full ${payment.class}`}>
                          {payment.label}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-sm">
                        <Button variant="glass" size="sm">
                          Details
                        </Button>
                      </td>
                    </tr>;
            })}
            </tbody>
          </table>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-400">Showing 1-10 of 120 jobs</div>
          <div className="flex space-x-1">
            <Button variant="glass" size="sm">
              &lt;
            </Button>
            <Button variant="glass" size="sm" className="bg-orange-500/20">
              1
            </Button>
            <Button variant="glass" size="sm">
              2
            </Button>
            <Button variant="glass" size="sm">
              3
            </Button>
            <Button variant="glass" size="sm">
              &gt;
            </Button>
          </div>
        </div>
      </GlassCard>
    </div>;
};