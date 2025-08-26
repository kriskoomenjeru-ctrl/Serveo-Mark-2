import React from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { SearchIcon, FilterIcon, PlusIcon, CheckCircleIcon } from 'lucide-react';
export const Workers = () => {
  const workers = Array(8).fill().map((_, i) => ({
    id: i + 1,
    name: `Worker ${i + 1}`,
    skills: ['Cleaning', 'Plumbing', 'Electrical'][i % 3],
    rating: 3 + i % 3,
    status: i % 4 === 0 ? 'offline' : 'online',
    verified: i % 3 === 0
  }));
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Worker Management</h1>
        <Button variant="primary">
          <PlusIcon size={16} className="mr-2" />
          Add Worker
        </Button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" placeholder="Search workers..." className="bg-gray-800/50 w-full pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" />
        </div>
        <Button variant="glass">
          <FilterIcon size={16} className="mr-2" />
          Filters
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workers.map(worker => <GlassCard key={worker.id} className="relative">
            {worker.verified && <div className="absolute top-4 right-4 orange-text-glow">
                <CheckCircleIcon size={20} className="text-orange-400" />
              </div>}
            <div className="flex flex-col items-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gray-700 mb-3 overflow-hidden">
                <img src={`https://randomuser.me/api/portraits/${worker.id % 2 === 0 ? 'men' : 'women'}/${worker.id + 10}.jpg`} alt={worker.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-medium text-lg">{worker.name}</h3>
              <p className="text-gray-400 text-sm">{worker.skills}</p>
            </div>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map(star => <svg key={star} xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${star <= worker.rating ? 'text-orange-400' : 'text-gray-600'}`} viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>)}
            </div>
            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 text-xs rounded-full ${worker.status === 'online' ? 'bg-green-500/20 text-green-400' : 'bg-gray-500/20 text-gray-400'}`}>
                {worker.status}
              </span>
              <Button variant="outline" size="sm">
                View Profile
              </Button>
            </div>
          </GlassCard>)}
      </div>
    </div>;
};