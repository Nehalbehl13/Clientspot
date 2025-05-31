
import React, { useState } from 'react';
import { Calendar, Users, Mail, TrendingUp, MoreVertical, Eye } from 'lucide-react';

export const CampaignHistory = () => {
  const [campaigns] = useState([
    {
      id: 1,
      name: 'Holiday Sale Campaign',
      segment: 'High Value Customers',
      createdDate: '2024-01-20',
      status: 'Active',
      audienceSize: 2847,
      sent: 2654,
      delivered: 2456,
      failed: 198,
      deliveryRate: 92.5,
      message: 'Hi {{name}}, enjoy 25% off on your next purchase! Limited time offer.',
      type: 'Promotional'
    },
    {
      id: 2,
      name: 'Win-back Inactive Users',
      segment: 'Inactive Customers',
      createdDate: '2024-01-18',
      status: 'Completed',
      audienceSize: 1532,
      sent: 1532,
      delivered: 1398,
      failed: 134,
      deliveryRate: 91.3,
      message: 'Hi {{name}}, we miss you! Here\'s 10% off to welcome you back.',
      type: 'Re-engagement'
    },
    {
      id: 3,
      name: 'High Value Customer Rewards',
      segment: 'VIP Customers',
      createdDate: '2024-01-15',
      status: 'Completed',
      audienceSize: 847,
      sent: 847,
      delivered: 789,
      failed: 58,
      deliveryRate: 93.2,
      message: 'Hi {{name}}, thank you for being a valued customer! Enjoy exclusive perks.',
      type: 'Loyalty'
    },
    {
      id: 4,
      name: 'New Product Launch',
      segment: 'Tech Enthusiasts',
      createdDate: '2024-01-12',
      status: 'Completed',
      audienceSize: 1247,
      sent: 1247,
      delivered: 1156,
      failed: 91,
      deliveryRate: 92.7,
      message: 'Hi {{name}}, check out our latest innovation! Be among the first to try it.',
      type: 'Product Launch'
    }
  ]);

  const [selectedCampaign, setSelectedCampaign] = useState(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'Completed':
        return 'bg-blue-100 text-blue-700';
      case 'Draft':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Promotional':
        return 'bg-purple-100 text-purple-700';
      case 'Re-engagement':
        return 'bg-orange-100 text-orange-700';
      case 'Loyalty':
        return 'bg-green-100 text-green-700';
      case 'Product Launch':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Campaign History</h1>
            <p className="text-gray-600">Track and analyze your campaign performance</p>
          </div>
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
            Create New Campaign
          </button>
        </div>
      </div>

      {/* Campaign Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">{campaigns.length}</div>
              <div className="text-gray-600 text-sm">Total Campaigns</div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-green-100 rounded-lg">
              <Users className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {campaigns.reduce((sum, c) => sum + c.audienceSize, 0).toLocaleString()}
              </div>
              <div className="text-gray-600 text-sm">Total Reached</div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-purple-100 rounded-lg">
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {(campaigns.reduce((sum, c) => sum + c.deliveryRate, 0) / campaigns.length).toFixed(1)}%
              </div>
              <div className="text-gray-600 text-sm">Avg. Delivery Rate</div>
            </div>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-2">
            <div className="p-2 bg-orange-100 rounded-lg">
              <Calendar className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">
                {campaigns.filter(c => c.status === 'Active').length}
              </div>
              <div className="text-gray-600 text-sm">Active Campaigns</div>
            </div>
          </div>
        </div>
      </div>

      {/* Campaign List */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Recent Campaigns</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Campaign</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Segment</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Audience</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Delivery Rate</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Created</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.id} className="border-b border-gray-100 hover:bg-white/50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-800">{campaign.name}</div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(campaign.type)}`}>
                          {campaign.type}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{campaign.segment}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <div className="text-gray-800 font-medium">{campaign.audienceSize.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">{campaign.sent.toLocaleString()} sent</div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-16 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${campaign.deliveryRate}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium text-green-600">
                        {campaign.deliveryRate}%
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-600">{campaign.createdDate}</td>
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={() => setSelectedCampaign(campaign)}
                        className="p-2 text-gray-400 hover:text-purple-600 transition-colors"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-800">{selectedCampaign.name}</h3>
                <button 
                  onClick={() => setSelectedCampaign(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-600">Segment</label>
                    <div className="text-gray-800 font-medium">{selectedCampaign.segment}</div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-600">Status</label>
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(selectedCampaign.status)}`}>
                        {selectedCampaign.status}
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600 mb-2 block">Message Template</label>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <code className="text-sm text-gray-800">{selectedCampaign.message}</code>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{selectedCampaign.audienceSize.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Audience Size</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{selectedCampaign.sent.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Sent</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">{selectedCampaign.delivered.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Delivered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{selectedCampaign.failed.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Failed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
