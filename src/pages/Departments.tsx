import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const departments = [
  {
    name: "Computer Science",
    projectCount: 245,
    color: "bg-primary",
  },
  {
    name: "Electrical Engineering",
    projectCount: 189,
    color: "bg-accent",
  },
  {
    name: "Civil Engineering",
    projectCount: 156,
    color: "bg-secondary",
  },
  {
    name: "Business Administration",
    projectCount: 198,
    color: "bg-primary",
  },
  {
    name: "Accounting",
    projectCount: 143,
    color: "bg-accent",
  },
  {
    name: "Mass Communication",
    projectCount: 112,
    color: "bg-secondary",
  },
];

const Departments = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Departments</h1>
          <p className="text-muted-foreground">
            Explore projects by department at Abraham Adesanya Polytechnic
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Link 
              key={dept.name} 
              to={`/department/${dept.name.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                <CardHeader>
                  <div className={`h-2 w-full ${dept.color} rounded-full mb-4`} />
                  <CardTitle>{dept.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Badge variant="secondary" className="text-lg">
                    {dept.projectCount} Projects
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Departments;
