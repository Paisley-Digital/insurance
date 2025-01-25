import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule,
} from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { ELEMENT_DATA } from '../../../data/group-management-data/src/lib/group-management.constant';

@Component({
  selector: 'insurance-group-management',
  imports: [
    MatTableModule,
    DragDropModule,
    MatCardModule,
    CommonModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
    MatTable,
    CdkDropList,
    MatColumnDef,
    MatHeaderCell,
    CdkDrag,
    MatCellDef,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatPaginator,
  ],
  templateUrl: './insurance-feature-customer-group-management.html',
  styleUrl: './insurance-feature-customer-group-management.scss',
})
export class InsuranceFeatureCustomerGroupManagementComponent {
  private router = inject(Router);
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  columns: string[] = ['customer', 'timeUpdate', 'number', 'actions'];
  dataSource = ELEMENT_DATA;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
  }

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent?: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map((str) => +str);
    }
  }
  navigateDetails(id: number) {
    this.router.navigate(['/console/group-management/details']);
  }
}
