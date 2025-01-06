import React from 'react';
import { useBilling } from '../../hooks/useBilling';
import { formatDate } from '../../utils/dateFormatting';

const planFeatures = {
  free: ['3 videos per month', 'Basic AI features', '1GB storage'],
  basic: ['10 videos per month', 'Standard AI features', '5GB storage'],
  pro: ['30 videos per month', 'Advanced AI features', '15GB storage'],
  business: ['Unlimited videos', 'Priority AI processing', '50GB storage']
};

export default function SubscriptionDetails() {
  const { subscription } = useBilling();
  const features = subscription ? planFeatures[subscription.planType] : planFeatures.free;

  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <h3 className="text-xl font-bold text-white mb-6">Subscription Details</h3>
      
      <div className="space-y-6">
        <div>
          <p className="text-sm text-gray-400">Status</p>
          <p className="text-lg font-medium text-white capitalize">
            {subscription?.status || 'Free Trial'}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-400">Current Period</p>
          {subscription ? (
            <p className="text-lg text-white">
              {formatDate(subscription.currentPeriodStart)} - {formatDate(subscription.currentPeriodEnd)}
            </p>
          ) : (
            <p className="text-lg text-white">Not subscribed</p>
          )}
        </div>

        <div>
          <p className="text-sm text-gray-400 mb-2">Plan Features</p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent-purple rounded-full" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <button className="w-full bg-accent-purple hover:bg-neon-purple text-white py-2 rounded-lg transition-colors">
          {subscription ? 'Manage Subscription' : 'Upgrade Plan'}
        </button>
      </div>
    </div>
  );
}
