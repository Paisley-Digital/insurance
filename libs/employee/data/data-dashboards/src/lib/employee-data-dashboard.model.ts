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
  birthday: string;
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

export interface FormsEntity {
  date: string;
  documentTypeEmiratesId: string;
  expireDate: string;
  gender: string;
  holderSignature: string;
  id: string;
  issuingCountry: string;
  lastName: string;
  name: string;
  nationality: string;
  occupation: string;
  placeOfBirth: string;
  sponsor: string;
}
// employer-management.model.ts

export interface EmployerData {
  employer: string;
  lastUpdate: string;
  numberOfForms: number;
  totalEmployees: number;
  enrolledMembers: number;
  issues: number;
  kycStatus: 'Verified' | 'unverified' | 'Pending';
}

export interface KycData {
  id: number;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  enrolledSince: string;
  renevwalDate: string;
}

export interface KycDataExpire {
  id: number;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  remainingValidity: string;
}

export interface KycDataRejected {
  id: number;
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  rejectionReason: string;
}

type RiskLevel = 'Low' | 'Medium' | 'High';
type DocumentType = 'Passport' | 'National ID' | 'Driving License';
type ActionType = 'View' | 'Review' | 'View / Review';
type KYCStatus = 'Compliant' | 'Non-Compliant' | 'Pending';

export interface EntityData {
  person: string;
  pep: 'Yes' | 'No';
  riskLevel: RiskLevel;
  documentType: DocumentType;
  submissionData: string;
  action: ActionType;
  kycStatus: KYCStatus;
}
