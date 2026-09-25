// Web Speech API text-to-speech helper designed for elderly accessibility

type SpeechCallback = (isSpeaking: boolean) => void;

let activeCallback: SpeechCallback | null = null;

export const isSpeechSupported = (): boolean => {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
};

export const stopSpeech = () => {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
    if (activeCallback) {
      activeCallback(false);
      activeCallback = null;
    }
  }
};

export const speakText = (text: string, onStateChange?: SpeechCallback) => {
  if (!isSpeechSupported()) {
    console.warn('Speech synthesis not supported in this browser.');
    return;
  }

  // Cancel any ongoing utterance
  stopSpeech();

  if (onStateChange) {
    activeCallback = onStateChange;
  }

  const cleanText = text.replace(/<[^>]*>?/gm, '').trim();
  if (!cleanText) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  // Slightly slower rate (0.9) and standard pitch for clear elderly comprehension
  utterance.rate = 0.9;
  utterance.pitch = 1.0;

  // Attempt to select an English clear voice if possible
  const voices = window.speechSynthesis.getVoices();
  const naturalVoice = voices.find(
    v => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))
  ) || voices.find(v => v.lang.startsWith('en'));

  if (naturalVoice) {
    utterance.voice = naturalVoice;
  }

  utterance.onstart = () => {
    if (activeCallback) activeCallback(true);
  };

  utterance.onend = () => {
    if (activeCallback) {
      activeCallback(false);
      activeCallback = null;
    }
  };

  utterance.onerror = () => {
    if (activeCallback) {
      activeCallback(false);
      activeCallback = null;
    }
  };

  window.speechSynthesis.speak(utterance);
};
