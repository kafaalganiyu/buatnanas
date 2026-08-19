export type StepType = 
  | 'opening'
  | 'story'
  | 'question'
  | 'confirmation'
  | 'celebration';

export interface ConfessionPart {
  id: number;
  content: string;
  emphasis?: boolean;
  buttonText?: string;
  subtext?: string;
  image?: string;
  imageCaption?: string;
  images?: string[];
}

export interface ConfirmationStep {
  step: number;
  question: string;
  yesText: string;
  noText: string;
}
