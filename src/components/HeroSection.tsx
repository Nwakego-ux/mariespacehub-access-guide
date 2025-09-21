import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital connectivity and global access" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            MarieSpaceHub
          </h1>
          
          <p className="text-2xl md:text-3xl mb-4 text-foreground">
            Access Global Tools from Nigeria
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Get unrestricted access to GoHighLevel, RetailAI, Skool, and other premium international tools. 
            Complete step-by-step guide with all requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-3">
              Get Started Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              View Tools
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green">500+</div>
              <div className="text-sm text-muted-foreground">Nigerians Helped</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green">3</div>
              <div className="text-sm text-muted-foreground">Premium Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent-green">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-accent-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default HeroSection;