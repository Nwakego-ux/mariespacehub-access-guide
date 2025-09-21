import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CreditCard, Phone, Shield, Mail, AlertTriangle, CheckCircle } from "lucide-react";

const requirements = [
  {
    icon: CreditCard,
    title: "Dollar Card",
    description: "International payment method for subscriptions",
    importance: "Essential",
    details: [
      "USD virtual or physical debit card",
      "Minimum $50-100 balance recommended",
      "Popular options: Kuda, GTBank, Access Bank",
      "Some tools require recurring billing capability"
    ],
    cost: "₦5,000 - ₦15,000 setup",
    providers: [
      { name: "Kuda USD Card", rating: "Excellent", fee: "₦5,000 setup" },
      { name: "GTBank Naira MasterCard", rating: "Good", fee: "₦10,000 setup" },
      { name: "Access Bank USD Card", rating: "Very Good", fee: "₦15,000 setup" }
    ]
  },
  {
    icon: Phone,
    title: "Foreign Number", 
    description: "International number for account verification",
    importance: "Critical",
    details: [
      "US/UK virtual phone number",
      "Must receive SMS and calls",
      "Avoid free services (often blacklisted)",
      "Keep number active throughout usage"
    ],
    cost: "$2 - $10/month",
    providers: [
      { name: "Google Voice", rating: "Excellent", fee: "Free (US residents only)" },
      { name: "TextNow", rating: "Good", fee: "$9.99/month" },
      { name: "Twilio", rating: "Very Good", fee: "$1/month + usage" }
    ]
  },
  {
    icon: Shield,
    title: "VPN (Important)",
    description: "Virtual Private Network for location masking",
    importance: "Critical",
    details: [
      "Premium VPN service (avoid free ones)",
      "US/UK server locations required", 
      "Recommended: ExpressVPN, NordVPN, Surfshark",
      "Stable connection essential for tool access"
    ],
    cost: "$3 - $12/month",
    providers: [
      { name: "ExpressVPN", rating: "Excellent", fee: "$12.95/month" },
      { name: "NordVPN", rating: "Excellent", fee: "$11.95/month" },
      { name: "Surfshark", rating: "Very Good", fee: "$12.95/month" }
    ]
  },
  {
    icon: Mail,
    title: "Email",
    description: "Clean email address for account creation", 
    importance: "Required",
    details: [
      "Gmail, Outlook, or custom domain email",
      "Should not be associated with banned accounts",
      "Professional looking address recommended", 
      "Enable 2FA for security"
    ],
    cost: "Free - $5/month",
    providers: [
      { name: "Gmail", rating: "Excellent", fee: "Free" },
      { name: "Outlook", rating: "Very Good", fee: "Free" },
      { name: "Custom Domain", rating: "Good", fee: "$5/month" }
    ]
  }
];

const Requirements = () => {
  const totalMonthlyCost = "$17 - $37";
  const totalSetupCost = "₦5,000 - ₦15,000";

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
            Access <span className="gradient-text">Requirements</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Everything you need to successfully access restricted international tools from Nigeria
          </p>
          
          {/* Cost Summary */}
          <div className="flex justify-center gap-6 mb-8">
            <Card className="gradient-card shadow-card border-border/50 p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Setup Cost</p>
                <p className="text-2xl font-bold text-primary">{totalSetupCost}</p>
              </div>
            </Card>
            <Card className="gradient-card shadow-card border-border/50 p-4">
              <div className="text-center">
                <p className="text-sm text-muted-foreground">Monthly Cost</p>
                <p className="text-2xl font-bold text-primary">{totalMonthlyCost}</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Requirements Grid */}
        <div className="space-y-8">
          {requirements.map((req, index) => {
            const IconComponent = req.icon;
            return (
              <Card key={req.title} className="gradient-card shadow-card border-border/50 p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Requirement Info */}
                  <div className="lg:col-span-2">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">{req.title}</h2>
                        <Badge 
                          variant={req.importance === "Critical" ? "destructive" : req.importance === "Essential" ? "default" : "secondary"}
                          className="mt-1"
                        >
                          {req.importance}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-lg text-muted-foreground mb-6">
                      {req.description}
                    </p>

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Key Requirements</h3>
                        <div className="space-y-2">
                          {req.details.map((detail, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <span className="text-sm">{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                        <AlertTriangle className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium">Estimated Cost: {req.cost}</span>
                      </div>
                    </div>
                  </div>

                  {/* Providers */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Recommended Providers</h3>
                    <div className="space-y-3">
                      {req.providers.map((provider, idx) => (
                        <div key={idx} className="p-3 bg-muted/50 rounded-lg">
                          <div className="flex justify-between items-start mb-1">
                            <span className="font-medium text-sm">{provider.name}</span>
                            <Badge variant="outline" className="text-xs">
                              {provider.rating}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">{provider.fee}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Important Notes */}
        <Card className="gradient-card shadow-card border-border/50 p-8 mt-12">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Important Security Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Never use free VPNs or phone numbers - they're often blacklisted</li>
                <li>• Keep your VPN connection stable during account creation and initial usage</li>
                <li>• Use the same location consistently to avoid triggering security flags</li>
                <li>• Enable 2FA on all accounts for additional security</li>
                <li>• Keep receipts and documentation for all services purchased</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="gradient-card shadow-card border-border/50 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Set Up Your Requirements?</h2>
            <p className="text-muted-foreground mb-6">
              Follow our step-by-step guide to get everything configured properly
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/guide">Setup Guide</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Help</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Requirements;