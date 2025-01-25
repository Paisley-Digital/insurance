import { Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule,
} from '@angular/material/card';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCheckbox } from '@angular/material/checkbox';
import { AnimationItem } from 'lottie-web';
import lottie from 'lottie-web';
@Component({
  selector: 'insurance-insurance-feature-customer-group-management-detail',
  imports: [
    CommonModule,
    MatDialogModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButton,
    MatIcon,
    MatCardModule,
    MatButtonModule,
    MatCheckbox,
  ],
  templateUrl:
    './insurance-feature-customer-group-management-detail.component.html',
  styleUrl:
    './insurance-feature-customer-group-management-detail.component.scss',
})
export class InsuranceFeatureCustomerGroupManagementDetailComponent {
  private lottiesPath = './assets/lotties/loadingAnimation.json';
  private dialog = inject(MatDialog);
  private lottieAnimation: AnimationItem | undefined;
  private document = inject(DOCUMENT);


  @ViewChild('openDialogCrossDialog')  openDialogCrossDialog!: TemplateRef<unknown>;
  @ViewChild('lottie') lottie?: ElementRef<HTMLDivElement>;

  uploadedFiles: { name: string; url: string; type: string }[] = [];


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
