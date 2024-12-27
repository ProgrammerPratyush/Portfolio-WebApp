import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';

export function Contact() {
  return (
    <div className="container min-h-[calc(100vh-5rem)] py-16 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xl mx-auto px-4"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Contact Me
        </h2>
        <Card className="p-8 bg-gradient-to-r from-background to-accent/5">
          <CardHeader className="pb-8">
            <CardTitle className="text-3xl text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              PRATYUSH PURI GOSWAMI
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid gap-6">
              {[
                { icon: Phone, text: '+91 9302841594', href: 'tel:+919302841594' },
                { icon: Mail, text: 'ppurigoswami2002@gmail.com', href: 'mailto:ppurigoswami2002@gmail.com' },
                { icon: Linkedin, text: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/pratyush-puri-goswami-036285200/' },
                { icon: Github, text: 'GitHub Profile', href: 'https://github.com/ProgrammerPratyush' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="w-full"
                >
                  <Button
                    variant="outline"
                    className="w-full justify-center gap-3 text-base py-6 border-primary/20 hover:border-primary/40"
                    asChild
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <item.icon className="h-5 w-5 text-primary" />
                      {item.text}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full pt-4"
            >
              <Button 
                className="w-full text-base gap-3 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/13QoSF9McUlx0JGDnCmc0rLF1BpYww-ub/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="h-5 w-5" />
                  View Resume
                </a>
              </Button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}