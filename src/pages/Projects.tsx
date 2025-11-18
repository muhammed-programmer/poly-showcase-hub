import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Download, Star } from "lucide-react";
import { Link } from "react-router-dom";

const mockProjects = [
  {
    id: 1,
    title: "Smart Campus Energy Management System",
    department: "Electrical Engineering",
    status: "Approved",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
    author: "Adebayo Johnson",
    views: 342,
    likes: 67,
    downloads: 123,
    rating: 4.8,
  },
  {
    id: 2,
    title: "E-Commerce Platform for Local Artisans",
    department: "Computer Science",
    status: "Approved",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    author: "Chioma Okafor",
    views: 289,
    likes: 54,
    downloads: 98,
    rating: 4.6,
  },
  {
    id: 3,
    title: "Automated Water Quality Monitoring",
    department: "Environmental Science",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80",
    author: "Ibrahim Musa",
    views: 156,
    likes: 32,
    downloads: 45,
    rating: 4.5,
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Student Projects</h1>
          <p className="text-muted-foreground">Browse innovative projects from AAPOLY students</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
              </CardHeader>
              
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">{project.department}</Badge>
                <h3 className="text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">By {project.author}</p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Eye className="h-4 w-4" />
                    <span>{project.views}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4" />
                    <span>{project.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4" />
                    <span>{project.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span>{project.rating}</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link to={`/project/${project.id}`}>View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects;
