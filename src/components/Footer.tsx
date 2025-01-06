import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const footerLinks = {
  product: ['Features', 'Pricing', 'Templates', 'Showcase', 'Dashboard'],
  resources: ['Documentation', 'API Reference', 'Blog', 'Community'],
  company: ['About', 'Careers', 'Contact', 'Press Kit'],
  legal: ['Privacy', 'Terms', 'Security', 'Cookies'],
};

const seoCategories = [
  {
    title: 'AI Video Creation',
    items: [
      'Text-to-video platform',
      'AI video generator',
      'Video production automation',
      'AI-powered video editor',
    ]
  },
  {
    title: 'Content Creation',
    items: [
      'Script writing with AI',
      'Video script generator',
      'AI-driven content creation',
      'Marketing video creator',
    ]
  },
  {
    title: 'Professional Tools',
    items: [
      'Drag-and-drop video editor',
      'Cloud-based video editing',
      'Video analytics dashboard',
      'Custom branding for videos',
    ]
  }
];

export default function Footer() {
  const renderLink = (link: string) => {
    if (link === 'Dashboard') {
      return (
        <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors text-sm">
          {link}
        </Link>
      );
    }
    return (
      <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
        {link}
      </a>
    );
  };

  return (
    <footer className="bg-deep-purple-800 border-t border-deep-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-6 w-6 text-neon-purple" />
              <span className="font-space font-bold text-xl text-white">AI Motion</span>
            </div>
            <p className="text-gray-300 mb-4">
              Transform your ideas into stunning videos with the power of AI.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-space font-medium text-white mb-4 capitalize">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* SEO Categories */}
        <div className="border-t border-deep-purple-600 pt-12 mb-12">
          <div className="grid md:grid-cols-3 gap-8">
            {seoCategories.map((category) => (
              <div key={category.title} className="space-y-4">
                <h4 className="text-white font-space font-medium">{category.title}</h4>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="group">
                      <a href="#" className="text-gray-400 hover:text-accent-purple text-sm flex items-center gap-2 transition-colors">
                        <ChevronRight className="h-3 w-3 text-deep-purple-600 group-hover:text-accent-purple transition-colors" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-deep-purple-600 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 AI Motion. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
