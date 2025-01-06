import React, { useState } from 'react';

export default function ScriptGenerator() {
  const [script, setScript] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    setIsGenerating(true);
    try {
      // TODO: Implement actual script generation
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setScript("Generated script content...");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter your script idea..."
          className="flex-1 bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg px-4 py-2"
        />
        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="bg-accent-purple hover:bg-neon-purple text-white px-6 py-2 rounded-lg"
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </button>
      </div>

      <div className="bg-deep-purple-800 p-6 rounded-lg">
        <textarea
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="w-full h-64 bg-deep-purple-700 border-deep-purple-600 text-white rounded-lg p-4"
          placeholder="Your generated script will appear here..."
        />
      </div>
    </div>
  );
}
