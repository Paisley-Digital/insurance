import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { MatCard, MatCardContent } from '@angular/material/card';
import { MatList, MatListItem, MatListItemIcon, MatListItemTitle } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';

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
  ],
  templateUrl: './clientBridge-feature-products-upload-file.component.html',
  styleUrl: './clientBridge-feature-products-upload-file.component.scss',
})
export class ClientBridgeFeatureProductsUploadFileComponent {}
