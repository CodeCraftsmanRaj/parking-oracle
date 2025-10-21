import { useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface VoiceControlProps {
  onVoiceCommand?: (command: string) => void;
  className?: string;
}

export const VoiceControl = ({ onVoiceCommand, className }: VoiceControlProps) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  const startListening = () => {
    setIsListening(true);
    toast.info("🎤 Listening...");
    
    // Simulate voice recognition (dummy)
    setTimeout(() => {
      const dummyCommands = [
        "Find parking near Times Square",
        "Show available spots at Central Park",
        "Book parking for 2 hours",
        "Navigate to my parking spot",
        "List my parking space"
      ];
      const randomCommand = dummyCommands[Math.floor(Math.random() * dummyCommands.length)];
      setTranscript(randomCommand);
      onVoiceCommand?.(randomCommand);
      setIsListening(false);
      toast.success(`Heard: "${randomCommand}"`);
    }, 2000);
  };

  const stopListening = () => {
    setIsListening(false);
    toast.info("Stopped listening");
  };

  return (
    <div className={cn("flex flex-col items-center gap-4", className)}>
      <Button
        size="lg"
        onClick={isListening ? stopListening : startListening}
        className={cn(
          "h-20 w-20 rounded-full relative transition-all duration-300",
          isListening 
            ? "bg-accent hover:bg-accent-glow animate-pulse-glow shadow-voice" 
            : "bg-primary hover:bg-primary-glow shadow-glow"
        )}
      >
        {isListening ? (
          <Volume2 className="h-8 w-8" />
        ) : (
          <Mic className="h-8 w-8" />
        )}
        {isListening && (
          <span className="absolute inset-0 rounded-full bg-accent/20 animate-ping" />
        )}
      </Button>
      
      {transcript && (
        <div className="text-center max-w-md animate-slide-up">
          <p className="text-sm text-muted-foreground mb-1">You said:</p>
          <p className="text-foreground font-medium">{transcript}</p>
        </div>
      )}
    </div>
  );
};
