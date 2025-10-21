import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { VoiceControl } from "@/components/VoiceControl";
import { 
  ArrowLeft, 
  MapPin, 
  DollarSign, 
  TrendingUp,
  Plus,
  Edit,
  Eye
} from "lucide-react";
import { toast } from "sonner";

const Dashboard = () => {
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const listings = [
    {
      id: "1",
      name: "My Driveway - Downtown",
      address: "123 Oak Street",
      price: 10,
      bookings: 45,
      revenue: 450,
      status: "active"
    },
    {
      id: "2",
      name: "Garage Space - Uptown",
      address: "456 Maple Avenue",
      price: 8,
      bookings: 32,
      revenue: 256,
      status: "active"
    }
  ];

  const totalRevenue = listings.reduce((sum, l) => sum + l.revenue, 0);
  const totalBookings = listings.reduce((sum, l) => sum + l.bookings, 0);

  const handleVoiceCommand = (command: string) => {
    if (command.toLowerCase().includes('list') || command.toLowerCase().includes('add')) {
      setShowForm(true);
      toast.info("Opening listing form...");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("🎉 Parking space listed successfully!");
    setShowForm(false);
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
              <span className="text-xl font-bold">Owner Dashboard</span>
            </div>
          </div>
          <Button 
            onClick={() => setShowForm(true)}
            className="bg-primary hover:bg-primary-glow"
          >
            <Plus className="mr-2 h-5 w-5" />
            List New Space
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Voice Control */}
          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              🎤 Say "List my parking space" to get started
            </p>
            <VoiceControl onVoiceCommand={handleVoiceCommand} />
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">
                  Total Revenue
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <DollarSign className="h-6 w-6 text-primary" />
                  <span className="text-3xl font-bold">{totalRevenue}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  This month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">
                  Total Bookings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <TrendingUp className="h-6 w-6 text-accent" />
                  <span className="text-3xl font-bold">{totalBookings}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  This month
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-muted-foreground font-normal">
                  Active Listings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <MapPin className="h-6 w-6 text-success" />
                  <span className="text-3xl font-bold">{listings.length}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  All verified
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Listing Form */}
          {showForm && (
            <Card className="bg-card border-border shadow-glow animate-slide-up">
              <CardHeader>
                <CardTitle>List Your Parking Space</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Space Name</Label>
                      <Input 
                        id="name"
                        placeholder="e.g., My Driveway - Downtown"
                        className="bg-background border-border"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price per Hour ($)</Label>
                      <Input 
                        id="price"
                        type="number"
                        placeholder="10"
                        className="bg-background border-border"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Address</Label>
                    <Input 
                      id="address"
                      placeholder="123 Main Street, City, State"
                      className="bg-background border-border"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea 
                      id="description"
                      placeholder="Describe your parking space, features, and any special instructions..."
                      className="bg-background border-border min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      type="submit"
                      className="bg-primary hover:bg-primary-glow"
                    >
                      List Space
                    </Button>
                    <Button 
                      type="button"
                      variant="outline"
                      onClick={() => setShowForm(false)}
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Listings */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Your Listings</h2>
            <div className="grid gap-6">
              {listings.map((listing) => (
                <Card key={listing.id} className="bg-card border-border hover:shadow-glow transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{listing.name}</h3>
                        <p className="text-muted-foreground mb-4">{listing.address}</p>
                        
                        <div className="grid grid-cols-3 gap-4 max-w-md">
                          <div>
                            <p className="text-sm text-muted-foreground">Price</p>
                            <p className="text-lg font-semibold">${listing.price}/hr</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Bookings</p>
                            <p className="text-lg font-semibold">{listing.bookings}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Revenue</p>
                            <p className="text-lg font-semibold">${listing.revenue}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="icon">
                          <Eye className="h-5 w-5" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <Edit className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
