import React from 'react';

export default function BillingOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Current Balance</h3>
        <p className="text-2xl font-bold text-white">$150.00</p>
      </div>
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Credits Remaining</h3>
        <p className="text-2xl font-bold text-white">1,200</p>
      </div>
      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <h3 className="text-gray-300 text-sm mb-2">Next Billing Date</h3>
        <p className="text-2xl font-bold text-white">Jan 15, 2024</p>
      </div>
    </div>
  );
}
