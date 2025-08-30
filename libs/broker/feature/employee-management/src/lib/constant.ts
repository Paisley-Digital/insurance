export interface Employee {
  id: number;
  person: string;
  email: string;
  date: string;
  status: string;
  enum: string;
}
export const COLLECTED_DATA_EMPLOYEE: Employee[] = [
  {
    id: 1,
    person: 'Annette Black',
    email: 'tim.jennings@example.com',
    date: '11/07/2024',
    status: 'Registered',
    enum: 'REGISTERED',
  },
  {
    id: 2,
    person: 'Borzo Baradari',
    email: 'debra.holt@example.com',
    date: '03/04/2023',
    status: 'Documents incomplete',
    enum: 'INCOMPLETE',
  },
  {
    id: 3,
    person: 'Ronald Richards',
    email: 'jackson.graham@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
  },
  {
    id: 4,
    person: 'Dianne Russell',
    email: 'kenzi.lawson@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'APPROVED',
  },
  {
    id: 5,
    person: 'Annette Black',
    email: 'willie.jennings@example.com',
    date: '11/07/2024',
    status: 'Registered',
    enum: 'REGISTERED',
  },
  {
    id: 6,
    person: 'Dianne Russell',
    email: 'georgia.young@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'REGISTERED',
  },
  {
    id: 7,
    person: 'Ronald Richards',
    email: 'michelle.rivera@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
  },
  {
    id: 8,
    person: 'Devon Lane',
    email: 'bill.sanders@example.com',
    date: '03/04/2023',
    status: 'Rejected by broker',
    enum: 'REJECTED',
  },
  {
    id: 9,
    person: 'Dianne Russell',
    email: 'deanna.curtis@example.com',
    date: '05/30/2025',
    status: 'Invitation sent',
    enum: 'SENT',
  },
  {
    id: 10,
    person: 'Ronald Richards',
    email: 'jackson.graham@example.com',
    date: '12/10/2023',
    status: 'Documents completed',
    enum: 'COMPLETE',
  },
  {
    id: 11,
    person: 'Annette Black',
    email: 'nevaeh.simmons@example.com',
    date: '11/07/2024',
    status: 'Documents incomplete',
    enum: 'INCOMPLETE',
  },
  {
    id: 12,
    person: 'Dianne Russell',
    email: 'sara.cruz@example.com',
    date: '05/30/2025',
    status: 'Invitation sent',
    enum: 'SENT',
  },
  {
    id: 13,
    person: 'Dianne Russell',
    email: 'jessica.hanson@example.com',
    date: '05/30/2025',
    status: 'Approved by broker',
    enum: 'APPROVED',
  },
  {
    id: 14,
    person: 'Devon Lane',
    email: 'felicia.reid@example.com',
    date: '03/04/2023',
    status: 'Rejected by broker',
    enum: 'REJECTED',
  },
  {
    id: 15,
    person: 'Ronald Richards',
    email: 'curtis.weaver@example.com',
    date: '12/10/2023',
    status: 'Approved by broker',
    enum: 'APPROVED',
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
