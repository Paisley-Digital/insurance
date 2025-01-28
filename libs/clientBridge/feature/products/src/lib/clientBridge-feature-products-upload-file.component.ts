import {
  Component, ElementRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output, signal, TemplateRef, ViewChild
} from '@angular/core';
import { CommonModule, DOCUMENT, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatAnchor, MatButton } from '@angular/material/button';
import { MatCard, MatCardContent, MatCardHeader, MatCardImage } from '@angular/material/card';
import { MatList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { BrokerResponse, BrokerService } from '@insurance-clientBridge-data-broker';
import { finalize } from 'rxjs';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import { AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
@Component({
  selector: 'insurance-client-bridge-feature-products-upload-file',
  imports: [
    CommonModule,
    MatIcon,
    NgOptimizedImage,
    MatRipple,
    MatButton,
    MatCard,
    MatCardContent,
    MatList,
    MatListItem,
    MatListItemTitle,
    MatListItemIcon,
    MatDivider,
    MatTabGroup,
    MatTab,
    MatCardImage,
    MatCheckbox,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatAnchor,
    MatDialogClose,
  ],
  templateUrl: './clientBridge-feature-products-upload-file.component.html',
  styleUrl: './clientBridge-feature-products-upload-file.component.scss',
})
export class ClientBridgeFeatureProductsUploadFileComponent implements OnInit {
  private service = inject(BrokerService);
  private lottiesPath = './assets/lotties/loadingAnimation.json';
  private dialog = inject(MatDialog);
  private lottieAnimation: AnimationItem | undefined;
  private document = inject(DOCUMENT);
   baseUrl = 'http://93.127.180.228'

  uploadedFiles: { name: string; url: string; type: string }[] = [];

  @ViewChild('openDialogCrossDialog')  openDialogCrossDialog!: TemplateRef<unknown>;
  @ViewChild('lottie') lottie?: ElementRef<HTMLDivElement>;

  fetching = signal(true);
  docs = signal(<BrokerResponse[]>[]);

  ngOnInit() {
    this.service
      .fetchAll()
      .pipe(finalize(() => this.fetching.set(false)))
      .subscribe({
        next: (res) => {
          this.docs.set(res);
        },
      });
  }

  onFilesSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        const fileUrl = URL.createObjectURL(file);
        this.uploadedFiles.push({
          name: file.name,
          url: fileUrl,
          type: file.type,
        });
      } else {
        alert('فقط فایل‌های تصویری مجاز هستند!');
      }
    }
    event.target.value = '';
  }

  openDialog() {
    this.dialog.open(this.openDialogCrossDialog);
    this.document.defaultView?.setTimeout(this.startLottie, 0);

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
