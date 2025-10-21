import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VoiceControl } from "@/components/VoiceControl";
import { 
  ArrowLeft, 
  MapPin,
  Calendar,
  Clock,
  Navigation,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { toast } from "sonner";

const UserBookings = () => {
  const navigate = useNavigate();

  const bookings = [
    {
      id: "1",
      spotName: "Central Parking Plaza",
      address: "123 Main Street, Downtown",
      date: "Dec 28, 2025",
      time: "2:00 PM - 5:00 PM",
      price: 24,
      status: "active"
    },
    {
      id: "2",
      spotName: "Sunset Garage",
      address: "456 Park Avenue, Midtown",
      date: "Dec 25, 2025",
      time: "10:00 AM - 12:00 PM",
      price: 20,
      status: "completed"
    },
    {
      id: "3",
      spotName: "Tech District Parking",
      address: "789 Innovation Blvd",
      date: "Dec 30, 2025",
      time: "9:00 AM - 6:00 PM",
      price: 54,
      status: "upcoming"
    }
  ];

  const handleVoiceCommand = (command: string) => {
    if (command.toLowerCase().includes('navigate')) {
      toast.info("🗺️ Opening navigation to your booking...");
    } else if (command.toLowerCase().includes('cancel')) {
      toast.info("Opening cancellation dialog...");
    }
  };

  const handleCancel = (id: string) => {
    toast.success("Booking cancelled successfully. Refund processed.");
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
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">My Bookings</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Voice Control */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              🎤 Say "Navigate to my parking" or "Cancel booking"
            </p>
            <VoiceControl onVoiceCommand={handleVoiceCommand} />
          </div>

          {/* Bookings List */}
          <div className="space-y-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-semibold">{booking.spotName}</h3>
                        <Badge 
                          className={
                            booking.status === "active" 
                              ? "bg-accent" 
                              : booking.status === "completed"
                              ? "bg-muted"
                              : "bg-primary"
                          }
                        >
                          {booking.status === "active" ? "In Progress" : 
                           booking.status === "completed" ? "Completed" : "Upcoming"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span>{booking.address}</span>
                      </div>
                    </div>
                    
                    {booking.status === "active" ? (
                      <CheckCircle2 className="h-8 w-8 text-accent" />
                    ) : booking.status === "completed" ? (
                      <CheckCircle2 className="h-8 w-8 text-muted-foreground" />
                    ) : (
                      <Clock className="h-8 w-8 text-primary" />
                    )}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 rounded-lg bg-background/50">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Date</p>
                        <p className="font-medium">{booking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Time</p>
                        <p className="font-medium">{booking.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">${booking.price}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    {booking.status === "active" && (
                      <>
                        <Button 
                          className="flex-1 bg-accent hover:bg-accent-glow"
                          onClick={() => toast.info("🗺️ Opening navigation...")}
                        >
                          <Navigation className="mr-2 h-5 w-5" />
                          Navigate
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => handleCancel(booking.id)}
                        >
                          <XCircle className="mr-2 h-5 w-5" />
                          Cancel
                        </Button>
                      </>
                    )}
                    
                    {booking.status === "upcoming" && (
                      <>
                        <Button 
                          className="flex-1 bg-primary hover:bg-primary-glow"
                          onClick={() => navigate(`/parking/${booking.id}`)}
                        >
                          View Details
                        </Button>
                        <Button 
                          variant="outline"
                          onClick={() => handleCancel(booking.id)}
                        >
                          <XCircle className="mr-2 h-5 w-5" />
                          Cancel
                        </Button>
                      </>
                    )}

                    {booking.status === "completed" && (
                      <Button 
                        variant="outline"
                        className="flex-1"
                        onClick={() => toast.info("Booking again...")}
                      >
                        Book Again
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State (if no bookings) */}
          {bookings.length === 0 && (
            <Card className="bg-card border-border text-center py-12">
              <CardContent>
                <MapPin className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h3 className="text-xl font-semibold mb-2">No bookings yet</h3>
                <p className="text-muted-foreground mb-6">
                  Start by finding parking near your destination
                </p>
                <Button 
                  onClick={() => navigate('/search')}
                  className="bg-primary hover:bg-primary-glow"
                >
                  Find Parking
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserBookings;
