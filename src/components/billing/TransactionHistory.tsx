import React from 'react';
import { useBilling } from '../../hooks/useBilling';
import { formatDate } from '../../utils/dateFormatting';

export default function TransactionHistory() {
  const { transactions, loading } = useBilling();

  if (loading) {
    return (
      <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600 animate-pulse">
        <div className="h-6 w-48 bg-deep-purple-700 rounded mb-6" />
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-deep-purple-700 rounded" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <h3 className="text-xl font-bold text-white mb-6">Transaction History</h3>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-400 border-b border-deep-purple-600">
              <th className="pb-3">Date</th>
              <th className="pb-3">Type</th>
              <th className="pb-3">Amount</th>
              <th className="pb-3">Description</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-deep-purple-600">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="text-white">
                <td className="py-3">{formatDate(transaction.createdAt)}</td>
                <td className="py-3 capitalize">{transaction.type}</td>
                <td className="py-3">{transaction.amount} credits</td>
                <td className="py-3 text-gray-400">{transaction.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
