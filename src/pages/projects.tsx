import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Car, FileText, Sprout } from 'lucide-react';

const projects = [
  {
    title: '🌾 AgriVision: SMART CROP MANAGEMENT 🚜',
    description: 'A cutting-edge platform designed to revolutionize crop management with advanced AI and deep learning techniques.',
    icon: Sprout,
    link: 'https://github.com/ProgrammerPratyush/AgriVision-Farmer-s-Mitra-2024',
  },
  {
    title: 'License Document Reader',
    description: 'A React application for reading and processing license documents efficiently.',
    icon: FileText,
    link: 'https://github.com/ProgrammerPratyush/License-or-document-reader-React-App',
  },
  {
    title: 'RAG-Based QA Bot',
    description: 'An interactive QA bot using Retrieval-Augmented Generation for answering questions from documents.',
    icon: Brain,
    link: 'https://github.com/ProgrammerPratyush/RAG-Model-for-QA-Bot',
  },
  {
    title: 'Driver Drowsiness Detection System',
    description: 'ML solution addressing driver sleepiness using innovative image processing techniques.',
    icon: Car,
    link: 'https://github.com/ProgrammerPratyush/Driver-Drowsiness-Detection-System',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Projects() {
  return (
    <div className="container py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center text-center mb-12"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-foreground">My Projects</h1>
        <p className="mt-4 text-muted-foreground max-w-[600px]">
          Explore my portfolio of innovative projects in AI, Machine Learning, and Web Development.
        </p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.div key={index} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <project.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="text-foreground">{project.title}</CardTitle>
                </div>
                <CardDescription className="mt-4 text-muted-foreground">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Explore Project
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}