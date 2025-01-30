export interface BrokerResponse {
  companyId: string;
  fileName: string;
  fileType: string;
  downloadUrl: string;
}

export interface AiPayload {
  contents: ContentPayload[];
}

export interface ContentPayload {
  extraction_type: string;
  image_url: string;
}

export interface AiResponse {
  results: {
    result: string;
  };
}
