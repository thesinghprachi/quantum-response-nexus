
import React from 'react';
import { Badge } from '@/components/ui/badge';

interface TranscriptionDisplayProps {
  recognizedText: string;
  translatedText: string;
  detectedLanguage: string;
  urgencyLevel: string;
}

const TranscriptionDisplay = ({
  recognizedText,
  translatedText,
  detectedLanguage,
  urgencyLevel
}: TranscriptionDisplayProps) => {
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

  if (!recognizedText) {
    return null;
  }

  return (
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
  );
};

export default TranscriptionDisplay;
