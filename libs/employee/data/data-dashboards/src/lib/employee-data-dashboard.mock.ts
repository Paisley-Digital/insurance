import {
  EmployerData,
  KycData,
  KycDataExpire,
  KycDataRejected,
  EntityData,
  InsuranceTypes,
} from './employee-data-dashboard.model';

export const EMPLOYER_DATA: EmployerData[] = [
  {
    employer: 'Emaar',
    lastUpdate: '05/30/2025',
    numberOfForms: 119,
    totalEmployees: 10850,
    enrolledMembers: 7955,
    issues: 2895,
    kycStatus: 'Verified',
  },
  {
    employer: 'The Walt Disney',
    lastUpdate: '11/07/2024',
    numberOfForms: 120,
    totalEmployees: 3500,
    enrolledMembers: 2800,
    issues: 700,
    kycStatus: 'unverified',
  },
  {
    employer: 'IBM',
    lastUpdate: '03/04/2023',
    numberOfForms: 570,
    totalEmployees: 8870,
    enrolledMembers: 8300,
    issues: 570,
    kycStatus: 'Pending',
  },
  {
    employer: 'Pizza Hut',
    lastUpdate: '12/10/2023',
    numberOfForms: 70,
    totalEmployees: 2466,
    enrolledMembers: 2150,
    issues: 316,
    kycStatus: 'Verified',
  },
  {
    employer: 'Microsoft',
    lastUpdate: '01/12/2025',
    numberOfForms: 300,
    totalEmployees: 12000,
    enrolledMembers: 10000,
    issues: 2000,
    kycStatus: 'Verified',
  },
  {
    employer: 'Google',
    lastUpdate: '02/14/2025',
    numberOfForms: 450,
    totalEmployees: 15000,
    enrolledMembers: 12000,
    issues: 3000,
    kycStatus: 'Pending',
  },
];

export const EMPLOYEE_KYC_DATA: KycData[] = [
  {
    id: 1,
    fullName: 'Borzo Barardari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    enrolledSince: '18/05/2020',
    renevwalDate: '18/05/2025',
  },
  {
    id: 2,
    fullName: 'Ehsan Baradari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    enrolledSince: '01/08/2015',
    renevwalDate: '01/08/2015',
  },
  {
    id: 3,
    fullName: 'Albert Flores',
    dateOfBirth: '9/07/8/2016',
    nationality: 'Greensboro (NC)',
    gender: 'M',
    enrolledSince: '15/07/2017',
    renevwalDate: '15/07/2017',
  },
  {
    id: 4,
    fullName: 'Annette Black',
    dateOfBirth: '10/28/2012',
    nationality: 'Hagen',
    gender: 'M',
    enrolledSince: '01/10/2019',
    renevwalDate: '01/10/2019',
  },
];

export const EMPLOYEE_KYC_EXPIRE: KycDataExpire[] = [
  {
    id: 1,
    fullName: 'Bahador Barardari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    remainingValidity: 'Residency Visa (Expiring in 10 days)',
  },
  {
    id: 2,
    fullName: 'Ehsan Baradari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    remainingValidity: 'Passport (Expiring in 30 days)',
  },
  {
    id: 3,
    fullName: 'Albert Flores',
    dateOfBirth: '90/18/2016',
    nationality: 'Greensboro (NC)',
    gender: 'F',
    remainingValidity: 'Emirates ID (Expiring in 120 days)',
  },
  {
    id: 4,
    fullName: 'Adil Tom',
    dateOfBirth: '15/28/2008',
    nationality: 'Dubai',
    gender: 'M',
    remainingValidity: 'Passport (Expiring in 30 days)',
  },
  {
    id: 5,
    fullName: 'Annette Black',
    dateOfBirth: '10/28/2012',
    nationality: 'Hagen',
    gender: 'M',
    remainingValidity: 'Residency Visa (Expiring in 10 days)',
  },
];

export const EMPLOYEE_KYC_REJECTED: KycDataRejected[] = [
  {
    id: 1,
    fullName: 'Babak Barardari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    rejectionReason: 'Residency Visa was unclear',
  },
  {
    id: 2,
    fullName: 'Ehsan Baradari',
    dateOfBirth: '10/01/1982',
    nationality: 'Luxembourg',
    gender: 'M',
    rejectionReason: 'Passport was unclear',
  },
  {
    id: 3,
    fullName: 'Albert Flores',
    dateOfBirth: '90/18/2016',
    nationality: 'Greensboro (NC)',
    gender: 'F',
    rejectionReason: 'Emirates ID  unclear',
  },
  {
    id: 4,
    fullName: 'Adil Tom',
    dateOfBirth: '15/28/2008',
    nationality: 'Dubai',
    gender: 'M',
    rejectionReason: 'Passport was unclear',
  },
  {
    id: 5,
    fullName: 'Annette Black',
    dateOfBirth: '10/28/2012',
    nationality: 'Hagen',
    gender: 'M',
    rejectionReason: 'Residency Visa was unclear',
  },
];

export const ENTITY_DATA: EntityData[] = [
  {
    person: 'John Doe',
    pep: 'Yes',
    riskLevel: 'High',
    documentType: 'Passport',
    submissionData: '22/01/2024',
    action: 'View / Review',
    kycStatus: 'Compliant',
  },
  {
    person: 'Omar AlSaeed',
    pep: 'No',
    riskLevel: 'Low',
    documentType: 'National ID',
    submissionData: '15/01/2024',
    action: 'View',
    kycStatus: 'Non-Compliant',
  },
  {
    person: 'Ahmed Nasr',
    pep: 'No',
    riskLevel: 'Medium',
    documentType: 'Driving License',
    submissionData: '20/01/2024',
    action: 'Review',
    kycStatus: 'Pending',
  },
  {
    person: 'Ferhad Abdi',
    pep: 'Yes',
    riskLevel: 'Low',
    documentType: 'National ID',
    submissionData: '06/01/2024',
    action: 'View',
    kycStatus: 'Pending',
  },
  {
    person: 'Fatima Akhalid',
    pep: 'Yes',
    riskLevel: 'High',
    documentType: 'Passport',
    submissionData: '10/01/2024',
    action: 'Review',
    kycStatus: 'Compliant',
  },
];

export const employeeDataDashboardMock: InsuranceTypes[] = [
  {
    image: '/assets/images/medical.jpg',
    title: 'Medical Insurance',
    description:
      'Medical insurance covers medical and hospital expenses and helps people in financial management of treatment.',
  },
  {
    image: '/assets/images/fire.jpg',
    title: 'Fire Insurance',
    description:
      'This insurance includes coverage such as damage to the vehicle, financial liability to others, and theft.',
  },
  {
    image: '/assets/images/car.jpg',
    title: 'Car Insurance',
    description:
      'Car insurance covers damages caused by accidents, theft, fire and damage to the car and helps owners manage unexpected expenses.',
  },
  {
    image: '/assets/images/work.jpg',
    title: 'Work Insurance',
    description:
      'Labor insurance protects the employer and workers against work accidents, damages and legal obligations.',
  },
  {
    image: '/assets/images/accident.jpg',
    title: 'Accident Insurance',
    description:
      'Accident insurance covers life and financial damages caused by accidents and protects against sudden expenses.',
  },
  {
    image: '/assets/images/travel.jpg',
    title: 'Medical Insurance',
    description:
      'Travel insurance covers expenses related to accidents, illness, or trip cancellations during travel.',
  },
];
