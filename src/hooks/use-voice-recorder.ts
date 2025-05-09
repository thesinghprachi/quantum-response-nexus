
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

interface UseVoiceRecorderOptions {
  onRecordingComplete?: (audioBlob: Blob) => void;
}

export function useVoiceRecorder({ onRecordingComplete }: UseVoiceRecorderOptions = {}) {
  const [isRecording, setIsRecording] = useState(false);
  const [processingAudio, setProcessingAudio] = useState(false);
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
      
      if (onRecordingComplete) {
        onRecordingComplete(audioBlob);
      }
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

  return {
    isRecording,
    processingAudio,
    startRecording,
    stopRecording
  };
}
