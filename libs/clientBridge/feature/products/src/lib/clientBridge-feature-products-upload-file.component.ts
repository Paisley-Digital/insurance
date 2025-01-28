import {
  Component,
  ElementRef,
  inject,
  OnInit,
  signal,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';
import { MatAnchor, MatButton, MatIconButton } from '@angular/material/button';
import {
  MatCard,
  MatCardContent,
  MatCardImage,
  MatCardModule,
} from '@angular/material/card';
import {
  MatList,
  MatListItem,
  MatListItemIcon,
  MatListItemTitle,
} from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import {
  BrokerResponse,
  BrokerService,
} from '@insurance-clientBridge-data-broker';
import { finalize } from 'rxjs';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { MatCheckbox } from '@angular/material/checkbox';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { isHandsetScreen } from '@insurance-shared-util-common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { ELEMENT_DATA } from '../../../../../customer/data/group-management-data/src/lib/group-management.constant';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

type View = 'tabs' | 'aiCheck' | 'aiTable';

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
    MatCardModule,
    MatProgressSpinner,
    CdkDrag,
    CdkDropList,
    MatTableModule,
    MatPaginator,
    MatIconButton,
  ],
  templateUrl: './clientBridge-feature-products-upload-file.component.html',
  styleUrl: './clientBridge-feature-products-upload-file.component.scss',
})
export class ClientBridgeFeatureProductsUploadFileComponent implements OnInit {
  private service = inject(BrokerService);
  protected readonly ELEMENT_DATA = ELEMENT_DATA;

  baseUrl = 'http://93.127.180.228';
  isHandsetScreen$ = isHandsetScreen();
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageEvent?: PageEvent;

  @ViewChild('openDialogCrossDialog')
  openDialogCrossDialog!: TemplateRef<unknown>;
  @ViewChild('lottie') lottie?: ElementRef<HTMLDivElement>;

  fetching = signal(true);
  fetchingError = signal(false);
  docsResponse = signal(<BrokerResponse[]>[]);
  view = signal<View>('tabs');

  columns: string[] = [
    'surname',
    'lastname',
    'date',
    'sex',
    'age',
    'nationality',
    'issue',
  ];

  ngOnInit() {
    this.fetchAll();
  }

  openDialog() {
    this.view.set('aiTable');
  }

  fetchAll() {
    this.fetching.set(true);
    this.fetchingError.set(false);
    this.service
      .fetchAll()
      .pipe(finalize(() => this.fetching.set(false)))
      .subscribe({
        next: (res) => {
          const filtredData = res.filter((docs) => docs.fileType !== 'java');
          this.docsResponse.set(filtredData);
          this.fetchingError.set(false);
        },
        error: () => {
          this.fetchingError.set(true);
        },
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
