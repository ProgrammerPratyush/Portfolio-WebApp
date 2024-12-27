import { Link } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';
import { Code2, Home, Mail } from 'lucide-react';

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <div className="mr-8 flex">
          <Link to="/" className="mr-8 flex items-center space-x-3 hover:scale-105 transition-transform text-foreground">
            <Code2 className="h-8 w-8" />
            <span className="font-bold text-lg">Portfolio</span>
          </Link>
          <nav className="flex items-center space-x-8 text-base font-medium">
            <Button asChild variant="ghost" className="text-base hover:scale-105 transition-all text-foreground hover:text-primary">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Home
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-base hover:scale-105 transition-all text-foreground hover:text-primary">
              <Link to="/projects">
                <Code2 className="mr-2 h-5 w-5" />
                Projects
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-base hover:scale-105 transition-all text-foreground hover:text-primary">
              <Link to="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact
              </Link>
            </Button>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}