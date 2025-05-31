
import React, { useState } from 'react';
import { Plus, Trash2, Users, Brain, Wand2 } from 'lucide-react';

interface Rule {
  id: string;
  field: string;
  operator: string;
  value: string;
}

interface RuleGroup {
  id: string;
  operator: 'AND' | 'OR';
  rules: Rule[];
}

export const SegmentBuilder = () => {
  const [segmentName, setSegmentName] = useState('');
  const [ruleGroups, setRuleGroups] = useState<RuleGroup[]>([
    {
      id: '1',
      operator: 'AND',
      rules: [
        { id: '1', field: 'totalSpent', operator: '>', value: '10000' }
      ]
    }
  ]);
  const [aiPrompt, setAiPrompt] = useState('');
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  const [estimatedSize] = useState(2847);

  const fields = [
    { value: 'totalSpent', label: 'Total Spent (₹)' },
    { value: 'orders', label: 'Number of Orders' },
    { value: 'lastVisit', label: 'Last Visit (days ago)' },
    { value: 'visits', label: 'Total Visits' },
    { value: 'avgOrderValue', label: 'Average Order Value' }
  ];

  const operators = [
    { value: '>', label: 'Greater than' },
    { value: '<', label: 'Less than' },
    { value: '=', label: 'Equal to' },
    { value: '>=', label: 'Greater than or equal to' },
    { value: '<=', label: 'Less than or equal to' }
  ];

  const addRule = (groupId: string) => {
    setRuleGroups(groups => 
      groups.map(group => 
        group.id === groupId 
          ? { ...group, rules: [...group.rules, { 
              id: Date.now().toString(), 
              field: 'totalSpent', 
              operator: '>', 
              value: '' 
            }]}
          : group
      )
    );
  };

  const removeRule = (groupId: string, ruleId: string) => {
    setRuleGroups(groups => 
      groups.map(group => 
        group.id === groupId 
          ? { ...group, rules: group.rules.filter(rule => rule.id !== ruleId) }
          : group
      )
    );
  };

  const updateRule = (groupId: string, ruleId: string, field: keyof Rule, value: string) => {
    setRuleGroups(groups => 
      groups.map(group => 
        group.id === groupId 
          ? { 
              ...group, 
              rules: group.rules.map(rule => 
                rule.id === ruleId ? { ...rule, [field]: value } : rule
              )
            }
          : group
      )
    );
  };

  const addRuleGroup = () => {
    setRuleGroups([...ruleGroups, {
      id: Date.now().toString(),
      operator: 'AND',
      rules: [{ id: Date.now().toString(), field: 'totalSpent', operator: '>', value: '' }]
    }]);
  };

  const handleAiGenerate = () => {
    // Simulate AI processing
    setShowAiSuggestions(true);
    // In a real app, this would call an AI API
    setTimeout(() => {
      if (aiPrompt.toLowerCase().includes('inactive')) {
        setRuleGroups([{
          id: '1',
          operator: 'AND',
          rules: [
            { id: '1', field: 'lastVisit', operator: '>', value: '90' },
            { id: '2', field: 'totalSpent', operator: '>', value: '5000' }
          ]
        }]);
        setSegmentName('Inactive High-Value Customers');
      }
      setShowAiSuggestions(false);
    }, 2000);
  };

  const aiSuggestions = [
    "High-value customers who haven't purchased in 30 days",
    "New customers with more than 3 orders",
    "Customers with cart abandonment in last week",
    "VIP customers with declining engagement"
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Segment Builder</h1>
        <p className="text-gray-600">Create targeted customer segments with flexible rules and AI assistance</p>
      </div>

      {/* AI Assistant */}
      <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl p-6 text-white">
        <div className="flex items-center space-x-3 mb-4">
          <Brain className="w-6 h-6" />
          <h2 className="text-lg font-semibold">AI-Powered Segment Creation</h2>
        </div>
        <p className="mb-4 opacity-90">Describe your target audience in plain English and let AI create the rules for you!</p>
        
        <div className="flex space-x-3 mb-4">
          <input
            type="text"
            placeholder="e.g., People who haven't shopped in 6 months and spent over ₹5K"
            value={aiPrompt}
            onChange={(e) => setAiPrompt(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500"
          />
          <button 
            onClick={handleAiGenerate}
            disabled={showAiSuggestions}
            className="bg-white text-purple-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex items-center space-x-2 disabled:opacity-50"
          >
            {showAiSuggestions ? (
              <>
                <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <Wand2 className="w-5 h-5" />
                <span>Generate Rules</span>
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {aiSuggestions.map((suggestion, index) => (
            <button
              key={index}
              onClick={() => setAiPrompt(suggestion)}
              className="bg-white/20 backdrop-blur-sm p-3 rounded-lg text-left hover:bg-white/30 transition-colors text-sm"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>

      {/* Segment Configuration */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Segment Configuration</h2>
        
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Segment Name</label>
          <input
            type="text"
            value={segmentName}
            onChange={(e) => setSegmentName(e.target.value)}
            placeholder="e.g., High Value Customers"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Rule Builder */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-md font-medium text-gray-800">Targeting Rules</h3>
            <button
              onClick={addRuleGroup}
              className="flex items-center space-x-2 text-purple-600 hover:text-purple-700"
            >
              <Plus className="w-4 h-4" />
              <span>Add Rule Group</span>
            </button>
          </div>

          {ruleGroups.map((group, groupIndex) => (
            <div key={group.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50/50">
              {groupIndex > 0 && (
                <div className="text-center mb-4">
                  <select
                    value={group.operator}
                    onChange={(e) => {
                      setRuleGroups(groups =>
                        groups.map(g => g.id === group.id ? { ...g, operator: e.target.value as 'AND' | 'OR' } : g)
                      );
                    }}
                    className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    <option value="AND">AND</option>
                    <option value="OR">OR</option>
                  </select>
                </div>
              )}

              <div className="space-y-3">
                {group.rules.map((rule, ruleIndex) => (
                  <div key={rule.id} className="flex items-center space-x-3">
                    {ruleIndex > 0 && (
                      <span className="text-sm text-gray-500 font-medium">AND</span>
                    )}
                    <select
                      value={rule.field}
                      onChange={(e) => updateRule(group.id, rule.id, 'field', e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      {fields.map(field => (
                        <option key={field.value} value={field.value}>{field.label}</option>
                      ))}
                    </select>
                    <select
                      value={rule.operator}
                      onChange={(e) => updateRule(group.id, rule.id, 'operator', e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded-lg"
                    >
                      {operators.map(op => (
                        <option key={op.value} value={op.value}>{op.label}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      value={rule.value}
                      onChange={(e) => updateRule(group.id, rule.id, 'value', e.target.value)}
                      placeholder="Value"
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg"
                    />
                    <button
                      onClick={() => removeRule(group.id, rule.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => addRule(group.id)}
                  className="text-purple-600 hover:text-purple-700 text-sm flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add Rule</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3 mb-2">
            <Users className="w-5 h-5 text-blue-600" />
            <h4 className="font-medium text-blue-800">Audience Preview</h4>
          </div>
          <p className="text-blue-700">
            This segment will target approximately <strong>{estimatedSize.toLocaleString()}</strong> customers
          </p>
        </div>

        {/* Actions */}
        <div className="flex space-x-4 mt-6">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex-1">
            Save Segment & Create Campaign
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
            Save as Draft
          </button>
        </div>
      </div>
    </div>
  );
};
