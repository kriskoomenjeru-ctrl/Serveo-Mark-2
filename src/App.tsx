import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { Workers } from './pages/Workers';
import { Jobs } from './pages/Jobs';
import { Payments } from './pages/Payments';
import { Map } from './pages/Map';
import { Support } from './pages/Support';
import { DashboardLayout } from './components/Layout/DashboardLayout';
export function App() {
  return <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="workers" element={<Workers />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="payments" element={<Payments />} />
          <Route path="map" element={<Map />} />
          <Route path="support" element={<Support />} />
        </Route>
      </Routes>
    </Router>;
}