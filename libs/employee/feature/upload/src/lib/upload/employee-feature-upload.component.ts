import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AlertService } from '@shared-ui-alert';
import {
  AiPayload,
  EmployeeDataDashboardService,
  JsonResult,
} from '@insurance-employee-data-dashboards';
import { finalize, switchMap } from 'rxjs';
import { MatTableModule } from '@angular/material/table';
import lottie, { AnimationItem } from 'lottie-web';
import { MatSort } from '@angular/material/sort';
import { OverlaySpinnerDirective } from '@insurance-shared-ui-overlay-spinner';
import { normalizeKeys, replaceKeys } from '@shared-util-common';
import { MatDivider } from '@angular/material/divider';
import { API_ROOT } from '@shared-util-web-sdk';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  MatDialog,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ExcelService } from '../../../../../../shared/ui/excel-service/src/lib/download-excel.service';

type View = 'upload' | 'table';

@Component({
  selector: 'insurance-employee-feature-upload',
  standalone: true,
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
  ],
  templateUrl: './employee-feature-upload.component.html',
  styleUrls: ['./employee-feature-upload.component.scss'],
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
})
export class EmployeeFeatureUploadComponent implements AfterViewInit {
  private alert = inject(AlertService);
  private service = inject(EmployeeDataDashboardService);
  private apiRoot = inject(API_ROOT);
  private lottiesPath = './assets/images/loadingAnimation.json';
  private dialog = inject(MatDialog);
  private lottieAnimation: AnimationItem | undefined;
  private document = inject(DOCUMENT);
  private DialogRef?: MatDialogRef<unknown>;
  private excelService = inject(ExcelService);

  @ViewChild('lottie') lottie?: ElementRef<HTMLDivElement>;
  @ViewChild('openDialogCrossDialog')
  openDialogCrossDialog!: TemplateRef<unknown>;

  filePreview: string | ArrayBuffer | null = null;
  passportFilePreview: string | ArrayBuffer | null = null;
  filePreviewEmiratesId: string | ArrayBuffer | null = null;
  selectedTransactionId: number | null = null;
  showLottie = true;
  columns: string[] = ['name', 'date', 'nationality', 'gender', 'expand'];

  fileSize = signal('');
  fileSizePassport = signal('');
  fileSizeId = signal('');
  file = signal<File | null>(null);
  filePassport = signal<File | null>(null);
  fileEmiratesId = signal<File | null>(null);
  _view = signal<View>('upload');
  _loading = signal(false);
  _isExpanded = signal(true);
  normalizedContent = signal<JsonResult[]>([]);
  expandData = signal<JsonResult[]>([]);
  images = signal<string[]>([]);

  ngAfterViewInit() {
    this.document.defaultView?.setTimeout(this.startLottie, 0);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      this.file.set(file);
      this.fileSize.set(this.formatFileSize(file.size));
      this.updateFilePreview(file, 'residency');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  onFileSelectedPassport(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      this.filePassport.set(file);
      this.fileSizePassport.set(this.formatFileSize(file.size));
      this.updateFilePreview(file, 'passport');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  onFileSelectedId(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;
    const file = input.files[0];
    if (file && file.size <= 5 * 1024 * 1024) {
      this.fileEmiratesId.set(file);
      this.fileSizeId.set(this.formatFileSize(file.size));
      this.updateFilePreview(file, 'emiratesId');
    } else {
      this.alert.open('File size exceeds 2MB!');
    }
  }

  updateFilePreview(file: File, type: string) {
    const reader = new FileReader();
    reader.onload = () => {
      if (type === 'residency') {
        this.filePreview = reader.result;
      } else if (type === 'passport') {
        this.passportFilePreview = reader.result;
      } else if (type === 'emiratesId') {
        this.filePreviewEmiratesId = reader.result;
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

  removeFileId() {
    this.filePreviewEmiratesId = null;
    this.fileEmiratesId.set(null);
  }

  openDialog() {
    if (!this.file() && !this.filePassport() && !this.fileEmiratesId()) {
      this.alert.open('Please upload at least one image.');
      return;
    }
    this.document.defaultView?.setTimeout(this.startLottie, 0);
    this.DialogRef = this.dialog.open(this.openDialogCrossDialog);
    this.uploadFiles();
    this.showLottie = true;
  }

  uploadFiles() {
    this._loading.set(true);

    let imageArray = [
      this.file()!,
      this.filePassport()!,
      this.fileEmiratesId()!,
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
          this._view.set('table');
          const serviceResult = result.results[0].json_result[0];
          const expandResult = result.results[0].json_result;
          this.normalizedContent.set(
            Array.isArray(serviceResult)
              ? serviceResult.map((item) => normalizeKeys(item))
              : [normalizeKeys(serviceResult)]
          );
          this.expandData.set(
            Array.isArray(expandResult)
              ? expandResult.map((item) => replaceKeys(item, '/', '_'))
              : [replaceKeys(expandResult, '/', '_')]
          );
        },
        error: () => {
          this.DialogRef?.close();
          this.alert.open('An error occurred. Please try again later.');
        },
      });
  }

  downloadExcel() {
    this.excelService.exportExcel(
      this.expandData(),
      this.normalizedContent()[0].name
    );
  }

  setExpandValue() {
    this._isExpanded.update((current) => !current);
  }

  private formatFileSize(bytes: number): string {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  private startLottie = () => {
    if (!this.lottie) {
      return;
    }
    if (this.lottieAnimation) {
      this.lottieAnimation.destroy();
    }
    this.lottieAnimation = lottie.loadAnimation({
      container: this.lottie?.nativeElement as Element,
      path: this.lottiesPath,
      renderer: 'svg',
      loop: true,
      autoplay: true,
    });
  };
}
