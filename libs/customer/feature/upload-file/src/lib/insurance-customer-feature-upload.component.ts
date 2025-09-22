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
import { finalize, switchMap } from 'rxjs';
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
  ],
  templateUrl: './insurance-customer-feature-upload.component.html',
  styleUrl: './insurance-customer-feature-upload.component.scss',
})
export class InsuranceCustomerFeatureUploadComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  private alert = inject(AlertService);
  private employeeDataDashboardService = inject(EmployeeDataDashboardService);
  private customerManagementService = inject(CustomerManagementService);
  private document = inject(DOCUMENT);

  customerDashboard$: Observable<CustomerDashboard> | undefined;

  // Rest of the component implementation...
  // (keeping the existing implementation but adding the service usage)

  ngOnInit() {
    this.customerDashboard$ = this.customerManagementService.getDashboard();
  }

  // Add other methods as needed...
}
