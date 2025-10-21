import { VoiceControl } from "@/components/VoiceControl";
import { Button } from "@/components/ui/button";
import { MapPin, Sparkles, TrendingUp, Shield, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleVoiceCommand = (command: string) => {
    console.log("Voice command:", command);
    // Navigate to search with voice command
    navigate('/search', { state: { query: command } });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ParkAI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => navigate('/search')}>
              Find Parking
            </Button>
            <Button variant="ghost" onClick={() => navigate('/dashboard')}>
              List Your Space
            </Button>
            <Button variant="ghost" onClick={() => navigate('/bookings')}>
              My Bookings
            </Button>
            <Button className="bg-primary hover:bg-primary-glow">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-float">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm">AI-Powered Predictive Parking</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Find Parking
              <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Before You Arrive
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Voice-controlled parking marketplace with AI predictions. 
              Book your spot 30-60 minutes ahead and never circle blocks again.
            </p>

            <div className="py-8">
              <p className="text-sm text-muted-foreground mb-4">
                🎤 Try saying: "Find parking near Times Square"
              </p>
              <VoiceControl onVoiceCommand={handleVoiceCommand} />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                size="lg" 
                onClick={() => navigate('/search')}
                className="bg-primary hover:bg-primary-glow text-lg px-8"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Browse Parking
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => navigate('/dashboard')}
                className="border-primary text-primary hover:bg-primary/10 text-lg px-8"
              >
                List Your Space
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose ParkAI?</h2>
            <p className="text-muted-foreground text-lg">
              The smartest way to park in the city
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group">
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-float">
                <TrendingUp className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Predictions</h3>
              <p className="text-muted-foreground">
                Machine learning forecasts parking availability 30-60 minutes ahead with 95%+ accuracy
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group">
              <div className="h-14 w-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:animate-float">
                <Zap className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice Control</h3>
              <p className="text-muted-foreground">
                Hands-free search and booking with advanced voice recognition - perfect for when you're driving
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card border border-border hover:shadow-glow transition-all duration-300 group">
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:animate-float">
                <Shield className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pre-Book & Save</h3>
              <p className="text-muted-foreground">
                Reserve spots in advance, get dynamic pricing, and earn from your unused parking spaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                70%
              </div>
              <p className="text-muted-foreground">Less search time</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                95%
              </div>
              <p className="text-muted-foreground">Prediction accuracy</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                24/7
              </div>
              <p className="text-muted-foreground">Availability</p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                100k+
              </div>
              <p className="text-muted-foreground">Happy users</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold">ParkAI</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 ParkAI. Predictive Parking Marketplace.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
