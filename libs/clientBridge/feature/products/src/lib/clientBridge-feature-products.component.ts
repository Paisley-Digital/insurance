import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardContent } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';

import { MatIcon } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatHeaderCell, MatTableModule } from '@angular/material/table';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

@Component({
  selector: 'insurance-client-bridge-feature-products',
  imports: [
    CommonModule,
    MatCard,
    MatCardContent,
    ReactiveFormsModule,
    MatIcon,
    MatIconButton,
    MatDatepickerModule,
    MatPaginator,
    CdkDropList,
    MatHeaderCell,
    CdkDrag,
    MatTableModule,
  ],
  templateUrl: './clientBridge-feature-products.component.html',
  styleUrl: './clientBridge-feature-products.component.scss',
})
export class ClientBridgeFeatureProductsComponent {
  private router = inject(Router);
  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  ELEMENT_DATA = [
    { position: 'Louis Vuitton', name: '5/30/14', weight: 119, symbol: 'H' },
    {
      position: 'BB Group',
      name: '5/30/14',
      weight: 220,
      symbol: 'H',
    },
    {
      position: 'The Walt Disney Company',
      name: '11/7/16',
      weight: 120,
      symbol: 'He',
    },
    { position: 'IBM', name: '3/4/16', weight: 570, symbol: 'Li' },
    { position: 'Pizza Hut', name: '12/10/13', weight: 70, symbol: 'Be' },
  ];

  columns: string[] = ['customer', 'timeUpdate', 'number', 'actions'];

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
  navigateDetails(selectedCompany: any) {
    this.router.navigate(['/console/customer-management/details'], {
      queryParams: { company: selectedCompany.position },
    });
  }
}
