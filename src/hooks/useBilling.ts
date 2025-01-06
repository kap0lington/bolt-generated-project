import { useState, useEffect } from 'react';

interface Transaction {
  id: string;
  type: string;
  amount: number;
  description: string;
  createdAt: string;
}

interface Credits {
  creditsUsed: number;
  creditsRemaining: number;
  monthlyLimit: number;
}

interface Subscription {
  planType: 'free' | 'basic' | 'pro' | 'business';
  status: string;
  currentPeriodStart: string;
  currentPeriodEnd: string;
}

interface BillingData {
  credits: Credits;
  subscription: Subscription;
  transactions: Transaction[];
}

export function useBilling() {
  const [credits, setCredits] = useState<Credits | null>(null);
  const [subscription, setSubscription] = useState<Subscription | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBillingData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setCredits({
          creditsUsed: 1200,
          creditsRemaining: 800,
          monthlyLimit: 2000
        });
        setSubscription({
          planType: 'pro',
          status: 'active',
          currentPeriodStart: '2024-03-01',
          currentPeriodEnd: '2024-03-31'
        });
        setTransactions([
          {
            id: '1',
            type: 'purchase',
            amount: 500,
            description: 'Credits purchase',
            createdAt: '2024-03-15'
          },
          {
            id: '2',
            type: 'subscription',
            amount: -200,
            description: 'Monthly subscription',
            createdAt: '2024-03-01'
          },
          {
            id: '3',
            type: 'usage',
            amount: -100,
            description: 'Video generation',
            createdAt: '2024-02-28'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchBillingData();
  }, []);

  return { credits, subscription, transactions, loading };
}
