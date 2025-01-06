import React from 'react';
import { EditorProvider } from '../contexts/EditorContext';
import EditorLayout from '../components/editor/EditorLayout';
import VideoPreview from '../components/editor/VideoPreview';
import Timeline from '../components/editor/Timeline';
import MediaPanel from '../components/editor/MediaPanel';
import AIPanel from '../components/editor/AIPanel';
import PropertiesPanel from '../components/editor/PropertiesPanel';

export default function Editor() {
  return (
    <EditorProvider>
      <EditorLayout>
        <div className="flex-1 flex flex-col">
          <VideoPreview />
          <Timeline />
        </div>
        <div className="w-80 border-l border-deep-purple-600">
          <MediaPanel />
          <AIPanel />
          <PropertiesPanel />
        </div>
      </EditorLayout>
    </EditorProvider>
  );
}
