import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tools = [
  {
    name: "GoHighLevel",
    description: "Complete CRM and marketing automation platform for agencies and businesses",
    features: ["CRM & Pipeline Management", "Email & SMS Marketing", "Landing Page Builder", "White Label Solution"],
    pricing: "$97-$497/month",
    restrictions: "US/Canada only, requires US payment method"
  },
  {
    name: "RetellAI",
    description: "Advanced AI-powered e-commerce optimization and automation platform",
    features: ["AI Product Recommendations", "Inventory Optimization", "Price Analytics", "Customer Insights"],
    pricing: "$199-$999/month", 
    restrictions: "Restricted in Nigeria, requires international verification"
  },
  {
    name: "Voice Agents",
    description: "Community platform for creators to build and monetize online communities",
    features: ["Community Building", "Course Creation", "Payment Processing", "Analytics Dashboard"],
    pricing: "$99/month",
    restrictions: "Payment restrictions for Nigerian users"
  }
];

const ToolsSection = () => {
  return (
    <section className="py-24 px-4" id="tools">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent-green bg-clip-text text-transparent">
            Premium Tools Available
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access these powerful international tools that are typically restricted for Nigerian users
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={tool.name} className="gradient-card shadow-card border-border/50 p-6 hover:shadow-glow transition-smooth">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-foreground">{tool.name}</h3>
                  <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
                </div>
                
                <p className="text-muted-foreground">{tool.description}</p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-accent-green">Key Features:</h4>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 pt-4 border-t border-border/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Pricing:</span>
                    <span className="font-semibold text-accent-green">{tool.pricing}</span>
                  </div>
                  <div className="text-xs text-destructive bg-destructive/10 p-2 rounded">
                    <strong>Restriction:</strong> {tool.restrictions}
                  </div>
                </div>

                <Button variant="outline" className="w-full mt-4">
                  Learn Access Method
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;