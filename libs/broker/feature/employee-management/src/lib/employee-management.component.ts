import {
  Component,
  inject,
  OnInit,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {
  MatDialog,
  MatDialogActions,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { MatFormFieldModule, MatSuffix } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  COLLECTED_DATA_EMPLOYEE,
  EmployeeStatus,
  employeeStatus,
  statusClasses,
} from './constant';
import { MatSelectModule } from '@angular/material/select';
import { RouterLink } from '@angular/router';
import {
  MatChipListbox,
  MatChipOption,
  MatChipRemove,
} from '@angular/material/chips';
import { MatPaginator } from '@angular/material/paginator';
import { formatFileSize } from '@shared-util-common';
import { AlertService } from '@shared-ui-alert';

@Component({
  selector: 'insurance-employee-management',
  imports: [
    CommonModule,
    MatCard,
    MatButton,
    MatTableModule,
    MatIconModule,
    MatDialogActions,
    MatDialogModule,
    ErrorMessageComponent,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSuffix,
    NgOptimizedImage,
    MatIconButton,
    MatSelectModule,
    RouterLink,
    MatChipListbox,
    MatChipOption,
    MatPaginator,
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
})
export class EmployeeManagementComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  readonly dialog = inject(MatDialog);
  private alert = inject(AlertService);
  protected readonly employeeStatus = employeeStatus;

  invitationDialog = viewChild<TemplateRef<unknown>>('invitationDialog');
  successfulInviteDialog = viewChild<TemplateRef<unknown>>(
    'successfulInviteDialog'
  );

  deleteEmployeeDialog = viewChild<TemplateRef<unknown>>(
    'deleteEmployeeDialog'
  );

  bulkDialog = viewChild<TemplateRef<unknown>>('bulkDialog');

  userId = signal<number | null>(null);
  licenseFile = signal<File | null>(null);
  licenseFilePreview = signal<string | ArrayBuffer | null>(null);
  licenseFileSize = signal('');

  collectedData = COLLECTED_DATA_EMPLOYEE;
  dataEmployeeSource = new MatTableDataSource(COLLECTED_DATA_EMPLOYEE);
  invitationDialogRef?: MatDialogRef<unknown>;
  deleteDialogRef?: MatDialogRef<unknown>;
  displayedColumnsCollection: string[] = [
    'fullName',
    'email',
    'requestDate',
    'registrationDate',
    'status',
    'delete',
    'arrow',
  ];
  statusForm = new FormControl('ALL' as EmployeeStatus);
  invitationForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
  });

  employeeStatusClasses(status: EmployeeStatus) {
    return statusClasses[status];
  }

  ngOnInit() {
    this.filterTableWithSelectedStatus();
  }

  openInvitationDialog() {
    this.invitationDialogRef = this.dialog.open(this.invitationDialog()!, {
      width: '460px',
    });
  }

  sendInvite() {
    if (this.invitationForm.invalid) return;
    this.invitationDialogRef?.close();
    this.dialog.open(this.successfulInviteDialog()!, {
      width: '460px',
    });
  }

  deleteEmployee(id: number) {
    this.userId.set(id);
    this.deleteDialogRef = this.dialog.open(this.deleteEmployeeDialog()!, {
      width: '460px',
    });
  }

  confirmDeleteEmployee() {
    this.collectedData = this.collectedData.filter(
      (employee) => employee.id !== this.userId()
    );

    this.filterTableWithSelectedStatusAfterDelete();
    this.deleteDialogRef?.close();
  }

  onFileLicenseSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.licenseFile.set(file);
      this.licenseFileSize.set(formatFileSize(file.size));
      this.updateFilePreview(file);
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onDragOverLicenseFile(event: DragEvent) {
    event.preventDefault();
  }

  onDropLicenseFile(event: DragEvent) {
    event.preventDefault();

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.licenseFile.set(file);
      this.updateFilePreview(file);
      this.licenseFileSize.set(formatFileSize(file.size));
    }
  }

  removeLicenseFile() {
    this.licenseFilePreview.set(null);
    this.licenseFile.set(null);
  }

  openUploadBulkDialog() {
    this.dialog.open(this.bulkDialog()!, {
      width: '460px',
    });
  }

  private updateFilePreview(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.licenseFilePreview.set(reader.result);
    };
    reader.readAsDataURL(file);
  }

  private showAlertInUploadFileMaximumSize() {
    this.alert.open('File size exceeds 2MB!');
  }

  private filterTableWithSelectedStatusAfterDelete() {
    const status = this.statusForm.value;
    if (status !== 'ALL') {
      this.dataEmployeeSource.data = this.collectedData.filter(
        (employee) => employee.enum === status
      );
    } else {
      this.dataEmployeeSource.data = this.collectedData;
    }
  }

  private filterTableWithSelectedStatus() {
    this.statusForm.valueChanges.subscribe((status) => {
      if (status !== 'ALL') {
        this.dataEmployeeSource.data = this.collectedData.filter(
          (employee) => employee.enum === status
        );
        return;
      } else if (status === 'ALL') {
        this.dataEmployeeSource.data = this.collectedData;
        return;
      }
      this.dataEmployeeSource.data = this.collectedData;
    });
  }
}
