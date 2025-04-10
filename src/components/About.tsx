
import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section bg-secondary/30">
      <div className="container-custom">
        <h2 className="heading text-center mb-12">About Me</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-1 lg:col-span-2 space-y-6">
            <p className="text-lg">
              I'm a Mathematics Honours student at Delhi University with a passion for the intersection of mathematics, data analysis, and web development. I enjoy solving complex problems and creating innovative solutions using both mathematical principles and programming.
            </p>
            
            <p className="text-lg">
              My academic journey began at Jawahar Navodaya Vidyalaya, Agra, where I developed a strong foundation in mathematics and analytical thinking. Currently, at Delhi University, I'm expanding my knowledge in advanced mathematical concepts while also pursuing my interest in technology and data science.
            </p>
            
            <p className="text-lg">
              When I'm not studying or coding, you can find me exploring new data visualization techniques, participating in mathematics competitions, or contributing to open-source projects.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="subheading">Education</h3>
            
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Mathematics Honours</h4>
                  <p className="text-muted-foreground">Delhi University, Present</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <BookOpen className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Higher Secondary Education</h4>
                  <p className="text-muted-foreground">Jawahar Navodaya Vidyalaya, Agra</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-primary/10 p-2 rounded-md">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold">Achievements</h4>
                  <ul className="text-muted-foreground list-disc list-inside">
                    <li>Mathematics Olympiad Finalist</li>
                    <li>University Merit Scholar</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
