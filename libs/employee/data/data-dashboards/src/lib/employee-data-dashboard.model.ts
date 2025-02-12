export interface InsuranceTypes {
  title: string;
  description: string;
  image: string;
}

export interface FileResponse {
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
  image_urls: string[];
}

export interface AiResponse {
  results: {
    result: string;
  };
}

export interface UploadImage {
  id?: string;
  check?: boolean;
  source: File;
}

export interface UploadImageResponse {
  companyId: string;
  fileName: string;
  fileType: string;
  downloadUrl: string;
}
