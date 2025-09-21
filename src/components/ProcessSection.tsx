import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Setup Requirements",
    description: "Get your dollar card, foreign number, and professional email ready",
    duration: "1-2 days",
    tasks: [
      "Open USD account with your bank",
      "Fund account with minimum amount",
      "Get virtual US/UK number",
      "Setup professional email"
    ]
  },
  {
    step: "02", 
    title: "Account Creation",
    description: "Create accounts on your chosen platforms using proper information",
    duration: "30 minutes",
    tasks: [
      "Use foreign address (we provide)",
      "Verify phone number",
      "Complete profile information",
      "Enable two-factor authentication"
    ]
  },
  {
    step: "03",
    title: "Payment Setup",
    description: "Add your payment method and complete subscription",
    duration: "15 minutes", 
    tasks: [
      "Add dollar card to account",
      "Select appropriate plan",
      "Complete first payment",
      "Confirm subscription activation"
    ]
  },
  {
    step: "04",
    title: "Access & Training",
    description: "Start using the tools with our comprehensive guides",
    duration: "Ongoing",
    tasks: [
      "Access complete tutorials",
      "Join our support community",
      "Get 1-on-1 setup assistance",
      "Scale your operations"
    ]
  }
];

const ProcessSection = () => {
  return (
    <section className="py-24 px-4" id="process">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple 4-step process to get you up and running with any international tool
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {steps.map((processStep, index) => (
            <div key={processStep.step} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-6 top-24 w-0.5 h-24 bg-gradient-to-b from-primary to-accent-green opacity-30 z-0"></div>
              )}
              
              <div className="flex flex-col md:flex-row gap-8 mb-16 relative z-10">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-xl font-bold text-primary-foreground shadow-glow">
                    {processStep.step}
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 gradient-card shadow-card border-border/50 p-6 hover:shadow-glow transition-smooth">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl font-bold text-foreground">{processStep.title}</h3>
                        <div className="flex items-center gap-1 text-accent-green text-sm">
                          <Clock className="w-4 h-4" />
                          {processStep.duration}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{processStep.description}</p>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm text-primary">Tasks:</h4>
                        <ul className="grid md:grid-cols-2 gap-2">
                          {processStep.tasks.map((task, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-accent-green rounded-full"></div>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      <Button variant="outline" size="sm" className="group" asChild>
                        <Link to="/guide">
                          Get Guide
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="gradient-card shadow-card border-accent-green/30 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join hundreds of Nigerians already using these premium tools
            </p>
            <Button variant="accent" size="lg" className="text-lg px-8" asChild>
              <Link to="/get-started">Start Your Journey</Link>
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;