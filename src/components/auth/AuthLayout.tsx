import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-deep-purple-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-deep-purple-800 rounded-2xl p-8">
        {children}
      </div>
    </div>
  );
}
