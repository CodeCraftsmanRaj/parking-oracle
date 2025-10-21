import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VoiceControl } from "@/components/VoiceControl";
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  Navigation,
  Shield,
  Zap,
  Camera,
  Car
} from "lucide-react";
import { toast } from "sonner";

const ParkingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dummy data
  const parkingSpot = {
    id,
    name: "Central Parking Plaza",
    address: "123 Main Street, Downtown, NY 10001",
    distance: "0.3 miles",
    price: 8,
    availability: 12,
    prediction: "high",
    rating: 4.8,
    totalReviews: 234,
    features: ["24/7 Security", "EV Charging", "Covered", "CCTV Monitored"],
    description: "Premium parking facility in the heart of downtown. Well-lit, secure, and monitored 24/7. Easy access to major attractions and business district.",
    hours: "Open 24 Hours",
    dimensions: "Standard: 9' x 18'",
    surface: "Paved"
  };

  const handleBooking = () => {
    toast.success("🎉 Booking confirmed! Check your email for details.");
    setTimeout(() => navigate('/bookings'), 2000);
  };

  const handleVoiceCommand = (command: string) => {
    if (command.toLowerCase().includes('book')) {
      handleBooking();
    } else if (command.toLowerCase().includes('navigate')) {
      toast.info("🗺️ Opening navigation...");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/search')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Parking Details</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Hero Image */}
          <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <Car className="h-32 w-32 text-primary opacity-50" />
            </div>
            <Badge className="absolute top-6 right-6 bg-success text-lg px-4 py-2">
              High Availability
            </Badge>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{parkingSpot.name}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-5 w-5" />
                      <span>{parkingSpot.address}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-6 w-6 fill-accent text-accent" />
                    <div>
                      <div className="text-2xl font-bold">{parkingSpot.rating}</div>
                      <div className="text-xs text-muted-foreground">{parkingSpot.totalReviews} reviews</div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-lg">{parkingSpot.description}</p>
              </div>

              {/* Features */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Features & Amenities</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Shield className="h-5 w-5 text-primary" />
                      </div>
                      <span>24/7 Security</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Zap className="h-5 w-5 text-primary" />
                      </div>
                      <span>EV Charging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Camera className="h-5 w-5 text-primary" />
                      </div>
                      <span>CCTV Monitored</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Car className="h-5 w-5 text-primary" />
                      </div>
                      <span>Covered Parking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Details */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Parking Details</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Hours:</span>
                      <span className="font-medium text-foreground">{parkingSpot.hours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimensions:</span>
                      <span className="font-medium text-foreground">{parkingSpot.dimensions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Surface:</span>
                      <span className="font-medium text-foreground">{parkingSpot.surface}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Distance:</span>
                      <span className="font-medium text-foreground">{parkingSpot.distance}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Booking Card */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24 bg-card border-border shadow-glow">
                <CardContent className="p-6 space-y-6">
                  <div>
                    <div className="flex items-baseline gap-2 mb-4">
                      <DollarSign className="h-8 w-8 text-primary" />
                      <span className="text-4xl font-bold">{parkingSpot.price}</span>
                      <span className="text-muted-foreground">/hour</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">
                        {parkingSpot.availability} spots available now
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border space-y-3">
                    <Button 
                      onClick={handleBooking}
                      className="w-full bg-primary hover:bg-primary-glow h-12 text-lg"
                    >
                      Book Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="w-full border-accent text-accent hover:bg-accent/10"
                      onClick={() => toast.info("🗺️ Opening navigation...")}
                    >
                      <Navigation className="mr-2 h-5 w-5" />
                      Navigate
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      🎤 Voice commands available
                    </p>
                    <VoiceControl onVoiceCommand={handleVoiceCommand} />
                  </div>

                  <div className="pt-4 border-t border-border text-center text-sm text-muted-foreground">
                    <p>Free cancellation up to 15 minutes before arrival</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingDetails;
