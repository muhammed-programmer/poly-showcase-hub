import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Upload } from "lucide-react";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
              A
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">AAPOLY</span>
              <span className="text-xs text-muted-foreground">Project Showcase</span>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search projects, students, departments..."
              className="pl-10"
            />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">
            Projects
          </Link>
          <Link to="/departments" className="text-sm font-medium hover:text-primary transition-colors">
            Departments
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Button asChild variant="secondary" size="sm">
            <Link to="/upload">
              <Upload className="mr-2 h-4 w-4" />
              Upload Project
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/auth">Sign In</Link>
          </Button>
          <Button asChild size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link to="/auth?tab=signup">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
