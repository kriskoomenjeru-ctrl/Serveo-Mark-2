import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/UI/Button';
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react';
export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const handleSubmit = e => {
    e.preventDefault();
    navigate('/');
  };
  return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-500/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-orange-600/10 rounded-full blur-[100px]"></div>
      </div>
      <div className="glass-effect rounded-2xl w-full max-w-md p-8 z-10">
        <div className="text-center mb-8">
          <div className="inline-block relative">
            <div className="text-4xl font-bold orange-text-glow mb-2">
              Serveo
            </div>
            <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full"></div>
          </div>
          <p className="text-gray-400 mt-2">Service booking platform</p>
        </div>
        <h2 className="text-2xl font-semibold mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MailIcon size={18} className="text-gray-400" />
                </div>
                <input type="email" className="bg-gray-800/50 w-full pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter your email" required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <LockIcon size={18} className="text-gray-400" />
                </div>
                <input type={showPassword ? 'text' : 'password'} className="bg-gray-800/50 w-full pl-10 pr-10 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Enter your password" required />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-white">
                    {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
                  </button>
                </div>
              </div>
            </div>
            {!isLogin && <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockIcon size={18} className="text-gray-400" />
                  </div>
                  <input type={showPassword ? 'text' : 'password'} className="bg-gray-800/50 w-full pl-10 pr-4 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Confirm your password" required />
                </div>
              </div>}
            {isLogin && <div className="flex justify-end">
                <button type="button" className="text-sm text-orange-400 hover:text-orange-300">
                  Forgot password?
                </button>
              </div>}
            <Button type="submit" variant="primary" size="lg" className="w-full">
              {isLogin ? 'Login' : 'Sign Up'}
            </Button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button type="button" onClick={() => setIsLogin(!isLogin)} className="text-orange-400 hover:text-orange-300">
              {isLogin ? 'Sign Up' : 'Login'}
            </button>
          </p>
        </div>
      </div>
    </div>;
};