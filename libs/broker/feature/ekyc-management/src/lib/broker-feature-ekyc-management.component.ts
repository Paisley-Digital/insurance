import {
  Component,
  inject,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { AlertService } from '@shared-ui-alert';
import { ErrorMessageComponent } from '@shared-ui-input-validator';
import { MatSelectModule } from '@angular/material/select';
import {
  country,
  ELEMENT_DATA,
  ELEMENT_DATA_Board_Members,
  ELEMENT_DATA_Board_Members_Four,
} from './ekyc-management.constant';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { formatFileSize } from '@shared-util-common';

type FileType = 'firstStep' | 'fund' | 'lastStepOfOne' | 'lastStepOfSecond';

@Component({
  selector: 'insurance-broker-feature-ekyc-management',
  imports: [
    CommonModule,
    MatCard,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIcon,
    MatSelectModule,
    ErrorMessageComponent,
    MatDatepickerModule,
    MatRadioModule,
    MatTableModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    NgOptimizedImage,
  ],
  templateUrl: './broker-feature-ekyc-management.component.html',
  styleUrl: './broker-feature-ekyc-management.component.scss',
})
export class BrokerFeatureEkycManagementComponent {
  private formBuilder = inject(FormBuilder);
  private alert = inject(AlertService);
  private dialog = inject(MatDialog);

  readonly maxCharLength = 120;
  protected readonly country = country;

  @ViewChild('successfulAction') successfulAction!: TemplateRef<unknown>;

  toDay = new Date();
  dataSource = ELEMENT_DATA;
  boardMembersList = ELEMENT_DATA_Board_Members;
  boardMembersListFour = ELEMENT_DATA_Board_Members_Four;

  licenseFile = signal<File | null>(null);
  licenseFilePreview = signal<string | ArrayBuffer | null>(null);
  licenseFileSize = signal('');
  fileFund = signal<File | null>(null);
  filePreviewFund = signal<string | ArrayBuffer | null>(null);
  fileSizeFund = signal('');
  fileStamp = signal<File | null>(null);
  filePreviewStamp = signal<string | ArrayBuffer | null>(null);
  fileSizeStamp = signal('');
  fileSignature = signal<File | null>(null);
  filePreviewSignature = signal<string | ArrayBuffer | null>(null);
  fileSizeSignature = signal('');
  displayedColumns = signal<string[]>([
    'position',
    'name',
    'weight',
    'symbol',
    'empty',
  ]);
  displayedColumnsBoardMemberStepFour = signal<string[]>([
    'position',
    'name',
    'weight',
    'symbol',
    'office',
    'appointment',
    'edit',
  ]);
  displayedColumnsBoardMember = signal<string[]>([
    'position',
    'name',
    'weight',
    'symbol',
    'edit',
  ]);

  companyInfoForm = this.formBuilder.group({
    fullLegalName: ['', Validators.required],
    fullTradingName: ['', Validators.required],
    typeOfCompany: ['', Validators.required],
    licenseNumber: ['', Validators.required],
    registeredAddress: [
      '',
      [Validators.required, Validators.maxLength(this.maxCharLength)],
    ],
    businessAddress: [
      '',
      [Validators.required, Validators.maxLength(this.maxCharLength)],
    ],
    country: ['', Validators.required],
    tradeLicenseNumber: ['', Validators.required],
    date: [Validators.required],
  });

  shareholdersForm = this.formBuilder.group({
    authorityName: ['', [Validators.required]],
    licenseNumber: ['', Validators.required],
  });

  boardManagementForm = this.formBuilder.group({
    businessAddress: [
      '',
      [Validators.required, Validators.maxLength(this.maxCharLength)],
    ],
  });

  declarationForm = this.formBuilder.group({
    signatory: ['', [Validators.required]],
    designation: ['', Validators.required],
    companyName: ['', [Validators.required]],
    date: [Validators.required],
  });

  get getCharacter() {
    return `(Allowed characters: ${
      this.companyInfoForm.value.registeredAddress!.length || 0
    } - ${this.maxCharLength})`;
  }

  get getCharacterBusinessAddress() {
    return `(Allowed characters: ${
      this.companyInfoForm.value.businessAddress!.length || 0
    } - ${this.maxCharLength})`;
  }

  get getCharacterAddress() {
    return `(Allowed characters: ${
      this.boardManagementForm.value.businessAddress!.length || 0
    } - ${this.maxCharLength})`;
  }

  onFileLicenseSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.licenseFile.set(file);
      this.licenseFileSize.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'firstStep');
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
      this.updateFilePreview(file, 'firstStep');
      this.licenseFileSize.set(formatFileSize(file.size));
    }
  }

  onFileSelectedFund(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileFund.set(file);
      this.fileSizeFund.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'fund');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onDragOverFund(event: DragEvent) {
    event.preventDefault();
  }

  onDropFund(event: DragEvent) {
    event.preventDefault();

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.fileFund.set(file);
      this.updateFilePreview(file, 'fund');
      this.fileSizeFund.set(formatFileSize(file.size));
    }
  }

  onFileSelectedStamp(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileStamp.set(file);
      this.fileSizeStamp.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'lastStepOfOne');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onDragStampFile(event: DragEvent) {
    event.preventDefault();
  }

  onDropStampFile(event: DragEvent) {
    event.preventDefault();

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.fileStamp.set(file);
      this.updateFilePreview(file, 'lastStepOfOne');
      this.fileSizeStamp.set(formatFileSize(file.size));
    }
  }

  onFileSelectedSignature(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      this.fileSignature.set(file);
      this.fileSizeSignature.set(formatFileSize(file.size));
      this.updateFilePreview(file, 'lastStepOfSecond');
      return;
    }
    this.showAlertInUploadFileMaximumSize();
  }

  onDragSignatureFile(event: DragEvent) {
    event.preventDefault();
  }

  onDropSignatureFile(event: DragEvent) {
    event.preventDefault();

    const file = event.dataTransfer?.files?.[0];
    if (file) {
      this.fileSignature.set(file);
      this.updateFilePreview(file, 'lastStepOfSecond');
      this.fileSizeSignature.set(formatFileSize(file.size));
    }
  }

  removeLicenseFile() {
    this.licenseFilePreview.set(null);
    this.licenseFile.set(null);
  }

  removeFileFund() {
    this.filePreviewFund.set(null);
    this.fileFund.set(null);
  }

  removeFileStamp() {
    this.filePreviewStamp.set(null);
    this.fileStamp.set(null);
  }

  removeFileSignature() {
    this.filePreviewSignature.set(null);
    this.fileSignature.set(null);
  }

  submitForm() {
    if (this.declarationForm.invalid) return;
    this.dialog.open(this.successfulAction, {
      width: '460px',
    });
  }

  private updateFilePreview(file: File, type: FileType) {
    const reader = new FileReader();
    reader.onload = () => {
      switch (type) {
        case 'firstStep':
          this.licenseFilePreview.set(reader.result);
          break;
        case 'fund':
          this.filePreviewFund.set(reader.result);
          break;
        case 'lastStepOfOne':
          this.filePreviewStamp.set(reader.result);
          break;
        case 'lastStepOfSecond':
          this.filePreviewSignature.set(reader.result);
          break;
      }
    };
    reader.readAsDataURL(file);
  }

  private showAlertInUploadFileMaximumSize() {
    this.alert.open('File size exceeds 2MB!');
  }
}
