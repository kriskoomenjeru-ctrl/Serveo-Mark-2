import React from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { UsersIcon, BriefcaseIcon, CheckCircleIcon, AlertCircleIcon, TrendingUpIcon, DollarSignIcon, ClockIcon } from 'lucide-react';
export const Dashboard = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button variant="glass">
          <ClockIcon size={16} className="mr-2" />
          Last 7 Days
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mr-4">
            <UsersIcon size={20} className="text-orange-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Total Users</p>
            <p className="text-2xl font-bold">2,546</p>
            <p className="text-xs text-green-400">+12% from last week</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mr-4">
            <BriefcaseIcon size={20} className="text-blue-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Active Workers</p>
            <p className="text-2xl font-bold">847</p>
            <p className="text-xs text-green-400">+5% from last week</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mr-4">
            <CheckCircleIcon size={20} className="text-green-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Completed Jobs</p>
            <p className="text-2xl font-bold">1,293</p>
            <p className="text-xs text-green-400">+18% from last week</p>
          </div>
        </GlassCard>
        <GlassCard className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4">
            <DollarSignIcon size={20} className="text-purple-400" />
          </div>
          <div>
            <p className="text-gray-400 text-sm">Revenue</p>
            <p className="text-2xl font-bold">$84,392</p>
            <p className="text-xs text-green-400">+8% from last week</p>
          </div>
        </GlassCard>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">Performance Overview</h2>
            <Button variant="outline" size="sm">
              <TrendingUpIcon size={14} className="mr-1" />
              Export
            </Button>
          </div>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full h-full bg-gray-800/50 rounded-xl flex items-center justify-center">
              <p className="text-gray-400">Performance Chart Placeholder</p>
            </div>
          </div>
        </GlassCard>
        <GlassCard>
          <h2 className="text-lg font-semibold mb-6">Recent Issues</h2>
          <div className="space-y-4">
            {[1, 2, 3].map(item => <div key={item} className="glass-effect p-3 rounded-xl">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center mr-3">
                    <AlertCircleIcon size={16} className="text-red-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Payment Failed</p>
                    <p className="text-xs text-gray-400">
                      Job #8723 - 2 hours ago
                    </p>
                  </div>
                </div>
              </div>)}
            <Button variant="glass" size="sm" className="w-full">
              View All Issues
            </Button>
          </div>
        </GlassCard>
      </div>
      <GlassCard>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Recent Jobs</h2>
          <Button variant="glass" size="sm">
            View All
          </Button>
        </div>
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
                  Service
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Worker
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Status
                </th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map(item => <tr key={item} className="border-b border-gray-800 hover:bg-gray-800/30">
                  <td className="py-3 px-4 text-sm">
                    #SRV-{Math.floor(Math.random() * 10000)}
                  </td>
                  <td className="py-3 px-4 text-sm">Client Name</td>
                  <td className="py-3 px-4 text-sm">Home Cleaning</td>
                  <td className="py-3 px-4 text-sm">Worker Name</td>
                  <td className="py-3 px-4 text-sm">
                    <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">
                      Completed
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm">$120.00</td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>;
};