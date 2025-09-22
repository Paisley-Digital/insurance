import {
  AfterViewInit,
  Component,
  computed,
  inject,
  signal,
  TemplateRef,
  viewChild,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import {
  COLLECTED_DATA,
  EMPLOYEE_KYC_DATA,
  EMPLOYEE_KYC_EXPIRE,
  EMPLOYEE_KYC_REJECTED,
  EMPLOYER_DATA,
  ENTITY_DATA,
} from '@insurance-employee-data-dashboards';
import { MatButton, MatIconButton } from '@angular/material/button';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatDivider } from '@angular/material/divider';
import { MatOption, MatRipple } from '@angular/material/core';
import { MatChipsModule } from '@angular/material/chips';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInput } from '@angular/material/input';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { formatFileSize } from '@shared-util-common';
import { MatSelect } from '@angular/material/select';

interface EmployerData {
  employer: string;
  lastUpdate: string;
  numberOfForms: number;
  totalEmployees: number;
  enrolledMembers: number;
  issues: number;
  kycStatus: 'Verified' | 'unverified' | 'Pending';
}

const ACCEPTED_EXT = ['.xlsx', '.xls'];
const MAX_SIZE_BYTES = 5 * 1024 * 1024;

interface KycData {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  enrolledSince: string;
  renevwalDate: string;
}

interface KycDataExpire {
  fullName: string;
  dateOfBirth: string;
  nationality: string;
  gender: string;
  remainingValidity: string;
}

interface KycDataRejected {
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

interface EntityData {
  person: string;
  pep: 'Yes' | 'No';
  riskLevel: RiskLevel;
  documentType: DocumentType;
  submissionData: string;
  action: ActionType;
  kycStatus: KYCStatus;
}

type View =
  | 'upload'
  | 'employee'
  | 'entity'
  | 'employeeKyc'
  | 'collectedInsurance';

@Component({
  selector: 'insurance-employee-feature-employer-management',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    MatPaginatorModule,
    MatTabsModule,
    MatButton,
    MatIconButton,
    MatDivider,
    NgOptimizedImage,
    MatRipple,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatDatepickerModule,
    MatChipsModule,
    MatInput,
    ReactiveFormsModule,
    MatSelect,
    MatOption,
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  templateUrl: './employee-feature-employer-management.component.html',
  styleUrl: './employee-feature-employer-management.component.scss',
})
export class EmployeeFeatureEmployerManagementComponent
  implements AfterViewInit
{
  private addEmployerDialogRef?: MatDialogRef<unknown>;
  private uploadFileRef?: MatDialogRef<unknown>;
  private fb = inject(FormBuilder);

  readonly dialog = inject(MatDialog);
  data: EmployerData[] = EMPLOYER_DATA;
  dataKyc: KycData[] = EMPLOYEE_KYC_DATA;
  dataKycExpire: KycDataExpire[] = EMPLOYEE_KYC_EXPIRE;
  dataKycRejected: KycDataRejected[] = EMPLOYEE_KYC_REJECTED;
  eneityData: EntityData[] = ENTITY_DATA;
  collectedData = COLLECTED_DATA;
  selectedTransactionId: number | null = null;
  selectedTransactionExpiredId: number | null = null;
  selectedTransactionRejectedId: number | null = null;

  uploadFilePreview: string | ArrayBuffer | null = null;

  _view = signal<View>('employee');
  // fileUpload = signal('');
  // fileSelected = signal<File | null>(null);
  _isExpanded = signal(true);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('uploadDialog') uploadDialog!: TemplateRef<unknown>;
  @ViewChild('addEmployerDialog') addEmployerDialog!: TemplateRef<unknown>;

  downloadDialog = viewChild<TemplateRef<unknown>>('downloadDialog');

  displayedColumns: string[] = [
    'employer',
    'lastUpdate',
    'numberOfForms',
    'totalEmployees',
    'enrolledMembers',
    'issues',
    'kycStatus',
    'action',
  ];

  displayedColumnsCollection: string[] = [
    'employer',
    'lastUpdate',
    'numberOfForms',
    'totalEmployees',
    'enrolledMembers',
    'issues',
    'kycStatus',
    'id',
    'passport',
  ];

  displayedColumnsKyc: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'enrolledSince',
    'renevwalDate',
    'action',
  ];

