import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Download, Star, Calendar, User, BookOpen } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Mock project data - will be replaced with real data from backend
  const project = {
    id: id,
    title: "Smart Campus Energy Management System",
    department: "Electrical Engineering",
    status: "Approved",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
    author: "Adebayo Johnson",
    studentId: "AAPOLY/EE/2022/1234",
    views: 342,
    likes: 67,
    downloads: 123,
    rating: 4.8,
    dateSubmitted: "March 15, 2024",
    description: `This project presents an innovative approach to managing energy consumption across the Abraham Adesanya Polytechnic campus. 
    The system utilizes IoT sensors and machine learning algorithms to monitor and optimize energy usage in real-time.`,
    abstract: `Energy management is crucial for modern educational institutions. This project implements a smart energy management 
    system that reduces energy consumption by up to 30% through intelligent monitoring and automated control systems.`,
    features: [
      "Real-time energy monitoring",
      "Automated load balancing",
      "Predictive maintenance alerts",
      "Mobile app integration",
      "Cost optimization algorithms"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="mb-6">
          <Link to="/projects" className="text-primary hover:underline">
            ← Back to Projects
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <Badge 
                className={`absolute top-4 left-4 ${
                  project.status === "Approved" 
                    ? "bg-badge-approved text-white" 
                    : "bg-badge-pending text-accent-foreground"
                }`}
              >
                {project.status}
              </Badge>
            </div>

            <div>
              <Badge variant="outline" className="mb-4">{project.department}</Badge>
              <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
              
              <div className="flex items-center gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5" />
                  <span>{project.views} views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  <span>{project.likes} likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  <span>{project.downloads} downloads</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-accent text-accent" />
                  <span>{project.rating}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-semibold mb-4">Project Description</h2>
                <p className="text-muted-foreground mb-6">{project.description}</p>
                
                <h2 className="text-2xl font-semibold mb-4">Abstract</h2>
                <p className="text-muted-foreground mb-6">{project.abstract}</p>
                
                <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">Project Details</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Author</p>
                      <p className="font-medium">{project.author}</p>
                      <p className="text-sm text-muted-foreground">{project.studentId}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Department</p>
                      <p className="font-medium">{project.department}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date Submitted</p>
                      <p className="font-medium">{project.dateSubmitted}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 space-y-2">
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download Project
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Like Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Related Projects</h3>
                <div className="space-y-3">
                  <Link to="/project/2" className="block p-3 hover:bg-muted rounded-lg transition-colors">
                    <p className="font-medium text-sm">Solar Powered Water Pump</p>
                    <p className="text-xs text-muted-foreground">Electrical Engineering</p>
                  </Link>
                  <Link to="/project/3" className="block p-3 hover:bg-muted rounded-lg transition-colors">
                    <p className="font-medium text-sm">Home Automation System</p>
                    <p className="text-xs text-muted-foreground">Electrical Engineering</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetails;
