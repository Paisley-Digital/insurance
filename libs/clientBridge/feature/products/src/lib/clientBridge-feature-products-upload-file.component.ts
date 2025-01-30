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
  AiPayload,
  BrokerResponse,
  BrokerService,
  JsonResult,
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
import { isHandsetScreen, normalizeKeys } from '@insurance-shared-util-common';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { ELEMENT_DATA } from '../../../../../customer/data/group-management-data/src/lib/group-management.constant';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { OverlaySpinnerDirective } from '@./overlay-spinner';
import { AlertService } from '@./alert';
import { ActivatedRoute } from '@angular/router';

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
    OverlaySpinnerDirective,
  ],
  templateUrl: './clientBridge-feature-products-upload-file.component.html',
  styleUrl: './clientBridge-feature-products-upload-file.component.scss',
})
export class ClientBridgeFeatureProductsUploadFileComponent implements OnInit {
  private service = inject(BrokerService);
  private alert = inject(AlertService);
  private router = inject(ActivatedRoute);
  protected readonly ELEMENT_DATA = ELEMENT_DATA;

  baseUrl = 'https://insurancebase.paisley.monster';
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
  sendingToAi = signal(false);
  selectedCards = signal<BrokerResponse[]>([]);
  companyName = signal('');
  currentDate = signal('');
  aiResponse = signal<JsonResult[]>([]);

  normalizedContent: any;

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
    const today = new Date();
    const day = today.getDate().toString().padStart(2, '0');
    const month = today.toLocaleString('en-US', { month: 'short' });
    const year = today.getFullYear().toString().slice(-2);
    this.currentDate.set(`${day}-${month}-${year}`);
    this.companyName.set(
      this.router.snapshot.queryParamMap.get('company') ?? ''
    );
    this.fetchAll();
  }

  fetchAll() {
    this.fetching.set(true);
    this.fetchingError.set(false);
    this.service
      .fetchAll()
      .pipe(finalize(() => this.fetching.set(false)))
      .subscribe({
        next: (res) => {
          const filteredData = res.filter((docs) => docs.fileType !== 'java');
          this.docsResponse.set(filteredData);
          this.fetchingError.set(false);
        },
        error: () => {
          this.alert.open('Something went wrong. Please try again');
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

  onCheckboxChange(file: BrokerResponse) {
    if (file) {
      this.selectedCards.update((current) => [
        ...current,
        {
          fileType: file.fileType,
          fileName: file.fileName,
          downloadUrl: file.downloadUrl,
          companyId: file.companyId,
        },
      ]);
    } else {
      this.selectedCards().filter((card) => card !== file);
    }
  }

  callAiService() {
    this.sendingToAi.set(true);

    const imageUrls = this.selectedCards().map((card) => ({
      image_url: `${this.baseUrl}${card.downloadUrl}`,
    }));

    const imageArray = [];

    for (const item of imageUrls) {
      imageArray.push(item.image_url);
    }

    const payload: AiPayload = {
      contents: [{ extraction_type: 'BASIC_INFO', image_urls: imageArray }],
    };

    this.service
      .postAiService(payload)
      .pipe(finalize(() => this.sendingToAi.set(false)))
      .subscribe({
        next: (result) => {
          const serviceResult = result.results[0].json_result;
          this.normalizedContent = Array.isArray(serviceResult)
            ? serviceResult.map((item) => normalizeKeys(item))
            : normalizeKeys(serviceResult);
          this.view.set('aiTable');
        },
        error: () => {
          this.alert.open('Something went wrong. Please try again');
        },
      });
  }
}