  displayedColumnsKycExpire: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'remainingValidity',
    'action',
  ];

  displayedColumnsKycRejected: string[] = [
    'fullName',
    'dateOfBirth',
    'nationality',
    'gender',
    'rejectionReason',
    'action',
  ];

  employerForm = this.fb.group({
    employerName: ['', Validators.required],
    employerEmail: ['', [Validators.required, Validators.email]],
    country: ['', Validators.required],
    industryType: ['', Validators.required],
  });

  employeeForm = this.fb.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    idNumber: ['', Validators.required],
    nationality: ['', Validators.required],
    gender: [''],
  });

  dataSource = new MatTableDataSource<EmployerData>(this.data);
  entityDataSource = new MatTableDataSource<EntityData>(this.eneityData);
  kycDataSource = new MatTableDataSource<KycData>(this.dataKyc);
  kycExpireDataSource = new MatTableDataSource<KycDataExpire>(
    this.dataKycExpire
  );

  kycRejectedDataSource = new MatTableDataSource<KycDataRejected>(
    this.dataKycRejected
  );

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  nextStep() {
    this._view.set('upload');
  }

  backEntity() {
    this._view.set('upload');
  }

  back() {
    this._view.set('employee');
  }

  entity() {
    this._view.set('entity');
  }

  employee() {
    this._view.set('employeeKyc');
  }

  setSelectedTransaction(id: number) {
    this.selectedTransactionId = this.selectedTransactionId !== id ? id : null;
  }

  setSelectedTransactionExpired(id: number) {
    this.selectedTransactionExpiredId =
      this.selectedTransactionExpiredId !== id ? id : null;
  }

  setSelectedTransactionRejected(id: number) {
    this.selectedTransactionRejectedId =
      this.selectedTransactionRejectedId !== id ? id : null;
  }

  changeViewToCollection() {
    this._view.set('collectedInsurance');
  }

  openDialog() {
    this.dialog.open(this.downloadDialog()!, {
      width: '480px',
    });
  }

  backList() {
    this._view.set('employeeKyc');
  }

  setExpandValue() {
    this._isExpanded.update((current) => !current);
  }

  openUploadDialog() {
    this.uploadFileRef = this.dialog.open(this.uploadDialog);
  }

  openAddEmployerDialog() {
    this.addEmployerDialogRef = this.dialog.open(this.addEmployerDialog);
  }

  submit() {
    if (this.employerForm.valid && this.employeeForm.valid) {
      console.log('www');
    }
  }

  ACCEPTED_ATTR = ACCEPTED_EXT.join(',');
  isDragging = false;

  file = signal<File | null>(null);
  uploading = signal(false);
  validationError = signal<string | null>(null);

  close() {
    // this.ref.close();
    console.log('ww');
  }

  onDragOver(e: DragEvent) {
    e.preventDefault();
    this.isDragging = true;
  }
  onDragLeave(_: DragEvent) {
    this.isDragging = false;
  }
  onDrop(e: DragEvent) {
    e.preventDefault();
    this.isDragging = false;
    const f = e.dataTransfer?.files?.[0];
    if (f) this.setFile(f);
  }

  onFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    const f = input.files?.[0];
    if (f) this.setFile(f);
    input.value = '';
  }

  private setFile(f: File) {
    this.file.set(f);
    this.validate(f);
  }

  isValid = computed(() => !this.validationError() && !!this.file());

  private validate(f: File) {
    const name = f.name.toLowerCase();
    const extOk = ACCEPTED_EXT.some((ext) => name.endsWith(ext));
    if (!extOk) {
      this.validationError.set('Invalid file type. Use .xlsx or .xls');
      return;
    }

    if (f.size > MAX_SIZE_BYTES) {
      this.validationError.set('File size exceeds 5MB.');
      return;
    }
    this.validationError.set(null);
  }

  async startUpload() {
    if (!this.isValid()) return;
    this.uploading.set(true);

    await new Promise((r) => setTimeout(r, 1200));

    this.uploading.set(false);
  }

  humanSize(n: number): string {
    if (n < 1024) return `${n} B`;
    const kb = n / 1024;
    if (kb < 1024) return `${kb.toFixed(1)} KB`;
    return `${(kb / 1024).toFixed(1)} MB`;
  }
}
