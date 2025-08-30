import { StepState } from '@angular/cdk/stepper';

export interface Employee {
  id: number;
  person: string;
  email: string;
  date: string;
  status: string;
  enum: string;
  image: string;
  index: number;
  step: {
    title: string;
    description: string;
    image?: string;
    image1?: string;
    image2?: string;
  }[];
  type: StepState;
}
export const COLLECTED_DATA_EMPLOYEE: Employee[] = [
  {
    id: 1,
    person: 'Annette Black',
    email: 'tim.jennings@example.com',
    date: '11/07/2024',
    status: 'Registered',
    enum: 'REGISTERED',
    image: './assets/images/image-3.svg',
    index: 2,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 2,
    person: 'Borzo Baradari',
    email: 'debra.holt@example.com',
    date: '03/04/2023',
    status: 'Documents incomplete',
    enum: 'INCOMPLETE',
    image: './assets/images/baradari.svg',
    index: 2,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents incomplete',
        description:
          'Some required documents are missing or incorrect. The user needs to upload the necessary files to proceed.',
        image: './assets/images/pass-1.svg',
        image1: './assets/images/pass-2.svg',
        image2: './assets/images/pass-3.svg',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'error',
  },
  {
    id: 3,
    person: 'Ronald Richards',
    email: 'jackson.graham@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
    image: './assets/images/image-4.svg',
    index: 2,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 4,
    person: 'Dianne Russell',
    email: 'kenzi.lawson@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'APPROVED',
    image: './assets/images/image2.svg',
    index: 4,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 5,
    person: 'Annette Black',
    email: 'willie.jennings@example.com',
    date: '11/07/2024',
    status: 'Registered',
    enum: 'REGISTERED',
    image: './assets/images/image-3.svg',
    index: 3,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 6,
    person: 'Dianne Russell',
    email: 'georgia.young@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'REGISTERED',
    image: './assets/images/image1.svg',
    index: 1,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 7,
    person: 'Ronald Richards',
    email: 'michelle.rivera@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
    image: './assets/images/image-4.svg',
    index: 4,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 8,
    person: 'Devon Lane',
    email: 'bill.sanders@example.com',
    date: '03/04/2023',
    status: 'Rejected by broker',
    enum: 'REJECTED',
    image: './assets/images/image-5.svg',
    index: 1,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 9,
    person: 'Dianne Russell',
    email: 'deanna.curtis@example.com',
    date: '05/30/2025',
    status: 'Invitation sent',
    enum: 'SENT',
    image: './assets/images/image1.svg',
    index: 3,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 10,
    person: 'Ronald Richards',
    email: 'jackson.graham@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
    image: './assets/images/image-4.svg',
    index: 2,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 11,
    person: 'Annette Black',
    email: 'nevaeh.simmons@example.com',
    date: '11/07/2024',
    status: 'Documents incomplete',
    enum: 'REGISTERED',
    image: './assets/images/image-3.svg',
    index: 1,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 12,
    person: 'Dianne Russell',
    email: 'sara.cruz@example.com',
    date: '05/30/2025',
    status: 'Invitation sent',
    enum: 'SENT',
    image: './assets/images/image-1.svg',
    index: 4,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 13,
    person: 'Dianne Russell',
    email: 'jessica.hanson@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'APPROVED',
    image: './assets/images/image-1.svg',
    index: 2,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 14,
    person: 'Devon Lane',
    email: 'felicia.reid@example.com',
    date: '03/04/2023',
    status: 'Rejected by broker',
    enum: 'REJECTED',
    image: './assets/images/image-5.svg',
    index: 3,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
  {
    id: 15,
    person: 'Ronald Richards',
    email: 'curtis.weaver@example.com',
    date: '12/10/2023',
    status: 'Approved by broker',
    enum: 'APPROVED',
    image: './assets/images/image-4.svg',
    index: 1,
    step: [
      {
        title: 'Invitation sent',
        description:
          'An invitation email has been sent to the user. They need to check their inbox and follow the instructions to proceed with registration.',
      },
      {
        title: 'Registered',
        description:
          'The user has successfully created an account in the portal. Next, they need to upload the required documents.',
      },
      {
        title: 'Documents completed',
        description:
          'The user has uploaded all required documents. The broker will now review and verify them.',
      },
      {
        title: 'Approved by broker',
        description:
          'The broker has reviewed and approved the users documents. The registration process is now complete.',
      },
    ],
    type: 'edit',
  },
];

export const statusClasses: Record<string, string> = {
  REGISTERED: '!bg-purple-200 !text-purple-500',
  INCOMPLETE: '!bg-yellow-100 !text-yellow-500',
  COMPLETE: '!bg-blue-100 !text-blue-500',
  APPROVED: '!bg-green-100 !text-green-500',
  REJECTED: '!bg-red-100 !text-red-500',
  SENT: '!bg-gray-100 !text-gray-500',
};
