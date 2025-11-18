import Header from "@/components/Header";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Download, Star, Users, FileText } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const DepartmentDetails = () => {
  const { name } = useParams();
  
  // Mock department data - will be replaced with real data from backend
  const department = {
    name: name?.replace(/-/g, ' ') || "Computer Science",
    description: "The Computer Science department focuses on software development, algorithms, data structures, and emerging technologies.",
    totalProjects: 45,
    totalStudents: 120,
    head: "Dr. Oluwaseun Adeyemi"
  };

  const departmentProjects = [
    {
      id: 1,
      title: "E-Commerce Platform for Local Artisans",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      author: "Chioma Okafor",
      views: 289,
      likes: 54,
      downloads: 98,
      rating: 4.6,
    },
    {
      id: 2,
      title: "Student Attendance Management System",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      author: "Ibrahim Musa",
      views: 234,
      likes: 43,
      downloads: 76,
      rating: 4.5,
    },
    {
      id: 3,
      title: "Campus Navigation Mobile App",
      status: "Pending",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      author: "Fatima Hassan",
      views: 198,
      likes: 38,
      downloads: 52,
      rating: 4.4,
    },
    {
      id: 4,
      title: "Library Management System",
      status: "Approved",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80",
      author: "Emeka Obi",
      views: 156,
      likes: 32,
      downloads: 45,
      rating: 4.3,
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="mb-6">
          <Link to="/departments" className="text-primary hover:underline">
            ← Back to Departments
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{department.name}</h1>
          <p className="text-lg text-muted-foreground mb-6">{department.description}</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{department.totalProjects}</p>
                  <p className="text-sm text-muted-foreground">Total Projects</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{department.totalStudents}</p>
                  <p className="text-sm text-muted-foreground">Students</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground mb-1">Department Head</p>
                <p className="text-lg font-semibold">{department.head}</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Department Projects</h2>
          <p className="text-muted-foreground">Browse all projects from {department.name}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departmentProjects.map((project) => (
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
                <Badge variant="outline" className="mb-3">{department.name}</Badge>
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

export default DepartmentDetails;
