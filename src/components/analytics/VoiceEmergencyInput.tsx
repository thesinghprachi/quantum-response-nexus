
import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mic, MicOff, Volume, VolumeX } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { VoiceCommand } from '@/types/database';

const VoiceEmergencyInput = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [processingAudio, setProcessingAudio] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.addEventListener('dataavailable', (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      });

      mediaRecorder.addEventListener('stop', handleStopRecording);
      mediaRecorder.start();
      setIsRecording(true);
      
      toast({
        title: "Recording started",
        description: "Speak clearly to report the emergency",
      });
    } catch (error) {
      console.error('Error accessing microphone:', error);
      toast({
        variant: "destructive",
        title: "Microphone access denied",
        description: "Please enable microphone access to use voice commands",
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleStopRecording = async () => {
    setProcessingAudio(true);
    try {
      const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
      
      // Convert blob to base64 for sending to the API
      const reader = new FileReader();
      reader.readAsDataURL(audioBlob);
      reader.onloadend = async () => {
        const base64Audio = reader.result?.toString().split(',')[1];
        
        // Simulated response for demo purposes
        const simulatedResponse = {
          text: "Flooding reported in southwest sector. Roads blocked. Need immediate evacuation assistance.",
          detectedLanguage: "en",
          translatedText: "Flooding reported in southwest sector. Roads blocked. Need immediate evacuation assistance.",
          targetLanguage: "en",
          urgencyLevel: "high"
        };
        
        setRecognizedText(simulatedResponse.text);
        setTranslatedText(simulatedResponse.translatedText);
        setDetectedLanguage(simulatedResponse.detectedLanguage);
        setUrgencyLevel(simulatedResponse.urgencyLevel);
        
        // Save to Supabase
        const voiceCommandData: VoiceCommand = {
          id: crypto.randomUUID(),
          command_text: simulatedResponse.text,
          original_language: simulatedResponse.detectedLanguage,
          translated_text: simulatedResponse.translatedText,
          target_language: simulatedResponse.targetLanguage,
          urgency_level: simulatedResponse.urgencyLevel,
          location_data: { lat: 37.7749, lng: -122.4194 }, // Simulated location
        };
        
        try {
          const { error } = await supabase
            .from('voice_commands')
            .insert(voiceCommandData);
          
          if (error) {
            console.error('Error saving voice command:', error);
            toast({
              variant: "destructive",
              title: "Error saving command",
              description: error.message,
            });
          } else {
            toast({
              title: "Emergency command processed",
              description: "Your report has been recorded and translated",
            });
          }
        } catch (err) {
          console.error('Supabase error:', err);
        }
      };
    } catch (error: any) {
      console.error('Error processing audio:', error);
      toast({
        variant: "destructive",
        title: "Processing error",
        description: "Failed to process audio recording",
      });
    } finally {
      setProcessingAudio(false);
    }
  };

  const getUrgencyColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'high':
        return 'bg-red-500 hover:bg-red-600';
      case 'medium':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'low':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-blue-500 hover:bg-blue-600';
    }
  };

  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Volume className="h-5 w-5 text-accent" />
          Voice Emergency Input
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-center">
            <Button
              size="lg"
              variant={isRecording ? "destructive" : "default"}
              className={`rounded-full p-6 ${isRecording ? 'animate-pulse' : ''}`}
              onClick={isRecording ? stopRecording : startRecording}
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
          
          {recognizedText && (
            <div className="mt-4 space-y-3">
              <div>
                <div className="text-sm text-muted-foreground mb-1">Original ({detectedLanguage}):</div>
                <div className="bg-muted p-3 rounded">{recognizedText}</div>
              </div>
              
              {translatedText && translatedText !== recognizedText && (
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Translated:</div>
                  <div className="bg-muted p-3 rounded">{translatedText}</div>
                </div>
              )}
              
              {urgencyLevel && (
                <div className="flex items-center">
                  <span className="text-sm text-muted-foreground mr-2">Urgency:</span>
                  <Badge className={getUrgencyColor(urgencyLevel)}>
                    {urgencyLevel.toUpperCase()}
                  </Badge>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceEmergencyInput;
