import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar, MobileNav } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Messages } from './pages/Messages';
import { Images } from './pages/Images';
import { Effects } from './pages/Effects';
import { Playlist } from './pages/Playlist';
import { Scheduler } from './pages/Scheduler';
import { HardwareTest } from './pages/HardwareTest';
import { Settings } from './pages/Settings';
import { Login } from './pages/Login';
import { useAppStore } from './store/useAppStore';

import { FestivalBackground } from './components/FestivalBackground';

function App() {
  const { user } = useAppStore();

  if (!user || !user.isAuthenticated) {
    return <Login />;
  }

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-transparent text-white font-sans selection:bg-festival-primary/30 relative">
        <FestivalBackground />
        <Sidebar />
        
        {/* Main Content Area */}
        <main className="md:ml-64 p-4 md:p-8 pb-24 md:pb-8 min-h-screen">
          <div className="max-w-7xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/images" element={<Images />} />
              <Route path="/effects" element={<Effects />} />
              <Route path="/playlist" element={<Playlist />} />
              <Route path="/scheduler" element={<Scheduler />} />
              <Route path="/test" element={<HardwareTest />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        <MobileNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
