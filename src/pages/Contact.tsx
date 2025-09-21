import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Mail, Phone, Clock, MapPin, Send, CheckCircle } from "lucide-react";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "Get instant help with setup and troubleshooting",
    action: "Chat on WhatsApp",
    highlight: "Most Popular",
    availability: "24/7 Available",
    responseTime: "< 30 minutes"
  },
  {
    icon: Mail,
    title: "Email Support", 
    description: "Detailed guidance and documentation support",
    action: "Send Email",
    highlight: "Detailed Help",
    availability: "Business Hours",
    responseTime: "< 2 hours"
  },
  {
    icon: Phone,
    title: "Phone Consultation",
    description: "One-on-one guidance for complex setups",
    action: "Schedule Call",
    highlight: "Premium Support",
    availability: "By Appointment",
    responseTime: "Same Day"
  }
];

const supportFeatures = [
  {
    title: "Setup Assistance",
    description: "We'll guide you through setting up each requirement step-by-step"
  },
  {
    title: "Troubleshooting",
    description: "Stuck somewhere? We'll help you resolve any issues quickly"
  },
  {
    title: "Tool Selection",
    description: "Not sure which tools you need? We'll help you choose the right ones"
  },
  {
    title: "Account Recovery",
    description: "If your account gets suspended, we'll help you recover or create new ones"
  },
  {
    title: "Payment Issues",
    description: "Problems with USD cards or payments? We'll help you resolve them"
  },
  {
    title: "Ongoing Support",
    description: "Continue to get help even after successful setup"
  }
];

const faqItems = [
  {
    question: "How long does the setup process take?",
    answer: "Typically 2-7 days depending on how quickly you can get your USD card and complete verification steps."
  },
  {
    question: "Is this method legal and safe?",
    answer: "Yes, using VPN services and virtual phone numbers is completely legal. We follow all platform terms of service."
  },
  {
    question: "What if my account gets suspended?",
    answer: "We provide ongoing support to help recover suspended accounts or guide you through creating new ones properly."
  },
  {
    question: "Do you offer money-back guarantee?",
    answer: "While we can't guarantee tool access (as it depends on the platforms), we do guarantee our support and guidance quality."
  }
];

const Contact = () => {
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
            Get <span className="gradient-text">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help you every step of the way. Choose your preferred contact method below.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <Card key={method.title} className="gradient-card shadow-card border-border/50 p-6 text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      {method.highlight && (
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                          <span className="px-2 py-1 text-xs font-semibold gradient-accent text-white rounded-full">
                            {method.highlight}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{method.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{method.description}</p>
                    
                    <div className="space-y-2 mb-4 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span>{method.availability}</span>
                      </div>
                      <div className="flex items-center justify-center gap-1">
                        <MessageCircle className="w-3 h-3" />
                        <span>Response: {method.responseTime}</span>
                      </div>
                    </div>
                    
                    <Button className="w-full" variant={index === 0 ? "default" : "outline"}>
                      {method.action}
                    </Button>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <Card className="gradient-card shadow-card border-border/50 p-8">
              <div className="flex items-center gap-3 mb-6">
                <Send className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Send Us a Message</h2>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="tool">Which Tool Are You Interested In?</Label>
                  <Input id="tool" placeholder="e.g., GoHighLevel, RetellAI, Voice Agents" />
                </div>
                
                <div>
                  <Label htmlFor="message">Your Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us what you need help with..." 
                    className="min-h-[120px]"
                  />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <Card className="gradient-card shadow-card border-border/50 p-8">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqItems.map((faq, index) => (
                  <div key={index} className="border-b border-border/50 pb-4 last:border-0">
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Support Features */}
            <Card className="gradient-card shadow-card border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">What We Help With</h3>
              <div className="space-y-3">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-medium text-sm">{feature.title}</p>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Contact Info */}
            <Card className="gradient-card shadow-card border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-xs text-muted-foreground">Nigeria (Remote Support)</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm">Support Hours</p>
                    <p className="text-xs text-muted-foreground">
                      24/7 WhatsApp Support<br />
                      9AM - 6PM Email Support (WAT)
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-xs text-muted-foreground">
                      WhatsApp: &lt; 30 minutes<br />
                      Email: &lt; 2 hours
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Links */}
            <Card className="gradient-card shadow-card border-border/50 p-6">
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/tools">View All Tools</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/requirements">Setup Requirements</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/guide">Step-by-Step Guide</Link>
                </Button>
                <Button variant="ghost" asChild className="w-full justify-start">
                  <Link to="/">Back to Home</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;