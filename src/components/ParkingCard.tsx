import { MapPin, Clock, DollarSign, Navigation, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

interface ParkingCardProps {
  id: string;
  name: string;
  address: string;
  distance: string;
  price: number;
  availability: number;
  prediction: "high" | "medium" | "low";
  rating: number;
  image?: string;
}

export const ParkingCard = ({
  id,
  name,
  address,
  distance,
  price,
  availability,
  prediction,
  rating,
  image
}: ParkingCardProps) => {
  const navigate = useNavigate();

  const predictionColors = {
    high: "bg-success",
    medium: "bg-accent",
    low: "bg-destructive"
  };

  const predictionLabels = {
    high: "High Availability",
    medium: "Medium Availability", 
    low: "Low Availability"
  };

  return (
    <Card className="overflow-hidden hover:shadow-glow transition-all duration-300 bg-card border-border group">
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
        {image ? (
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <MapPin className="h-16 w-16 text-primary opacity-50" />
          </div>
        )}
        <Badge className={`absolute top-4 right-4 ${predictionColors[prediction]}`}>
          {predictionLabels[prediction]}
        </Badge>
      </div>

      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-semibold mb-2">{name}</h3>
          <div className="flex items-start gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
            <span>{address}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Navigation className="h-4 w-4 text-accent" />
            <span>{distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-accent" />
            <span>{availability} spots</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="text-2xl font-bold">{price}</span>
            <span className="text-sm text-muted-foreground">/hour</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button 
          onClick={() => navigate(`/parking/${id}`)}
          className="w-full bg-primary hover:bg-primary-glow"
        >
          View Details & Book
        </Button>
      </CardFooter>
    </Card>
  );
};
