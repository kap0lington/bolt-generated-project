import React, { createContext, useContext, useState } from 'react';

interface EditorContextType {
  currentProject: any;
  setCurrentProject: (project: any) => void;
  timelineItems: any[];
  setTimelineItems: (items: any[]) => void;
}

const EditorContext = createContext<EditorContextType>({
  currentProject: null,
  setCurrentProject: () => {},
  timelineItems: [],
  setTimelineItems: () => {}
});

export const EditorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [timelineItems, setTimelineItems] = useState([]);

  return (
    <EditorContext.Provider value={{
      currentProject,
      setCurrentProject,
      timelineItems,
      setTimelineItems
    }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = () => useContext(EditorContext);
