import React from 'react';
import Navbar from '../Navbar';

interface EditorLayoutProps {
  children: React.ReactNode;
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="min-h-screen bg-deep-purple-900 flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        {children}
      </div>
    </div>
  );
}
