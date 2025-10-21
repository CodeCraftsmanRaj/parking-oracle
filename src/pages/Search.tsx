import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { VoiceControl } from "@/components/VoiceControl";
import { ParkingCard } from "@/components/ParkingCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, ArrowLeft, SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dummyParkingSpots = [
  {
    id: "1",
    name: "Central Parking Plaza",
    address: "123 Main Street, Downtown",
    distance: "0.3 miles",
    price: 8,
    availability: 12,
    prediction: "high" as const,
    rating: 4.8
  },
  {
    id: "2",
    name: "Sunset Garage",
    address: "456 Park Avenue, Midtown",
    distance: "0.5 miles",
    price: 10,
    availability: 5,
    prediction: "medium" as const,
    rating: 4.5
  },
  {
    id: "3",
    name: "Tech District Parking",
    address: "789 Innovation Blvd",
    distance: "0.8 miles",
    price: 6,
    availability: 2,
    prediction: "low" as const,
    rating: 4.2
  },
  {
    id: "4",
    name: "Riverside Parking Hub",
    address: "321 River Road, Waterfront",
    distance: "1.2 miles",
    price: 12,
    availability: 18,
    prediction: "high" as const,
    rating: 4.9
  },
  {
    id: "5",
    name: "Metro Center Lot",
    address: "555 Commerce St",
    distance: "0.6 miles",
    price: 7,
    availability: 8,
    prediction: "medium" as const,
    rating: 4.3
  },
  {
    id: "6",
    name: "University Parking",
    address: "100 College Ave",
    distance: "1.5 miles",
    price: 5,
    availability: 15,
    prediction: "high" as const,
    rating: 4.6
  }
];

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState(location.state?.query || "");
  const [sortBy, setSortBy] = useState("distance");

  const handleVoiceCommand = (command: string) => {
    setSearchQuery(command);
  };

  const sortedSpots = [...dummyParkingSpots].sort((a, b) => {
    switch (sortBy) {
      case "price":
        return a.price - b.price;
      case "rating":
        return b.rating - a.rating;
      case "availability":
        return b.availability - a.availability;
      default:
        return parseFloat(a.distance) - parseFloat(b.distance);
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                ParkAI
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Voice Search Section */}
        <div className="max-w-4xl mx-auto mb-12 text-center space-y-6">
          <h1 className="text-4xl font-bold">Find Your Perfect Spot</h1>
          <p className="text-muted-foreground">
            🎤 Use voice search or type your destination
          </p>
          
          <div className="flex gap-4 items-center max-w-2xl mx-auto">
            <Input
              placeholder="Enter destination or landmark..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 h-12 bg-card border-border"
            />
            <Button className="bg-primary hover:bg-primary-glow">
              Search
            </Button>
          </div>

          <VoiceControl onVoiceCommand={handleVoiceCommand} />
        </div>

        {/* Results Section */}
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                Available Parking Near You
              </h2>
              <p className="text-muted-foreground">
                {sortedSpots.length} spots found • Real-time predictions
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-5 w-5 text-muted-foreground" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px] bg-card border-border">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="distance">Distance</SelectItem>
                  <SelectItem value="price">Price</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                  <SelectItem value="availability">Availability</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedSpots.map((spot) => (
              <ParkingCard key={spot.id} {...spot} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
