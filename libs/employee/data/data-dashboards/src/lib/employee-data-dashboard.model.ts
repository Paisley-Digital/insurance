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
  Surname: string;
  First_Name: string;
  Date_of_Birth: string;
  Age_at_31_Dec_24: string;
  Sex: string;
  Nationality: string;
  Emirate_of_Visa_Issue: string;
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
