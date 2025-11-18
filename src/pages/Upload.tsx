import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus } from "lucide-react";

const Upload = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container px-4 py-12 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Upload Your <span className="text-accent">Project</span>
          </h1>
          <p className="text-muted-foreground">
            Share your innovative work with the AAPOLY community
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Information</CardTitle>
            <CardDescription>
              Fill in the details about your project. All fields marked with * are required.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title *</Label>
                <Input id="title" placeholder="Enter your project title" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Project Category *</Label>
                <Select>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="software">Software Development</SelectItem>
                    <SelectItem value="hardware">Hardware/Electronics</SelectItem>
                    <SelectItem value="research">Research</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="business">Business/Innovation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select>
                  <SelectTrigger id="department">
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="computer-science">Computer Science</SelectItem>
                    <SelectItem value="electrical">Electrical Engineering</SelectItem>
                    <SelectItem value="civil">Civil Engineering</SelectItem>
                    <SelectItem value="business">Business Administration</SelectItem>
                    <SelectItem value="accounting">Accounting</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="session">Academic Session *</Label>
                <Select>
                  <SelectTrigger id="session">
                    <SelectValue placeholder="Select session" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2023-2024">2023-2024</SelectItem>
                    <SelectItem value="2022-2023">2022-2023</SelectItem>
                    <SelectItem value="2021-2022">2021-2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Project Description *</Label>
              <Textarea
                id="description"
                placeholder="Provide a detailed description of your project, including objectives, methodology, and outcomes..."
                rows={6}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="abstract">Abstract/Summary</Label>
              <Textarea
                id="abstract"
                placeholder="Brief summary of your project (optional)"
                rows={4}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="tags">Project Tags</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  placeholder="Add tags (e.g., AI, Web Development, IoT)"
                />
                <Button type="button" variant="outline" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="files">Project Files</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                <Input
                  id="files"
                  type="file"
                  multiple
                  className="hidden"
                />
                <label htmlFor="files" className="cursor-pointer">
                  <div className="space-y-2">
                    <div className="text-muted-foreground">
                      Click to upload or drag and drop
                    </div>
                    <div className="text-sm text-muted-foreground">
                      PDF, DOC, DOCX, Images, or ZIP files (Max 50MB)
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cover">Project Cover Image</Label>
              <Input id="cover" type="file" accept="image/*" />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="submit" className="flex-1">
                Submit Project
              </Button>
              <Button type="button" variant="outline" className="flex-1">
                Save as Draft
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Upload;
