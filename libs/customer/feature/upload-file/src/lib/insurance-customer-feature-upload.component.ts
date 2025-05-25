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

type View = 'upload' | 'reviewEmiratesId' | 'visa' | 'passportReview' | 'table';
type FileType = 'passport' | 'emiratesIdFront' | 'emiratesIdBack' | 'residency';

@Component({
  selector: 'insurance-insurance-customer-feature-customer',
  imports: [
    CommonModule,
    MatButton,
    MatIcon,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    NgOptimizedImage,
    MatTableModule,
    MatSort,
    OverlaySpinnerDirective,
    MatDivider,
    MatDialogContent,
    MatDialogTitle,
    ErrorMessageComponent,
    MatError,
    MatFormField,
    MatInput,
    MatLabel,
    MatDialogActions,
    MatDialogClose,
  ],
  templateUrl: './insurance-customer-feature-upload.component.html',
  styleUrl: './insurance-customer-feature-upload.component.scss',
  standalone: true,
})
export class InsuranceCustomerFeatureUploadComponent implements OnInit {
  private alert = inject(AlertService);
  private service = inject(EmployeeDataDashboardService);
  private formBuilder = inject(FormBuilder);
  private apiRoot = inject(API_ROOT);
  private dialog = inject(MatDialog);
  private DialogRef?: MatDialogRef<unknown>;

  @ViewChild('lottie') lottie?: ElementRef<HTMLDivElement>;
  @ViewChild('openDialogCrossDialog')
  openDialogCrossDialog!: TemplateRef<unknown>;

  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesIdFront: string | ArrayBuffer | null = null;
  filePreviewEmiratesIdBack: string | ArrayBuffer | null = null;
  showLottie = true;

  isDesktop? = true;

  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeIdFront = signal('');
  fileSizeIdBack = signal('');
  file = signal<File | null>(null);
  filePassport = signal<File | null>(null);
  fileEmiratesIdFront = signal<File | null>(null);
  fileEmiratesIdBack = signal<File | null>(null);
  _view = signal<View>('upload');
  _loading = signal(false);
  _isExpanded = signal(true);
  images = signal<string[]>([]);
  emiratesId = signal<JsonResult | undefined>(undefined);
  passport = signal<JsonResult | undefined>(undefined);
  visa = signal<JsonResult | undefined>(undefined);
  formsList = signal<FormsEntity[]>([]);
  downloadExcelData = signal<Partial<FormsEntity[]>>([]);

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    this.file.set(file);
    this.updateFilePreview(file, 'residency');

