import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CodingProfiles } from '@/components/coding-profiles';
import { TypingEffect } from '@/components/typing-effect';

export function Home() {
  return (
    <div className="container py-24">
      <div className="grid gap-24 lg:grid-cols-2 lg:gap-32 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="space-y-8">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              <TypingEffect text="Hi, I'm Pratyush Puri Goswami" />
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              <TypingEffect 
                text="I am a passionate coder and developer. I love developing full-stack projects in every domain, but I love Next.js, React and Python based more. Also, I am involved in competitive coding as well. I am proficient in languages like Java and Python with object oriented programming expertise as well."
                delay={50}
              />
            </p>
          </div>
          <motion.div
            className="flex flex-col gap-4 min-[400px]:flex-row"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Button 
              asChild 
              size="lg" 
              className="text-lg bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl shadow-2xl">
            <img
              src="/profile.png"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
      <CodingProfiles />
    </div>
  );
}