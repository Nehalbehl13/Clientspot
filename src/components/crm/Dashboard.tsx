import React from "react";
import {
  ArrowUp,
  ArrowDown,
  Users,
  Mail,
  Target,
  BarChart,
} from "lucide-react";

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const stats = [
    {
      title: "Total Customers",
      value: "12,847",
      change: "+12.5%",
      changeType: "positive",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Active Campaigns",
      value: "8",
      change: "+2",
      changeType: "positive",
      icon: Mail,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Segments Created",
      value: "24",
      change: "+4",
      changeType: "positive",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Delivery Rate",
      value: "92.3%",
      change: "-1.2%",
      changeType: "negative",
      icon: BarChart,
      color: "from-orange-500 to-red-500",
    },
  ];

  const recentCampaigns = [
    {
      name: "Holiday Sale Campaign",
      status: "Active",
      audience: 2847,
      sent: 2654,
      delivered: 2456,
      failed: 198,
    },
    {
      name: "Win-back Inactive Users",
      status: "Completed",
      audience: 1532,
      sent: 1532,
      delivered: 1398,
      failed: 134,
    },
    {
      name: "High Value Customer Rewards",
      status: "Completed",
      audience: 847,
      sent: 847,
      delivered: 789,
      failed: 58,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
        <h1 className="text-3xl font-bold mb-2">Welcome back, Nehal! 👋</h1>
        <p className="text-purple-100 mb-6">
          Here's what's happening with your CRM today.
        </p>
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab("segments")}
            className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg hover:bg-white/30 transition-colors"
          >
            Create New Segment
          </button>
          <button
            onClick={() => setActiveTab("campaigns")}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Campaigns
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div
                className={`flex items-center space-x-1 text-sm ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.changeType === "positive" ? (
                  <ArrowUp className="w-4 h-4" />
                ) : (
                  <ArrowDown className="w-4 h-4" />
                )}
                <span className="font-medium">{stat.change}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {stat.value}
            </h3>
            <p className="text-gray-600 text-sm">{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Recent Campaigns */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">Recent Campaigns</h2>
          <button
            onClick={() => setActiveTab("campaigns")}
            className="text-purple-600 hover:text-purple-700 font-medium"
          >
            View All →
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Campaign Name
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Status
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Audience
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Delivered
                </th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">
                  Success Rate
                </th>
              </tr>
            </thead>
            <tbody>
              {recentCampaigns.map((campaign, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100 hover:bg-white/50"
                >
                  <td className="py-4 px-4 font-medium text-gray-800">
                    {campaign.name}
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        campaign.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {campaign.status}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {campaign.audience.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-gray-600">
                    {campaign.delivered.toLocaleString()}
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-green-600 font-medium">
                      {((campaign.delivered / campaign.sent) * 100).toFixed(1)}%
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <button
          onClick={() => setActiveTab("customers")}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-colors text-left"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Manage Customers</h3>
              <p className="text-gray-600 text-sm">
                Import and view customer data
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("segments")}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-colors text-left"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Build Segments</h3>
              <p className="text-gray-600 text-sm">
                Create targeted audience groups
              </p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("analytics")}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/80 transition-colors text-left"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">View Analytics</h3>
              <p className="text-gray-600 text-sm">
                Track campaign performance
              </p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};
