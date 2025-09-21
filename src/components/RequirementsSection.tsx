import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const requirements = [
  {
    title: "Dollar Card",
    description: "International payment method for subscriptions",
    details: [
      "USD-denominated debit/credit card",
      "Recommended: Kuda, GTB, or Zenith dollar cards",
      "Minimum $50-$100 funding recommended",
      "Must support international online transactions"
    ],
    priority: "Critical",
    cost: "₦5,000 - ₦15,000 setup"
  },
  {
    title: "Foreign Phone Number",
    description: "International number for account verification",
    details: [
      "US/UK virtual phone number",
      "SMS receiving capability required",
      "Recommended services: Google Voice, TextNow",
      "Some tools require voice call verification"
    ],
    priority: "Critical", 
    cost: "$2 - $10/month"
  },
  {
    title: "Professional Email",
    description: "Clean email address for account creation",
    details: [
      "Gmail, Outlook, or custom domain email",
      "Should not be associated with banned accounts",
      "Professional looking address recommended",
      "Enable 2FA for security"
    ],
    priority: "Important",
    cost: "Free - $6/month"
  }
];

const RequirementsSection = () => {
  return (
    <section className="py-24 px-4 bg-background-secondary/50" id="requirements">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What You'll Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Essential requirements to access international tools from Nigeria
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {requirements.map((req, index) => (
            <Card key={req.title} className="gradient-card shadow-card border-border/50 p-6 relative overflow-hidden">
              {/* Priority Badge */}
              <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-semibold ${
                req.priority === 'Critical' ? 'bg-destructive/20 text-destructive' : 'bg-accent-green/20 text-accent-green'
              }`}>
                {req.priority}
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent-green mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{req.title}</h3>
                    <p className="text-muted-foreground text-sm">{req.description}</p>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <h4 className="font-semibold text-sm text-primary">Requirements:</h4>
                  <ul className="space-y-2">
                    {req.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-border/30">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Estimated Cost:</span>
                    <span className="font-semibold text-accent-green">{req.cost}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="gradient-card shadow-card border-accent-green/30 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-accent-green">Total Setup Investment</h3>
            <p className="text-3xl font-bold text-foreground mb-2">₦15,000 - ₦35,000</p>
            <p className="text-muted-foreground">
              One-time setup cost to access thousands of dollars worth of premium international tools
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;