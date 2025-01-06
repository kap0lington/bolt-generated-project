import React from 'react';
import { useDevFeatures } from '../../contexts/DevFeaturesContext';

export default function ResponseSourceIndicator() {
  const { isDevMode } = useDevFeatures();

  if (!isDevMode) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-deep-purple-800 text-white px-4 py-2 rounded-lg text-sm">
      API Response Source: {process.env.NODE_ENV === 'development' ? 'Mock' : 'Production'}
    </div>
  );
}
