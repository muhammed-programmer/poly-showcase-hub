import Header from "@/components/Header";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">About AAPOLY Project Showcase</h1>
        
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg text-muted-foreground">
            Welcome to the Abraham Adesanya Polytechnic Project Showcase Platform - 
            a digital hub for innovation, collaboration, and academic excellence.
          </p>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p>
              To provide a comprehensive platform where students can showcase their 
              innovative projects, collaborate with peers, and build professional 
              portfolios that demonstrate their skills and creativity.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Platform Features</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Project upload and management system</li>
              <li>Department-wise project categorization</li>
              <li>Student profiles and portfolios</li>
              <li>Project rating and feedback system</li>
              <li>Search and filter capabilities</li>
              <li>Activity tracking and notifications</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Student Information</h2>
            <div className="bg-muted p-6 rounded-lg">
              <p className="font-semibold">Project Owner:</p>
              <p className="text-lg">OGUNSANYA ESTHER ADURAGBEMI</p>
              <p className="text-sm text-muted-foreground mt-2">
                Abraham Adesanya Polytechnic, Ijebu Igbo
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
