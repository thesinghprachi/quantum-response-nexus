
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic, MicOff } from 'lucide-react';

interface RecordingButtonProps {
  isRecording: boolean;
  processingAudio: boolean;
  onStart: () => void;
  onStop: () => void;
}

const RecordingButton = ({ 
  isRecording, 
  processingAudio, 
  onStart, 
  onStop 
}: RecordingButtonProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-center">
        <Button
          size="lg"
          variant={isRecording ? "destructive" : "default"}
          className={`rounded-full p-6 ${isRecording ? 'animate-pulse' : ''}`}
          onClick={isRecording ? onStop : onStart}
          disabled={processingAudio}
        >
          {isRecording ? (
            <MicOff className="h-8 w-8" />
          ) : (
            <Mic className="h-8 w-8" />
          )}
        </Button>
      </div>
      
      <div className="text-center text-muted-foreground text-sm">
        {isRecording ? "Recording... Click to stop" : "Click to start recording"}
      </div>
      
      {processingAudio && (
        <div className="text-center text-accent">
          Processing audio...
        </div>
      )}
    </div>
  );
};

export default RecordingButton;
