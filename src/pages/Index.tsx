
import React, { useState } from 'react';
import { Header } from '@/components/crm/Header';
import { Dashboard } from '@/components/crm/Dashboard';
import { CustomerManagement } from '@/components/crm/CustomerManagement';
import { SegmentBuilder } from '@/components/crm/SegmentBuilder';
import { CampaignHistory } from '@/components/crm/CampaignHistory';
import { Analytics } from '@/components/crm/Analytics';

const Index = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Simulated auth

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard setActiveTab={setActiveTab} />;
      case 'customers':
        return <CustomerManagement />;
      case 'segments':
        return <SegmentBuilder />;
      case 'campaigns':
        return <CampaignHistory />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard setActiveTab={setActiveTab} />;
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Welcome to Mini CRM</h1>
          <p className="mb-6">Please sign in with Google to continue</p>
          <button 
            onClick={() => setIsAuthenticated(true)}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-purple-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="container mx-auto px-4 py-8">
        {renderActiveComponent()}
      </main>
    </div>
  );
};

export default Index;
