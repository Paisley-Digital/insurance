import { Component, inject } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatListItemIcon, MatNavList} from "@angular/material/list";

@Component({
  selector: 'insurance-insurance-feature-customer-side-bar',
  imports: [
    CommonModule,
    MatIcon,
    RouterLink,
    NgOptimizedImage,
    MatAccordion,
    RouterLinkActive,
    MatExpansionModule,
    MatNavList,
    MatListItem,
    MatListItemIcon,
  ],  templateUrl: './insurance-feature-customer-side-bar.component.html',
  styleUrl: './insurance-feature-customer-side-bar.component.scss',
})
export class InsuranceFeatureCustomerSideBarComponent {
  private router = inject(Router);

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
