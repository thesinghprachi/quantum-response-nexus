
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  HelpCircle, Search, Book, FileQuestion, MessageSquare, 
  PlayCircle, Compass, Lightbulb, CheckCircle, Download 
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Help = () => {
  return (
    <MainLayout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">Help & Support</h1>
        <p className="text-muted-foreground">
          Documentation, guides, and support resources
        </p>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <input
            type="text"
            placeholder="Search for help topics..."
            className="w-full bg-background border border-border rounded-md pl-10 pr-4 py-2"
          />
        </div>
      </div>

      <Card className="mb-6">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <Compass className="h-5 w-5 text-accent" />
            Quick Links
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <QuickLinkCard
              icon={<Book className="h-8 w-8 text-blue-400" />}
              title="User Manual"
              description="Full system documentation"
            />
            <QuickLinkCard
              icon={<PlayCircle className="h-8 w-8 text-green-400" />}
              title="Video Tutorials"
              description="Step-by-step video guides"
            />
            <QuickLinkCard
              icon={<MessageSquare className="h-8 w-8 text-purple-400" />}
              title="Contact Support"
              description="Get help from our team"
            />
            <QuickLinkCard
              icon={<FileQuestion className="h-8 w-8 text-amber-400" />}
              title="FAQs"
              description="Frequently asked questions"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2 text-lg">
            <HelpCircle className="h-5 w-5 text-accent" />
            Help Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="faq" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="faq">FAQs</TabsTrigger>
              <TabsTrigger value="tutorials">Tutorials</TabsTrigger>
              <TabsTrigger value="support">Support</TabsTrigger>
              <TabsTrigger value="downloads">Downloads</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq" className="space-y-4">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>
                    How do I create an emergency response plan?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To create an emergency response plan, navigate to the Dashboard and click on the "New Plan" button. 
                      Follow the guided workflow to define emergency types, assign resources, and establish communication protocols.
                      You can also use our AI-powered templates to get started quickly.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent mt-2">
                      View detailed guide
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2">
                  <AccordionTrigger>
                    How does the Quantum AI prediction work?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our Quantum AI prediction system utilizes advanced quantum computing algorithms to process vast amounts 
                      of environmental, geological, and historical data. The system identifies patterns and risk factors to 
                      predict potential disaster occurrences with high accuracy. The system updates in real-time as new data 
                      becomes available.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent mt-2">
                      View technical documentation
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3">
                  <AccordionTrigger>
                    Can I customize resource allocation parameters?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Yes, resource allocation parameters can be customized in the Resource Map section. Click on the gear icon 
                      in the top right corner to access settings. You can define priority levels, create custom resource categories, 
                      and set distribution rules based on your organization's needs.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4">
                  <AccordionTrigger>
                    How do I set up drone mission automation?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      To set up drone mission automation, go to Drone Control and select the "Automation" tab. Create mission 
                      templates with predefined parameters like flight paths, altitudes, and payloads. Then, set trigger conditions 
                      that will automatically launch these missions when certain events occur.
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent mt-2">
                      Watch tutorial video
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-5">
                  <AccordionTrigger>
                    How is blockchain used to verify resource tracking?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">
                      Our system uses blockchain technology to create immutable records of all resource movements and allocations. 
                      Each transaction is verified by multiple nodes in the network, ensuring transparency and preventing 
                      unauthorized modifications. This creates an audit trail that can be used for compliance reporting and 
                      post-disaster analysis.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Button variant="link" className="p-0 h-auto text-accent">
                View all FAQs →
              </Button>
            </TabsContent>
            
            <TabsContent value="tutorials" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <TutorialCard 
                  title="Getting Started Guide" 
                  duration="5 min"
                  difficulty="Beginner"
                />
                <TutorialCard 
                  title="Advanced Resource Allocation" 
                  duration="10 min"
                  difficulty="Intermediate"
                />
                <TutorialCard 
                  title="Configuring Drone Missions" 
                  duration="12 min"
                  difficulty="Intermediate"
                />
                <TutorialCard 
                  title="Using Quantum AI Predictions" 
                  duration="15 min"
                  difficulty="Advanced"
                />
              </div>
              
              <Button variant="link" className="p-0 h-auto text-accent">
                Browse all tutorials →
              </Button>
            </TabsContent>
            
            <TabsContent value="support" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <MessageSquare className="h-10 w-10 text-accent mx-auto mb-2" />
                      <h3 className="font-medium text-lg">Live Chat Support</h3>
                      <p className="text-muted-foreground">
                        Chat with our support team in real-time
                      </p>
                    </div>
                    <Button className="w-full bg-accent hover:bg-accent/80">
                      Start Chat
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <MessageSquare className="h-10 w-10 text-blue-400 mx-auto mb-2" />
                      <h3 className="font-medium text-lg">Email Support</h3>
                      <p className="text-muted-foreground">
                        Send us a detailed message
                      </p>
                    </div>
                    <Button variant="outline" className="w-full">
                      Contact via Email
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardContent className="pt-6">
                    <h3 className="font-medium text-lg mb-4">Submit a Support Ticket</h3>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Name</label>
                          <input type="text" className="w-full bg-background border border-border rounded-md p-2" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium">Email</label>
                          <input type="email" className="w-full bg-background border border-border rounded-md p-2" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Subject</label>
                        <input type="text" className="w-full bg-background border border-border rounded-md p-2" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Description</label>
                        <textarea className="w-full bg-background border border-border rounded-md p-2 min-h-[100px]"></textarea>
                      </div>
                      <div className="text-right">
                        <Button className="bg-accent hover:bg-accent/80">
                          Submit Ticket
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="downloads" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <DownloadCard 
                  title="User Manual PDF" 
                  size="2.4 MB"
                  type="PDF"
                />
                <DownloadCard 
                  title="Quick Start Guide" 
                  size="1.1 MB"
                  type="PDF"
                />
                <DownloadCard 
                  title="API Documentation" 
                  size="3.5 MB"
                  type="PDF"
                />
                <DownloadCard 
                  title="Offline Database" 
                  size="45 MB"
                  type="ZIP"
                />
                <DownloadCard 
                  title="Mobile App" 
                  size="12 MB"
                  type="APK"
                />
                <DownloadCard 
                  title="Desktop Client" 
                  size="64 MB"
                  type="EXE"
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </MainLayout>
  );
};

