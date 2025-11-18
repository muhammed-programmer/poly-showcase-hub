import { Button } from "@/components/ui/button";
import { ArrowRight, Award, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-secondary/90" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Showcase Your{" "}
              <span className="text-accent">Polytechnic Excellence</span>
            </h1>
            <p className="text-lg text-white/90 max-w-xl">
              Welcome to Abraham Adesanya Polytechnic Project Showcase. Share your innovative projects, collaborate with peers, and build your professional portfolio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/auth?tab=signup">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                <Link to="/projects">Explore Projects</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                  <BookOpen className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">1,200+ Projects</h3>
                  <p className="text-white/80">Across all departments</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">500+ Students</h3>
                  <p className="text-white/80">Active contributors</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start space-x-4">
                <div className="h-12 w-12 rounded-lg bg-accent flex items-center justify-center">
                  <Award className="h-6 w-6 text-accent-foreground" />
                </div>
                <div className="text-white">
                  <h3 className="text-2xl font-bold">Top Rated</h3>
                  <p className="text-white/80">Excellence in education</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
