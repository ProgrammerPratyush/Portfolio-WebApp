import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Github, Linkedin, Mail, Phone } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
      <Card className="p-6">
        <CardHeader>
          <CardTitle className="text-2xl">PRATYUSH PURI GOSWAMI</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-base"
              asChild
            >
              <a href="tel:+919302841594">
                <Phone className="h-5 w-5" />
                +91 9302841594
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-base"
              asChild
            >
              <a href="mailto:ppurigoswami2002@gmail.com">
                <Mail className="h-5 w-5" />
                ppurigoswami2002@gmail.com
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-base"
              asChild
            >
              <a
                href="https://www.linkedin.com/in/pratyush-puri-goswami-036285200/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn Profile
              </a>
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start gap-2 text-base"
              asChild
            >
              <a
                href="https://github.com/ProgrammerPratyush"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
                GitHub Profile
              </a>
            </Button>
          </div>
          <Button className="w-full text-base gap-2" asChild>
            <a
              href="https://drive.google.com/file/d/13QoSF9McUlx0JGDnCmc0rLF1BpYww-ub/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="h-5 w-5" />
              View Resume
            </a>
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}