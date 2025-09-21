import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Check, X } from "lucide-react";

const tools = [
  {
    name: "GoHighLevel",
    description: "Complete marketing automation and CRM platform for agencies and businesses.",
    longDescription: "GoHighLevel is a comprehensive white-label marketing platform that combines CRM, email marketing, SMS marketing, funnel building, appointment scheduling, and more into one powerful tool.",
    features: [
      "All-in-one CRM system",
      "Email & SMS marketing automation", 
      "Landing page and funnel builder",
      "Appointment scheduling system",
      "White-label opportunities",
      "Pipeline management",
      "Reputation management",
      "Website builder"
    ],
    pricing: "$97 - $497/month",
    restrictions: "Blocked for Nigerian IP addresses",
    accessMethods: [
      "Use premium VPN with US server",
      "Create account with US phone number", 
      "Use US dollar card for payment",
      "Maintain consistent US location"
    ]
  },
  {
    name: "RetellAI",
    description: "Advanced AI voice agents for customer service and sales automation.",
    longDescription: "RetellAI provides sophisticated voice AI technology that can handle customer inquiries, book appointments, qualify leads, and conduct sales conversations with human-like interactions.",
    features: [
      "Human-like AI voice agents",
      "Real-time conversation handling",
      "Multi-language support",
      "CRM integrations",
      "Call analytics and insights", 
      "Custom voice training",
      "Appointment booking",
      "Lead qualification"
    ],
    pricing: "$29 - $299/month",
    restrictions: "Limited availability in Nigeria",
    accessMethods: [
      "VPN connection to supported regions",
      "International phone number required",
      "USD payment method needed",
      "Business verification may be required"
    ]
  },
  {
    name: "Voice Agents",
    description: "AI-powered voice automation tools for business communication.",
    longDescription: "Voice Agents platform offers cutting-edge AI voice technology for automating customer interactions, sales calls, support tickets, and business communications with natural conversation flow.",
    features: [
      "Intelligent conversation AI",
      "Business workflow automation",
      "Voice customization options", 
      "Integration with popular tools",
      "Real-time analytics",
      "Multi-channel support",
      "Scalable infrastructure",
      "Advanced NLP capabilities"
    ],
    pricing: "$49 - $199/month", 
    restrictions: "Geographic restrictions for Nigeria",
    accessMethods: [
      "Premium VPN service required",
      "Foreign contact number needed",
      "International payment method",
      "Consistent location spoofing"
    ]
  }
];

const Tools = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <h1 className="text-2xl font-bold gradient-text">MarieSpaceHub</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="gradient-text">Tools</span> Access
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Detailed information about each restricted tool and how Nigerians can gain access
          </p>
        </div>

        {/* Tools Grid */}
        <div className="space-y-12">
          {tools.map((tool, index) => (
            <Card key={tool.name} className="gradient-card shadow-card border-border/50 p-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Tool Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-3xl font-bold">{tool.name}</h2>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">
                      Premium
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {tool.longDescription}
                  </p>

                  <div className="space-y-6">
                    {/* Pricing */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Pricing</h3>
                      <p className="text-2xl font-bold text-primary">{tool.pricing}</p>
                    </div>

                    {/* Restrictions */}
                    <div>
                      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                        <X className="w-5 h-5 text-destructive" />
                        Current Restrictions
                      </h3>
                      <p className="text-muted-foreground">{tool.restrictions}</p>
                    </div>
                  </div>
                </div>

                {/* Features & Access */}
                <div className="space-y-8">
                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                    <div className="grid gap-2">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Access Methods */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Access Requirements</h3>
                    <div className="space-y-2">
                      {tool.accessMethods.map((method, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center mt-0.5 font-semibold">
                            {idx + 1}
                          </div>
                          <span className="text-sm">{method}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="flex-1">
                      <Link to="/requirements">View Requirements</Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <Link to="/guide">Access Guide</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="gradient-card shadow-card border-border/50 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-6">
              Get step-by-step guidance on accessing these premium tools
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/guide">Start Access Guide</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Support</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Tools;