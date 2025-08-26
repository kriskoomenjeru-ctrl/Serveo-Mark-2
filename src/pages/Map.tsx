import React from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { FilterIcon, MapPinIcon, UsersIcon, BriefcaseIcon } from 'lucide-react';
export const Map = () => {
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Geo-Location Map</h1>
        <Button variant="glass">
          <FilterIcon size={16} className="mr-2" />
          Filter
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <GlassCard className="h-[600px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-gray-400">
                <p className="text-center mb-2">Map Placeholder</p>
                <p className="text-sm text-gray-500 text-center">
                  A dark-themed map with glowing orange pins would be displayed
                  here
                </p>
              </div>
            </div>
            {/* Map Markers (Simulation) */}
            <div className="absolute top-1/4 left-1/4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-orange-500 orange-glow absolute top-0 left-0"></div>
                <div className="w-4 h-4 rounded-full bg-orange-500/50 animate-ping absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="absolute top-2/3 left-2/3">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-orange-500 orange-glow absolute top-0 left-0"></div>
                <div className="w-4 h-4 rounded-full bg-orange-500/50 animate-ping absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="absolute top-1/3 left-3/4">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-green-500 orange-glow absolute top-0 left-0"></div>
                <div className="w-4 h-4 rounded-full bg-green-500/50 animate-ping absolute top-0 left-0"></div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button variant="glass" size="sm">
                <MapPinIcon size={14} className="mr-1" />
                Center
              </Button>
              <Button variant="glass" size="sm">
                +
              </Button>
              <Button variant="glass" size="sm">
                -
              </Button>
            </div>
          </GlassCard>
        </div>
        <div className="lg:col-span-1">
          <GlassCard className="mb-6">
            <h3 className="text-lg font-medium mb-4">Map Filters</h3>
            <div className="space-y-4">
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-orange-500 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm">Active Workers</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-orange-500 focus:ring-orange-500" defaultChecked />
                  <span className="text-sm">Ongoing Jobs</span>
                </label>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-orange-500 focus:ring-orange-500" />
                  <span className="text-sm">Service Hotspots</span>
                </label>
              </div>
              <div className="pt-2">
                <label className="block text-sm mb-1">Service Radius</label>
                <input type="range" min="1" max="10" defaultValue="5" className="w-full h-2 rounded-lg appearance-none bg-gray-700" />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1km</span>
                  <span>5km</span>
                  <span>10km</span>
                </div>
              </div>
              <Button variant="primary" size="sm" className="w-full">
                Apply Filters
              </Button>
            </div>
          </GlassCard>
          <GlassCard>
            <h3 className="text-lg font-medium mb-4">Nearby Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center p-2 glass-effect rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-3">
                  <UsersIcon size={14} className="text-orange-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">12 Active Workers</p>
                  <p className="text-xs text-gray-400">Within 5km radius</p>
                </div>
              </div>
              <div className="flex items-center p-2 glass-effect rounded-lg">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center mr-3">
                  <BriefcaseIcon size={14} className="text-green-400" />
                </div>
                <div>
                  <p className="text-sm font-medium">8 Ongoing Jobs</p>
                  <p className="text-xs text-gray-400">Within 5km radius</p>
                </div>
              </div>
              <Button variant="glass" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>;
};