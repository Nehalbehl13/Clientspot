
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Mail, Target, Calendar } from 'lucide-react';

export const Analytics = () => {
  const campaignPerformance = [
    { name: 'Holiday Sale', sent: 2654, delivered: 2456, failed: 198 },
    { name: 'Win-back', sent: 1532, delivered: 1398, failed: 134 },
    { name: 'VIP Rewards', sent: 847, delivered: 789, failed: 58 },
    { name: 'Product Launch', sent: 1247, delivered: 1156, failed: 91 },
  ];

  const deliveryTrends = [
    { date: '2024-01-15', rate: 93.2 },
    { date: '2024-01-16', rate: 91.8 },
    { date: '2024-01-17', rate: 92.5 },
    { date: '2024-01-18', rate: 91.3 },
    { date: '2024-01-19', rate: 94.1 },
    { date: '2024-01-20', rate: 92.5 },
  ];

  const segmentDistribution = [
    { name: 'High Value', value: 2847, color: '#8B5CF6' },
    { name: 'Inactive', value: 1532, color: '#3B82F6' },
    { name: 'VIP', value: 847, color: '#10B981' },
    { name: 'New Customers', value: 1247, color: '#F59E0B' },
  ];

  const aiInsights = [
    {
      title: "Peak Performance Window",
      insight: "Your campaigns perform 23% better when sent between 10 AM - 2 PM on weekdays.",
      action: "Schedule upcoming campaigns during this window for optimal delivery rates.",
      impact: "high"
    },
    {
      title: "Segment Optimization",
      insight: "VIP customers show 95% delivery rates, significantly higher than average (92.3%).",
      action: "Consider expanding VIP criteria to include high-value customers with 10+ orders.",
      impact: "medium"
    },
    {
      title: "Message Length Analysis",
      insight: "Messages with 15-25 words have 8% higher engagement than longer messages.",
      action: "Optimize future campaign messages to stay within this word count range.",
      impact: "medium"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Analytics Dashboard</h1>
            <p className="text-gray-600">Comprehensive insights into your campaign performance</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>Last 30 Days</span>
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">7,280</div>
              <div className="text-gray-600 text-sm">Messages Sent</div>
            </div>
          </div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+15.3% vs last month</span>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Target className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">6,799</div>
              <div className="text-gray-600 text-sm">Successfully Delivered</div>
            </div>
          </div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+12.8% vs last month</span>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <BarChart className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">93.4%</div>
              <div className="text-gray-600 text-sm">Overall Delivery Rate</div>
            </div>
          </div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+2.1% vs last month</span>
          </div>
        </div>

        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Users className="w-6 h-6 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-800">6,473</div>
              <div className="text-gray-600 text-sm">Unique Recipients</div>
            </div>
          </div>
          <div className="flex items-center text-green-600 text-sm">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+8.7% vs last month</span>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Campaign Performance */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Campaign Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={campaignPerformance}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="delivered" fill="#10B981" name="Delivered" />
              <Bar dataKey="failed" fill="#EF4444" name="Failed" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Delivery Rate Trends */}
        <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Delivery Rate Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={deliveryTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[85, 100]} />
              <Tooltip />
              <Line type="monotone" dataKey="rate" stroke="#8B5CF6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Segment Distribution */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Audience Segment Distribution</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={segmentDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {segmentDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          
          <div className="space-y-4">
            {segmentDistribution.map((segment, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-4 h-4 rounded-full" 
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="font-medium text-gray-800">{segment.name}</span>
                </div>
                <span className="text-gray-600 font-medium">{segment.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI-Powered Insights */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2 bg-white/20 rounded-lg">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-semibold">AI-Powered Insights</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {aiInsights.map((insight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold">{insight.title}</h4>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  insight.impact === 'high' ? 'bg-red-400/20 text-red-100' : 'bg-yellow-400/20 text-yellow-100'
                }`}>
                  {insight.impact} impact
                </span>
              </div>
              <p className="text-sm opacity-90 mb-3">{insight.insight}</p>
              <p className="text-xs opacity-80 font-medium">💡 {insight.action}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
