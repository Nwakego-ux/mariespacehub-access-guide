import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Users, Shield, CheckCircle, AlertTriangle, Play } from "lucide-react";

const steps = [
  {
    step: 1,
    title: "Preparation Phase",
    description: "Set up all necessary requirements before attempting to access any restricted tools",
    duration: "2-3 days",
    priority: "Critical",
    tasks: [
      {
        task: "Get USD Dollar Card",
        details: "Apply for and receive your USD debit card from Kuda, GTBank, or Access Bank",
        timeEstimate: "3-5 business days",
        cost: "₦5,000 - ₦15,000"
      },
      {
        task: "Purchase Premium VPN",
        details: "Subscribe to ExpressVPN, NordVPN, or Surfshark with US/UK servers",
        timeEstimate: "Immediate",
        cost: "$8 - $13/month"
      },
      {
        task: "Get Foreign Phone Number", 
        details: "Set up virtual US/UK phone number through TextNow, Google Voice, or Twilio",
        timeEstimate: "1-2 hours",
        cost: "$2 - $10/month"
      },
      {
        task: "Prepare Clean Email",
        details: "Create fresh Gmail or Outlook account with professional name",
        timeEstimate: "15 minutes",
        cost: "Free"
      }
    ]
  },
  {
    step: 2,
    title: "VPN Setup & Testing",
    description: "Configure and test your VPN connection to ensure stable access",
    duration: "2-4 hours", 
    priority: "Critical",
    tasks: [
      {
        task: "Install VPN Software",
        details: "Download and install your chosen VPN on all devices you'll use",
        timeEstimate: "30 minutes",
        cost: "Included"
      },
      {
        task: "Test Server Locations",
        details: "Test different US/UK servers for best speed and stability",
        timeEstimate: "1 hour", 
        cost: "Included"
      },
      {
        task: "Verify IP Address",
        details: "Use whatismyipaddress.com to confirm your location appears as US/UK",
        timeEstimate: "10 minutes",
        cost: "Free"
      },
      {
        task: "Clear Browser Data",
        details: "Clear cookies, cache, and browsing history to start fresh",
        timeEstimate: "15 minutes",
        cost: "Free"
      }
    ]
  },
  {
    step: 3,
    title: "Account Creation",
    description: "Create accounts for your chosen tools while maintaining consistent location",
    duration: "1-2 hours per tool",
    priority: "High",
    tasks: [
      {
        task: "Choose Your Location",
        details: "Pick a specific US city/state and stick to it for all accounts",
        timeEstimate: "5 minutes",
        cost: "Free"
      },
      {
        task: "Create Tool Account",
        details: "Sign up using foreign number, clean email, and consistent location info",
        timeEstimate: "20-30 minutes",
        cost: "Varies by tool"
      },
      {
        task: "Verify Phone Number",
        details: "Complete SMS verification using your foreign phone number",
        timeEstimate: "10 minutes",
        cost: "Included"
      },
      {
        task: "Add Payment Method",
        details: "Link your USD card for subscription payment",
        timeEstimate: "15 minutes",
        cost: "Tool subscription fee"
      }
    ]
  },
  {
    step: 4,
    title: "Security & Maintenance",
    description: "Secure your accounts and maintain consistent access patterns",
    duration: "Ongoing",
    priority: "Essential",
    tasks: [
      {
        task: "Enable 2FA",
        details: "Set up two-factor authentication on all tool accounts",
        timeEstimate: "10 minutes per tool",
        cost: "Free"
      },
      {
        task: "Document Everything",
        details: "Save all login credentials, payment confirmations, and settings",
        timeEstimate: "30 minutes",
        cost: "Free"
      },
      {
        task: "Maintain Consistency",
        details: "Always use same VPN server location when accessing tools",
        timeEstimate: "Ongoing",
        cost: "Included"
      },
      {
        task: "Monitor Usage",
        details: "Keep track of subscription costs and renewal dates",
        timeEstimate: "Monthly review",
        cost: "Free"
      }
    ]
  }
];

const commonIssues = [
  {
    issue: "Account Suspended After Creation",
    solution: "Usually caused by inconsistent location or suspicious activity. Always use the same VPN server and avoid rapid account switching.",
    prevention: "Maintain consistent browsing patterns and use premium VPN services only."
  },
  {
    issue: "Payment Method Rejected",
    solution: "Ensure your USD card is properly funded and activated for international transactions. Contact your bank if needed.",
    prevention: "Test small transactions first and ensure adequate balance before subscribing."
  },
  {
    issue: "Phone Verification Failed",
    solution: "Free phone number services are often blacklisted. Invest in a premium virtual number service.",
    prevention: "Use paid services like TextNow Pro or Google Voice (with US verification)."
  }
];

const Guide = () => {
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
            Complete <span className="gradient-text">Access Guide</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Step-by-step instructions to successfully access restricted tools from Nigeria
          </p>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-primary" />
              <span className="text-sm">Total Time: 3-7 days</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm">500+ Success Stories</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm">100% Legal Method</span>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <Card key={step.step} className="gradient-card shadow-card border-border/50 p-8">
              <div className="flex items-start gap-6">
                {/* Step Number */}
                <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>

                <div className="flex-1">
                  {/* Step Header */}
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                    <Badge variant={step.priority === "Critical" ? "destructive" : "default"}>
                      {step.priority}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{step.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{step.description}</p>

                  {/* Tasks */}
                  <div className="space-y-4">
                    {step.tasks.map((task, idx) => (
                      <div key={idx} className="border border-border/50 rounded-lg p-4 bg-muted/20">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="font-semibold flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-primary" />
                            {task.task}
                          </h3>
                          <div className="flex gap-2 text-xs">
                            <Badge variant="outline">{task.timeEstimate}</Badge>
                            <Badge variant="outline">{task.cost}</Badge>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground pl-6">{task.details}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Common Issues */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Common Issues & Solutions</h2>
          <div className="space-y-6">
            {commonIssues.map((item, index) => (
              <Card key={index} className="gradient-card shadow-card border-border/50 p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.issue}</h3>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Solution:</p>
                        <p className="text-sm">{item.solution}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground mb-1">Prevention:</p>
                        <p className="text-sm">{item.prevention}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Guarantee */}
        <Card className="gradient-card shadow-card border-border/50 p-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-4">Success Guarantee</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Follow this guide exactly and you'll gain access to your chosen tools. We've helped over 500 Nigerians 
              successfully access restricted international platforms using this proven method.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Get Personal Support</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/requirements">View Requirements</Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Video Tutorial CTA */}
        <Card className="gradient-card shadow-card border-border/50 p-8">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-full gradient-accent flex items-center justify-center flex-shrink-0">
              <Play className="w-10 h-10 text-white ml-1" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Video Tutorial Available</h3>
              <p className="text-muted-foreground mb-4">
                Watch our comprehensive video guide that walks you through each step with real examples
              </p>
              <Button asChild>
                <Link to="/contact">Request Video Access</Link>
              </Button>
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Guide;