    if (file && file.type.startsWith('image/')) {
      this.extractUploadedFile(file, 'residency');
    } else {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const originalData = new Uint8Array(reader.result as ArrayBuffer);

        let compressedData = '';
        const chunkSize = 1024;
        for (let i = 0; i < originalData.length; i += chunkSize) {
          compressedData = String.fromCharCode.apply(
            null,
            Array.from(originalData.slice(i, i + chunkSize))
          );
        }

        compressedData = btoa(compressedData);

        const compressedBlob = new Blob([compressedData], { type: file.type });
        this.file.set(
          new File([compressedBlob], `compressed_${file.name}`, {
            type: file.type,
          })
        );
        this.fileSize.set(formatFileSize(this.file()!.size));
      };
    }
  }

  onFileSelectedPassport(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    this.filePassport.set(file);
    this.updateFilePreview(file, 'passport');

    if (file && file.type.startsWith('image/')) {
      this.extractUploadedFile(file, 'passport');
    } else {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const originalData = new Uint8Array(reader.result as ArrayBuffer);

        let compressedData = '';
        const chunkSize = 1024;
        for (let i = 0; i < originalData.length; i += chunkSize) {
          compressedData = String.fromCharCode.apply(
            null,
            Array.from(originalData.slice(i, i + chunkSize))
          );
        }

        compressedData = btoa(compressedData);

        const compressedBlob = new Blob([compressedData], { type: file.type });
        this.filePassport.set(
          new File([compressedBlob], `compressed_${file.name}`, {
            type: file.type,
          })
        );
        this.fileSizePassport.set(formatFileSize(this.filePassport()!.size));
      };
    }
  }

  onFileSelectedIdFront(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    this.fileEmiratesIdFront.set(file);
    this.updateFilePreview(file, 'emiratesIdFront');

    if (file && file.type.startsWith('image/')) {
      this.extractUploadedFile(file, 'emiratesIdFront');
    } else {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const originalData = new Uint8Array(reader.result as ArrayBuffer);

        let compressedData = '';
        const chunkSize = 1024;
        for (let i = 0; i < originalData.length; i += chunkSize) {
          compressedData = String.fromCharCode.apply(
            null,
            Array.from(originalData.slice(i, i + chunkSize))
          );
        }

        compressedData = btoa(compressedData);

        const compressedBlob = new Blob([compressedData], { type: file.type });
        this.fileEmiratesIdFront.set(
          new File([compressedBlob], `compressed_${file.name}`, {
            type: file.type,
          })
        );
        this.fileSizeIdFront.set(
          formatFileSize(this.fileEmiratesIdFront()!.size)
        );
      };
    }
  }

  onFileSelectedIdBack(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    this.fileEmiratesIdBack.set(file);
    this.updateFilePreview(file, 'emiratesIdBack');

    if (file && file.type.startsWith('image/')) {
      this.extractUploadedFile(file, 'emiratesIdBack');
    } else {
      const reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        const originalData = new Uint8Array(reader.result as ArrayBuffer);

        let compressedData = '';
        const chunkSize = 1024;
        for (let i = 0; i < originalData.length; i += chunkSize) {
          compressedData = String.fromCharCode.apply(
            null,
            Array.from(originalData.slice(i, i + chunkSize))
          );
        }

        compressedData = btoa(compressedData);

        const compressedBlob = new Blob([compressedData], { type: file.type });
        this.fileEmiratesIdBack.set(
          new File([compressedBlob], `compressed_${file.name}`, {
            type: file.type,
          })
        );
        this.fileSizeIdBack.set(
          formatFileSize(this.fileEmiratesIdBack()!.size)
        );
      };
    }
  }

  updateFilePreview(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'residency') {
        this.filePreview = reader.result;
      } else if (type === 'passport') {
        this.passportFilePreview = reader.result;
      } else if (type === 'emiratesIdFront') {
        this.filePreviewEmiratesIdFront = reader.result;
      } else if (type === 'emiratesIdBack') {
        this.filePreviewEmiratesIdBack = reader.result;
      }
    };
    reader.readAsDataURL(file);
  }

  removeFile() {
    this.filePreview = null;
    this.file.set(null);
  }

  removeFilePassport() {
    this.passportFilePreview = null;
    this.filePassport.set(null);
  }

  removeFileIdFront() {
    this.filePreviewEmiratesIdFront = null;
    this.fileEmiratesIdFront.set(null);
  }

  removeFileIdBack() {
    this.filePreviewEmiratesIdBack = null;
    this.fileEmiratesIdBack.set(null);
  }

  openDialog() {
    this.DialogRef = this.dialog.open(this.openDialogCrossDialog);
    this.showLottie = true;
  }

  uploadFiles() {
    this._loading.set(true);

    const imageArray = [
      this.file()!,
      this.filePassport()!,
      this.fileEmiratesIdFront()!,
      this.fileEmiratesIdBack()!,
    ];

    this.service
      .uploadFile(imageArray)
      .pipe(
        switchMap((response) => {
          const uploadedFileUrls = response.map((res) => {
            return `${this.apiRoot}${res.downloadUrl}`;
          });
          this.images.set(uploadedFileUrls);
          const payload: AiPayload = {
            contents: [
              { extraction_type: 'BASIC_INFO', image_urls: uploadedFileUrls },
            ],
          };
          return this.service.postAiService(payload);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe({
        next: (result) => {
          this.DialogRef?.close();
          this._view.set('reviewEmiratesId');
          const expandResult = result.results[0].json_result;
          this.filterDocumentTypes(expandResult);
          this.filterPassport(expandResult);
          this.filterVisa(expandResult);
          this.openDialog();
        },
        error: () => {
          this.DialogRef?.close();
          this.alert.open('An error occurred. Please try again later.');
        },
      });
  }

  private extractUploadedFile(file: File, type: FileType) {
    const fileMapping: Record<FileType, {
      fileSetter: WritableSignal<File | null>,
      sizeSetter: WritableSignal<string>
    }> = {
      emiratesIdFront: {
        fileSetter: this.fileEmiratesIdFront,
        sizeSetter: this.fileSizeIdFront,
      },
      emiratesIdBack: {
        fileSetter: this.fileEmiratesIdBack,
        sizeSetter: this.fileSizeIdBack,
      },
      passport: {
        fileSetter: this.filePassport,
        sizeSetter: this.fileSizePassport,
      },
      residency: {
        fileSetter: this.file,
        sizeSetter: this.fileSize,
      },
    };

    const mapping = fileMapping[type];
    if (!mapping) return;

    this.processFile(file, mapping.fileSetter, mapping.sizeSetter);
  }

  private processFile(
    file: File,
    fileSetter: WritableSignal<File | null>,
    sizeSetter: WritableSignal<string>
  ) {
    extractImage(file).subscribe({
      next: (resizedFile) => {
        fileSetter.set(resizedFile);
        sizeSetter.set(formatFileSize(resizedFile.size));
      },
      error: (error) => console.error('Error processing image:', error),
    });
  }

  private filterDocumentTypes(doc: JsonResult[]) {
    const emiratesId = doc.find(
      (emirates) => emirates.document_type === 'Emirates ID'
    );
    const normalizedData = replaceKeys(emiratesId, '/', '_');
    this.emiratesId.set(normalizedData);
  }

  private filterPassport(doc: JsonResult[]) {
    const emiratesId = doc.find(
      (emirates) => emirates.document_type === 'Passport'
    );
    this.passport.set(emiratesId);
  }

  private filterVisa(doc: JsonResult[]) {
    const emiratesId = doc.find((emirates) => emirates.Occupation !== 'N/A');
    const normalizedData = replaceKeys(emiratesId, '/', '_');
    this.visa.set(normalizedData);
  }

}
