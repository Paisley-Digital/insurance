import {
  Component,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  signal,
  TemplateRef,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { AlertService } from '@shared-ui-alert';
import {
  AiPayload,
  EmployeeDataDashboardService,
  FormsEntity,
  JsonResult,
} from '@insurance-employee-data-dashboards';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { API_ROOT } from '@shared-util-web-sdk';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { AnimationItem } from 'lottie-web';
import { extractImage, formatFileSize, replaceKeys } from '@shared-util-common';
import { finalize, switchMap, map } from 'rxjs';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { OverlaySpinnerDirective } from '@insurance-shared-ui-overlay-spinner';
import { MatDivider } from '@angular/material/divider';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import {
  CustomerManagementService,
  CustomerDashboard,
  CustomerBulkImportService,
} from '@insurance/customer/data-services';
import { Observable } from 'rxjs';

type View = 'upload' | 'reviewEmiratesId' | 'visa' | 'passportReview' | 'table';
type FileType = 'passport' | 'emiratesIdFront' | 'emiratesIdBack' | 'residency';

@Component({
  selector: 'insurance-insurance-customer-feature-customer',
  imports: [
    CommonModule,
    MatButton,
    MatButtonModule,
    MatIcon,
    MatCardModule,
    MatTableModule,
    MatSort,
    OverlaySpinnerDirective,
    MatDivider,
    ErrorMessageComponent,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    NgOptimizedImage,
    ReactiveFormsModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './insurance-customer-feature-upload.component.html',
  styleUrl: './insurance-customer-feature-upload.component.scss',
})
export class InsuranceCustomerFeatureUploadComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private alert = inject(AlertService);
  private employeeDataDashboardService = inject(EmployeeDataDashboardService);
  private customerManagementService = inject(CustomerManagementService);
  private customerBulkImportService = inject(CustomerBulkImportService);
  private document = inject(DOCUMENT);
  private dialog = inject(MatDialog);

  customerDashboard$: Observable<CustomerDashboard> | undefined;

  // File signals
  file = signal<File | null>(null);
  filePassport = signal<File | null>(null);
  fileEmiratesIdFront = signal<File | null>(null);
  fileEmiratesIdBack = signal<File | null>(null);
  
  // File preview signals
  filePreview = signal<string | ArrayBuffer | null>(null);
  passportFilePreview = signal<string | ArrayBuffer | null>(null);
  filePreviewEmiratesIdFront = signal<string | ArrayBuffer | null>(null);
  filePreviewEmiratesIdBack = signal<string | ArrayBuffer | null>(null);
  
  // File size signals
  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeIdFront = signal('');
  fileSizeIdBack = signal('');
  
  // Loading signal
  _loading = signal(false);

  // Other properties
  currentView: View = 'upload';
  forms: FormsEntity[] = [];
  displayedColumns = ['name', 'status', 'actions'];

  ngOnInit() {
    this.customerDashboard$ = this.customerManagementService.getDashboard().pipe(
      map(response => response.data)
    );
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.file.set(file);
      this.fileSize.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'residency');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onFileSelectedPassport(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.filePassport.set(file);
      this.fileSizePassport.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'passport');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onFileSelectedIdFront(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileEmiratesIdFront.set(file);
      this.fileSizeIdFront.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'emiratesIdFront');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onFileSelectedIdBack(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileEmiratesIdBack.set(file);
      this.fileSizeIdBack.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'emiratesIdBack');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  removeFile() {
    this.filePreview.set(null);
    this.file.set(null);
  }

  removeFilePassport() {
    this.passportFilePreview.set(null);
    this.filePassport.set(null);
  }

  removeFileIdFront() {
    this.filePreviewEmiratesIdFront.set(null);
    this.fileEmiratesIdFront.set(null);
  }

  removeFileIdBack() {
    this.filePreviewEmiratesIdBack.set(null);
    this.fileEmiratesIdBack.set(null);
  }

  uploadFiles() {
    this._loading.set(true);
    
    // Example of using the bulk import service
    const file = this.file();
    if (file) {
      this.customerBulkImportService.uploadFile(file, 'Customer document upload').subscribe({
        next: (response) => {
          console.log('File uploaded successfully:', response);
          this.alert.open('Files uploaded successfully!');
          this._loading.set(false);
        },
        error: (error) => {
          console.error('Error uploading file:', error);
          this.alert.open('Error uploading files!');
          this._loading.set(false);
        }
      });
    } else {
      this._loading.set(false);
    }
  }

  private updateFilePreview(file: File, type: FileType) {
    const reader = new FileReader();
    reader.onload = () => {
      switch (type) {
        case 'residency':
          this.filePreview.set(reader.result);
          break;
        case 'passport':
          this.passportFilePreview.set(reader.result);
          break;
        case 'emiratesIdFront':
          this.filePreviewEmiratesIdFront.set(reader.result);
          break;
        case 'emiratesIdBack':
          this.filePreviewEmiratesIdBack.set(reader.result);
          break;
      }
    };
    reader.readAsDataURL(file);
  }

  private showAlertInUploadFileMaximumSize() {
    this.alert.open('File size exceeds 2MB!');
  }
}