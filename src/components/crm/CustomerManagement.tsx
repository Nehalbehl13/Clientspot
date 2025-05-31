
import React, { useState } from 'react';
import { Upload, Users, Search, Filter, Download } from 'lucide-react';

export const CustomerManagement = () => {
  const [customers] = useState([
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul.sharma@email.com',
      totalSpent: 25000,
      orders: 8,
      lastVisit: '2024-01-15',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Priya Patel',
      email: 'priya.patel@email.com',
      totalSpent: 8500,
      orders: 3,
      lastVisit: '2024-01-12',
      status: 'Active'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit.kumar@email.com',
      totalSpent: 45000,
      orders: 15,
      lastVisit: '2023-12-20',
      status: 'Inactive'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      email: 'sneha.reddy@email.com',
      totalSpent: 12000,
      orders: 5,
      lastVisit: '2024-01-18',
      status: 'Active'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Customer Management</h1>
            <p className="text-gray-600">Import, manage, and analyze your customer data</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center space-x-2">
              <Upload className="w-5 h-5" />
              <span>Import CSV</span>
            </button>
            <button className="bg-white text-purple-600 border border-purple-600 px-6 py-3 rounded-lg hover:bg-purple-50 transition-colors flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-blue-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-600">{customers.length}</div>
            <div className="text-blue-700 text-sm">Total Customers</div>
          </div>
          <div className="bg-green-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-600">
              {customers.filter(c => c.status === 'Active').length}
            </div>
            <div className="text-green-700 text-sm">Active Customers</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-600">
              ₹{(customers.reduce((sum, c) => sum + c.totalSpent, 0) / customers.length).toLocaleString()}
            </div>
            <div className="text-purple-700 text-sm">Avg. Spend</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-4">
            <div className="text-2xl font-bold text-orange-600">
              {(customers.reduce((sum, c) => sum + c.orders, 0) / customers.length).toFixed(1)}
            </div>
            <div className="text-orange-700 text-sm">Avg. Orders</div>
          </div>
        </div>
      </div>

      {/* Data Import Section */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Data Import</h2>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-purple-400 transition-colors">
          <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-700 mb-2">Upload Customer Data</h3>
          <p className="text-gray-500 mb-4">Drag and drop your CSV file or click to browse</p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Choose File
          </button>
          <p className="text-xs text-gray-400 mt-2">Supported format: CSV (max 10MB)</p>
        </div>
      </div>

      {/* Customer List */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-800">Customer Database</h2>
          <div className="flex space-x-3">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-600">Customer</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Total Spent</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Orders</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Last Visit</th>
                <th className="text-left py-3 px-4 font-medium text-gray-600">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b border-gray-100 hover:bg-white/50">
                  <td className="py-4 px-4">
                    <div>
                      <div className="font-medium text-gray-800">{customer.name}</div>
                      <div className="text-sm text-gray-600">{customer.email}</div>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-gray-800 font-medium">
                    ₹{customer.totalSpent.toLocaleString()}
                  </td>
                  <td className="py-4 px-4 text-gray-600">{customer.orders}</td>
                  <td className="py-4 px-4 text-gray-600">{customer.lastVisit}</td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      customer.status === 'Active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
