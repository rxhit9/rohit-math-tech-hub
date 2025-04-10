
import React, { useState } from 'react';
import { ExternalLink, Github, FileCode, ChartBar, BarChart3 } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing mathematical models and statistical data using D3.js and React.',
      image: 'placeholder.svg',
      category: 'web',
      tags: ['React', 'D3.js', 'JavaScript'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <ChartBar size={32} className="text-blue-500" />,
    },
    {
      id: 2,
      title: 'Statistical Analysis of Climate Data',
      description: 'Analysis of climate patterns using Python, Pandas, and advanced statistical methods to identify trends.',
      image: 'placeholder.svg',
      category: 'data',
      tags: ['Python', 'Pandas', 'Statistics'],
      github: 'https://github.com',
      demo: null,
      icon: <BarChart3 size={32} className="text-green-500" />,
    },
    {
      id: 3,
      title: 'Mathematical Modeling Tool',
      description: 'Web application for creating and visualizing mathematical models, with support for differential equations.',
      image: 'placeholder.svg',
      category: 'math',
      tags: ['JavaScript', 'Math.js', 'SVG'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <FileCode size={32} className="text-purple-500" />,
    },
    {
      id: 4,
      title: 'Personal Finance Tracker',
      description: 'Web application to track expenses and visualize spending patterns using charts and statistical analysis.',
      image: 'placeholder.svg',
      category: 'web',
      tags: ['React', 'Chart.js', 'Firebase'],
      github: 'https://github.com',
      demo: 'https://example.com',
      icon: <ChartBar size={32} className="text-blue-500" />,
    },
    {
      id: 5,
      title: 'Numerical Methods Library',
      description: 'A JavaScript library implementing various numerical methods for solving mathematical problems.',
      image: 'placeholder.svg',
      category: 'math',
      tags: ['JavaScript', 'Algorithms', 'Math'],
      github: 'https://github.com',
      demo: null,
      icon: <FileCode size={32} className="text-purple-500" />,
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A collection of my work in web development, data analysis, and mathematical modeling.
        </p>

        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1 bg-secondary/70 rounded-lg">
            <button 
              onClick={() => setFilter('all')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'all' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('web')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'web' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
            >
              Web Dev
            </button>
            <button 
              onClick={() => setFilter('data')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'data' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
            >
              Data Analysis
            </button>
            <button 
              onClick={() => setFilter('math')} 
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${filter === 'math' ? 'bg-white shadow-sm' : 'hover:bg-white/50'}`}
            >
              Math
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                  {project.icon}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-between p-4">
                  <div className="flex gap-2">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
                        aria-label="View source code on GitHub"
                      >
                        <Github size={18} className="text-white" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 p-2 rounded-full transition-colors"
                        aria-label="Visit live demo"
                      >
                        <ExternalLink size={18} className="text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs bg-secondary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
