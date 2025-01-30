export interface BrokerResponse {
  companyId: string;
  fileName: string;
  fileType: string;
  downloadUrl: string;
}

export interface AiPayload {
  contents: [
    {
      extraction_type: string;
      image_urls: string[];
    }
  ];
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