interface QuickLinkCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const QuickLinkCard = ({ icon, title, description }: QuickLinkCardProps) => {
  return (
    <div className="border rounded-lg p-4 hover:bg-accent/5 hover:border-accent/30 transition-colors cursor-pointer">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3">
          {icon}
        </div>
        <h3 className="font-medium mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

interface TutorialCardProps {
  title: string;
  duration: string;
  difficulty: string;
}

const TutorialCard = ({ title, duration, difficulty }: TutorialCardProps) => {
  const getDifficultyColor = () => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/20 text-green-500';
      case 'Intermediate': return 'bg-blue-500/20 text-blue-500';
      case 'Advanced': return 'bg-purple-500/20 text-purple-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };
  
  return (
    <div className="border rounded-lg p-4 flex items-center hover:bg-accent/5 hover:border-accent/30 transition-colors cursor-pointer">
      <div className="mr-4">
        <PlayCircle className="h-10 w-10 text-accent" />
      </div>
      <div className="flex-1">
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="flex items-center gap-2 text-xs">
          <span className="text-muted-foreground">{duration}</span>
          <span className={`px-2 py-0.5 rounded-full ${getDifficultyColor()}`}>
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
};

interface DownloadCardProps {
  title: string;
  size: string;
  type: string;
}

const DownloadCard = ({ title, size, type }: DownloadCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case 'PDF': return 'bg-red-500/20 text-red-500';
      case 'ZIP': return 'bg-yellow-500/20 text-yellow-500';
      case 'APK': return 'bg-green-500/20 text-green-500';
      case 'EXE': return 'bg-blue-500/20 text-blue-500';
      default: return 'bg-gray-500/20 text-gray-500';
    }
  };
  
  return (
    <div className="border rounded-lg p-4 flex items-center justify-between hover:bg-accent/5 hover:border-accent/30 transition-colors cursor-pointer">
      <div className="flex items-center">
        <div className={`w-10 h-10 rounded flex items-center justify-center mr-3 ${getTypeColor()}`}>
          {type}
        </div>
        <div>
          <h3 className="font-medium mb-1">{title}</h3>
          <div className="text-xs text-muted-foreground">{size}</div>
        </div>
      </div>
      <Button size="icon" variant="ghost">
        <Download className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Help;
