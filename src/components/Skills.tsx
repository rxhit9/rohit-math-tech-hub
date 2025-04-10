
import React from 'react';
import { Progress } from '@/components/ui/progress';
import { Code, LineChart, Calculator, Database } from 'lucide-react';

const Skills = () => {
  const webDevSkills = [
    { name: 'HTML/CSS', proficiency: 85 },
    { name: 'JavaScript', proficiency: 80 },
    { name: 'React', proficiency: 75 },
    { name: 'Responsive Design', proficiency: 90 },
  ];

  const dataAnalysisSkills = [
    { name: 'Python', proficiency: 85 },
    { name: 'Pandas/NumPy', proficiency: 80 },
    { name: 'Data Visualization', proficiency: 90 },
    { name: 'Excel Advanced', proficiency: 95 },
  ];

  const mathSkills = [
    { name: 'Calculus', proficiency: 95 },
    { name: 'Linear Algebra', proficiency: 90 },
    { name: 'Statistics', proficiency: 85 },
    { name: 'Discrete Mathematics', proficiency: 80 },
  ];

  return (
    <section id="skills" className="section">
      <div className="container-custom">
        <h2 className="heading text-center mb-12">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development Skills */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-2 rounded-md">
                <Code className="text-blue-600" size={24} />
              </div>
              <h3 className="subheading mb-0">Web Development</h3>
            </div>
            
            <div className="space-y-4">
              {webDevSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Data Analysis Skills */}
          <div className="bg-white rounded-lg p-6 shadow-sm border">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-2 rounded-md">
                <LineChart className="text-green-600" size={24} />
              </div>
              <h3 className="subheading mb-0">Data Analysis</h3>
            </div>
            
            <div className="space-y-4">
              {dataAnalysisSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Mathematical Skills */}
          <div className="bg-white rounded-lg p-6 shadow-sm border md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-2 rounded-md">
                <Calculator className="text-purple-600" size={24} />
              </div>
              <h3 className="subheading mb-0">Mathematical Skills</h3>
            </div>
            
            <div className="space-y-4">
              {mathSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.proficiency}%</span>
                  </div>
                  <Progress value={skill.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Additional Skills */}
        <div className="mt-12">
          <h3 className="subheading text-center mb-6">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Git', 'SQL', 'R Programming', 'Machine Learning', 'MATLAB', 
              'LaTeX', 'Problem Solving', 'Research Methods', 'Data Mining', 
              'Statistical Modeling'].map((skill) => (
              <span 
                key={skill}
                className="bg-secondary px-4 py-2 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
