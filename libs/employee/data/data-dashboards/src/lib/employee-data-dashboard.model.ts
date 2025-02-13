export interface InsuranceTypes {
  title: string;
  description: string;
  image: string;
}
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
  results: [
    {
      result: string;
      json_result: JsonResult[];
    }
  ];
}

export interface JsonResult {
  document_type: string;
  Id_number: string;
  Occupation: string;
  Sponsor_Employer: string;
  place_of_birth: string;
  holders_signature: string;
  expiry_date: string;
  issuing_country: string;
  name: string;
  last_name: string;
  Nationality: string;
  Gender: string;
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
