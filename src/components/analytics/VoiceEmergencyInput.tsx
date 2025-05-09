
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Volume } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { useVoiceRecorder } from '@/hooks/use-voice-recorder';
import RecordingButton from './RecordingButton';
import TranscriptionDisplay from './TranscriptionDisplay';
import { saveAndProcessVoiceCommand } from '@/services/voiceProcessingService';

const VoiceEmergencyInput = () => {
  const [recognizedText, setRecognizedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [detectedLanguage, setDetectedLanguage] = useState('');
  const [urgencyLevel, setUrgencyLevel] = useState('');
  const { toast } = useToast();
  
  const handleRecordingComplete = async (audioBlob: Blob) => {
    try {
      const { data, error } = await saveAndProcessVoiceCommand(audioBlob);
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Error saving command",
          description: error.message,
        });
        return;
      }
      
      if (data) {
        setRecognizedText(data.command_text);
        setTranslatedText(data.translated_text || '');
        setDetectedLanguage(data.original_language);
        setUrgencyLevel(data.urgency_level || '');
        
        toast({
          title: "Emergency command processed",
          description: "Your report has been recorded and translated",
        });
      }
    } catch (err: any) {
      console.error('Service error:', err);
      toast({
        variant: "destructive",
        title: "Service error",
        description: err.message || "Unknown error",
      });
    }
  };

  const { 
    isRecording, 
    processingAudio, 
    startRecording, 
    stopRecording 
  } = useVoiceRecorder({ onRecordingComplete: handleRecordingComplete });

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
          <RecordingButton 
            isRecording={isRecording}
            processingAudio={processingAudio}
            onStart={startRecording}
            onStop={stopRecording}
          />
          
          <TranscriptionDisplay
            recognizedText={recognizedText}
            translatedText={translatedText}
            detectedLanguage={detectedLanguage}
            urgencyLevel={urgencyLevel}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceEmergencyInput;
