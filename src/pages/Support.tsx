import React, { useState } from 'react';
import { GlassCard } from '../components/UI/GlassCard';
import { Button } from '../components/UI/Button';
import { SearchIcon, SendIcon, PaperclipIcon, UserIcon, PhoneIcon } from 'lucide-react';
export const Support = () => {
  const [activeConversation, setActiveConversation] = useState(0);
  const conversations = Array(5).fill().map((_, i) => ({
    id: i,
    user: `User ${i + 1}`,
    preview: ['Payment issue with my last booking', 'Worker did not show up', 'How do I cancel a booking?', 'Refund request for job #8723', 'App keeps crashing'][i],
    time: '10:23 AM',
    unread: i === 0 || i === 3,
    status: ['pending', 'resolved', 'escalated', 'pending', 'resolved'][i]
  }));
  const statusColors = {
    pending: 'bg-orange-500/20 text-orange-400',
    resolved: 'bg-green-500/20 text-green-400',
    escalated: 'bg-red-500/20 text-red-400'
  };
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Support</h1>
        <Button variant="primary">New Ticket</Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <GlassCard className="h-[600px] flex flex-col">
            <div className="relative mb-4">
              <SearchIcon size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input type="text" placeholder="Search conversations..." className="bg-gray-800/50 w-full pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" />
            </div>
            <div className="flex space-x-1 p-1 glass-effect rounded-xl mb-4">
              <button className="flex-1 px-4 py-2 rounded-lg text-sm bg-orange-500 text-white">
                All
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm hover:bg-gray-800/50">
                Pending
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg text-sm hover:bg-gray-800/50">
                Resolved
              </button>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2">
              {conversations.map(convo => <div key={convo.id} className={`p-3 rounded-xl transition-all cursor-pointer ${activeConversation === convo.id ? 'glass-effect orange-glow' : 'hover:bg-gray-800/50'}`} onClick={() => setActiveConversation(convo.id)}>
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                        <UserIcon size={18} />
                      </div>
                      <div>
                        <h4 className="font-medium">{convo.user}</h4>
                        <p className="text-sm text-gray-400 line-clamp-1">
                          {convo.preview}
                        </p>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">{convo.time}</div>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className={`px-2 py-0.5 text-xs rounded-full ${statusColors[convo.status]}`}>
                      {convo.status}
                    </span>
                    {convo.unread && <span className="w-2 h-2 rounded-full bg-orange-500"></span>}
                  </div>
                </div>)}
            </div>
          </GlassCard>
        </div>
        <div className="lg:col-span-2">
          <GlassCard className="h-[600px] flex flex-col">
            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                  <UserIcon size={18} />
                </div>
                <div>
                  <h3 className="font-medium">
                    {conversations[activeConversation]?.user || 'User'}
                  </h3>
                  <span className={`px-2 py-0.5 text-xs rounded-full ${statusColors[conversations[activeConversation]?.status || 'pending']}`}>
                    {conversations[activeConversation]?.status || 'pending'}
                  </span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button variant="glass" size="sm">
                  <PhoneIcon size={16} />
                </Button>
                <Button variant="glass" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              <div className="flex justify-start">
                <div className="max-w-[75%] glass-effect rounded-xl rounded-tl-none p-3">
                  <p className="text-sm">
                    Hello, I'm having an issue with my last booking. The worker
                    didn't complete all the tasks but marked the job as
                    complete.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">10:15 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-orange-500/20 rounded-xl rounded-tr-none p-3">
                  <p className="text-sm">
                    Hi there! I'm sorry to hear about this issue. Could you
                    please provide the job ID so I can look into this for you?
                  </p>
                  <p className="text-xs text-gray-400 mt-1">10:18 AM</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="max-w-[75%] glass-effect rounded-xl rounded-tl-none p-3">
                  <p className="text-sm">
                    Sure, the job ID is #SRV-8723. I paid for a full house
                    cleaning but they only did the living room and kitchen.
                  </p>
                  <p className="text-xs text-gray-400 mt-1">10:20 AM</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="max-w-[75%] bg-orange-500/20 rounded-xl rounded-tr-none p-3">
                  <p className="text-sm">
                    Thank you for providing the job ID. I can see the details of
                    your booking now. I'll contact the worker to get their side
                    of the story and get back to you shortly. Would you like a
                    partial refund or would you prefer to have the worker come
                    back to complete the job?
                  </p>
                  <p className="text-xs text-gray-400 mt-1">10:23 AM</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-4">
              <div className="relative">
                <input type="text" placeholder="Type your message..." className="bg-gray-800/50 w-full pl-4 pr-20 py-3 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex space-x-1">
                  <button className="p-2 rounded-full hover:bg-gray-700">
                    <PaperclipIcon size={18} className="text-gray-400" />
                  </button>
                  <button className="p-2 rounded-full bg-orange-500 text-white">
                    <SendIcon size={18} />
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>;
};