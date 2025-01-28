export interface BrokerResponse {
  companyId: string;
  fileName: string;
  fileType: string;
  downloadUrl: string;
}

export interface AiPayload {
  model: string;
  messages: [
    {
      role: string;
      content: (ContentPayload | { type: string; text: string })[];
    }
  ];
  max_tokens: number;
}

export interface ContentPayload {
  type: string;
  image_url: {
    url: string;
  };
}

export interface AiResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
  usage: Usage;
  service_tier: string;
  system_fingerprint: string;
}

export interface Choice {
  index: number;
  message: Message;
  logprobs: null;
  finish_reason: string;
}

export interface Message {
  role: string;
  content: string;
  refusal: null;
}

export interface Usage {
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  prompt_tokens_details: TokenDetails;
  completion_tokens_details: TokenDetails;
}

export interface TokenDetails {
  cached_tokens: number;
  audio_tokens: number;
  accepted_prediction_tokens: number;
  rejected_prediction_tokens: number;
  reasoning_tokens?: number;
}

export interface NormalizedContent {
  Surname: string;
  Not_Found: string;
  First_Name: string;
  Date_of_Birth: string;
  Sex: string;
  Age_at_31_Dec_24: string;
  Nationality: string;
  Emirate_of_Visa_Issue: string;
}
