import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, ArrowRight, Clock, DollarSign, Shield, Star } from "lucide-react";

const quickStart = [
  {
    step: 1,
    title: "Choose Your Tool",
    description: "Select which restricted tool you want to access first",
    action: "Browse Tools",
    link: "/tools",
    time: "5 minutes"
  },
  {
    step: 2,
    title: "Review Requirements",
    description: "Check what you need: USD card, VPN, foreign number, email",
    action: "View Requirements",
    link: "/requirements",
    time: "10 minutes"
  },
  {
    step: 3,
    title: "Follow the Guide",
    description: "Complete step-by-step setup instructions",
    action: "Start Guide",
    link: "/guide",
    time: "2-7 days"
  },
  {
    step: 4,
    title: "Get Support",
    description: "Contact us if you need help at any stage",
    action: "Get Help",
    link: "/contact",
    time: "As needed"
  }
];

const packageOptions = [
  {
    name: "DIY Package",
    price: "Free",
    description: "Complete guide and documentation to set everything up yourself",
    features: [
      "Complete written guide",
      "Requirements checklist",
      "Common issues solutions",
      "Email support",
      "Community access"
    ],
    popular: false,
    cta: "Start Free Guide"
  },
  {
    name: "Guided Setup",
    price: "₦25,000",
    description: "Personal assistance throughout the entire setup process",
    features: [
      "Everything in DIY Package",
      "1-on-1 WhatsApp support",
      "Live setup assistance",
      "Account creation help",
      "30-day follow-up support",
      "Priority troubleshooting"
    ],
    popular: true,
    cta: "Get Personal Help"
  },
  {
    name: "Premium VIP",
    price: "₦50,000",
    description: "Done-for-you service with ongoing support and account management",
    features: [
      "Everything in Guided Setup",
      "Done-for-you account creation",
      "Payment method setup",
      "Monthly account monitoring",
      "Priority phone support",
      "Account recovery service",
      "6-month support included"
    ],
    popular: false,
    cta: "Go Premium"
  }
];

const successStats = [
  { number: "500+", label: "Nigerians Helped" },
  { number: "3", label: "Premium Tools" },
  { number: "95%", label: "Success Rate" },
  { number: "24/7", label: "Support Available" }
];

const GetStarted = () => {
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
            Get <span className="gradient-text">Started</span> Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choose your path to accessing restricted international tools. We have options for every budget and technical level.
          </p>
          
          {/* Success Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {successStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Start Process */}
        <Card className="gradient-card shadow-card border-border/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Start Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {quickStart.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary-foreground">{item.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground mb-4">
                    <Clock className="w-3 h-3" />
                    <span>{item.time}</span>
                  </div>
                  <Button size="sm" variant="outline" asChild>
                    <Link to={item.link}>{item.action}</Link>
                  </Button>
                </div>
                
                {/* Arrow */}
                {index < quickStart.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-3 text-muted-foreground">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Package Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Support Level</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {packageOptions.map((pkg, index) => (
              <Card key={pkg.name} className={`gradient-card shadow-card border-border/50 p-8 relative ${pkg.popular ? 'ring-2 ring-primary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="gradient-accent text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-2">{pkg.price}</div>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full" 
                  variant={pkg.popular ? "default" : "outline"}
                  size="lg"
                  asChild
                >
                  <Link to="/contact">{pkg.cta}</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <Card className="gradient-card shadow-card border-border/50 p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Total Investment Breakdown</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-primary" />
                One-Time Setup Costs
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>USD Dollar Card Setup</span>
                  <span>₦5,000 - ₦15,000</span>
                </div>
                <div className="flex justify-between">
                  <span>Our Service (optional)</span>
                  <span>Free - ₦50,000</span>
                </div>
                <div className="border-t border-border/50 pt-2 mt-2 font-semibold">
                  <div className="flex justify-between">
                    <span>Total Setup</span>
                    <span>₦5,000 - ₦65,000</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                Monthly Ongoing Costs
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Premium VPN Service</span>
                  <span>$8 - $13/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Foreign Phone Number</span>
                  <span>$2 - $10/month</span>
                </div>
                <div className="flex justify-between">
                  <span>Tool Subscriptions</span>
                  <span>$29 - $497/month</span>
                </div>
                <div className="border-t border-border/50 pt-2 mt-2 font-semibold">
                  <div className="flex justify-between">
                    <span>Total Monthly</span>
                    <span>$39 - $520/month</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Security & Legal Notice */}
        <Card className="gradient-card shadow-card border-border/50 p-8 mb-16">
          <div className="flex items-start gap-4">
            <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-3">Security & Legal Compliance</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ All methods are 100% legal and comply with international laws</p>
                <p>✓ We use legitimate VPN services and virtual number providers</p>
                <p>✓ Your data and payment information are handled securely</p>
                <p>✓ We follow all platform terms of service guidelines</p>
                <p>✓ Full transparency in our setup and support processes</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="gradient-card shadow-card border-border/50 p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Ready to Access Premium Tools?</h2>
            <p className="text-muted-foreground mb-6">
              Join 500+ Nigerians who have successfully gained access to international business tools
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/guide">Start Free Guide</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Get Personal Help</Link>
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default GetStarted;