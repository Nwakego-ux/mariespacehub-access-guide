import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, MessageCircle, Phone, Shield } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Get instant help via WhatsApp",
    action: "Chat Now",
    highlight: "Fastest Response"
  },
  {
    icon: Mail,
    title: "Email Support", 
    description: "Detailed inquiries and documentation",
    action: "Send Email",
    highlight: "24hr Response"
  },
  {
    icon: Phone,
    title: "1-on-1 Setup Call",
    description: "Personal guidance through the process",
    action: "Book Call",
    highlight: "Premium Service"
  }
];

const ContactSection = () => {
  return (
    <section className="py-24 px-4 bg-background-secondary/30" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get Expert Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't navigate this alone. Our team is here to help you every step of the way
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={method.title} className="gradient-card shadow-card border-border/50 p-6 text-center hover:shadow-glow transition-smooth">
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto gradient-hero rounded-full flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <div>
                    <div className="text-xs text-accent-green font-semibold mb-1">{method.highlight}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                  </div>

                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/contact">{method.action}</Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Main CTA */}
        <div className="max-w-4xl mx-auto">
          <Card className="gradient-card shadow-card border-primary/30 p-8 text-center relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-primary rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-accent-green rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary/30 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Shield className="w-6 h-6 text-accent-green" />
                <span className="text-sm font-semibold text-accent-green">100% Success Guarantee</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Ready to Access Global Tools?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join our community of successful Nigerian entrepreneurs and freelancers who've unlocked 
                access to premium international tools. Get started today with our proven system.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button variant="hero" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/get-started">Get Complete Access Guide</Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-3" asChild>
                  <Link to="/contact">Schedule Free Consultation</Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  No Setup Fees
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  Money-Back Guarantee
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  24/7 Support
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;