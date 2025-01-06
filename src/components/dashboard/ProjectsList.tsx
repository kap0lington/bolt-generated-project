import React from 'react';
import { MoreVertical, Play } from 'lucide-react';

const projects = [
  {
    title: 'Product Launch Video',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    status: 'Complete',
    date: 'Mar 15, 2024',
  },
  {
    title: 'Company Overview',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    status: 'Rendering',
    date: 'Mar 14, 2024',
  },
];

export default function ProjectsList() {
  return (
    <div className="bg-deep-purple-800 rounded-xl p-6 border border-deep-purple-600">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white">Recent Projects</h3>
        <button className="text-sm text-accent-purple hover:text-neon-purple">View All</button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div key={project.title} className="flex items-center gap-4 p-4 bg-deep-purple-900 rounded-lg">
            <div className="relative w-24 h-16 rounded-lg overflow-hidden">
              <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
              <button className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 hover:opacity-100 transition-opacity">
                <Play className="h-6 w-6 text-white" />
              </button>
            </div>
            <div className="flex-1">
              <h4 className="text-white font-medium">{project.title}</h4>
              <p className="text-sm text-gray-400">{project.date}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              project.status === 'Complete' 
                ? 'bg-green-500/20 text-green-400'
                : 'bg-yellow-500/20 text-yellow-400'
            }`}>
              {project.status}
            </span>
            <button className="text-gray-400 hover:text-white">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
