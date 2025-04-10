
import React from 'react';
import { Download, ExternalLink, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container-custom">
        <h2 className="heading text-center mb-8">Resume</h2>
        
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="bg-secondary/50 p-6 md:p-10 rounded-lg max-w-3xl w-full mx-auto text-center">
            <FileText className="h-16 w-16 mx-auto mb-6 text-primary/80" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3">My Resume</h3>
            <p className="text-muted-foreground mb-6">
              Download my resume to learn more about my education, skills, and work experience.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="flex items-center gap-2">
                <Download size={16} />
                Download PDF
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <ExternalLink size={16} />
                View Online
              </Button>
            </div>
          </div>
          
          <div className="max-w-3xl w-full">
            <h3 className="subheading mb-6">Academic Timeline</h3>
            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-secondary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">2022 - Present</span>
                  <h4 className="text-lg font-semibold">Bachelor of Mathematics (Honours)</h4>
                  <p className="text-muted-foreground">Delhi University, Delhi</p>
                  <p className="mt-2">
                    Currently pursuing advanced studies in mathematics with a focus on computational mathematics and data analysis.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8 pb-8 border-l-2 border-secondary">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">2020 - 2022</span>
                  <h4 className="text-lg font-semibold">Higher Secondary Education</h4>
                  <p className="text-muted-foreground">Jawahar Navodaya Vidyalaya, Agra</p>
                  <p className="mt-2">
                    Completed higher secondary education with a specialization in Mathematics and Science.
                  </p>
                </div>
              </div>
              
              <div className="relative pl-8">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-2">2019 - 2020</span>
                  <h4 className="text-lg font-semibold">Secondary Education</h4>
                  <p className="text-muted-foreground">Jawahar Navodaya Vidyalaya, Agra</p>
                  <p className="mt-2">
                    Completed secondary education with distinction in Mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
