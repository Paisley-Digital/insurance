import {
  Component,
  inject,
  OnInit,
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
import { MatChipListbox, MatChipOption } from '@angular/material/chips';

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
  ],
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.scss',
})
export class EmployeeManagementComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  readonly dialog = inject(MatDialog);
  protected readonly employeeStatus = employeeStatus;

  invitationDialog = viewChild<TemplateRef<unknown>>('invitationDialog');
  successfulInviteDialog = viewChild<TemplateRef<unknown>>(
    'successfulInviteDialog'
  );

  collectedData = COLLECTED_DATA_EMPLOYEE;
  dataEmployeeSource = new MatTableDataSource(COLLECTED_DATA_EMPLOYEE);
  invitationDialogRef?: MatDialogRef<unknown>;
  displayedColumnsCollection: string[] = [
    'fullName',
    'email',
    'registrationDate',
    'status',
    'arrow',
  ];
  statusForm = new FormControl('');
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

  private filterTableWithSelectedStatus() {
    this.statusForm.valueChanges.subscribe((status) => {
      if (status) {
        this.dataEmployeeSource.data = this.collectedData.filter(
          (employee) => employee.enum === status
        );
        return;
      }
      this.dataEmployeeSource.data = this.collectedData;
    });
  }
}
