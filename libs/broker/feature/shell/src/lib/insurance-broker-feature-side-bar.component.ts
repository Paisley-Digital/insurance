import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAccordion } from '@angular/material/expansion';
import {
  MatListItem,
  MatListItemIcon,
  MatNavList,
} from '@angular/material/list';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'insurance-insurance-broker-feature-side-bar',
  imports: [
    CommonModule,
    MatAccordion,
    MatIcon,
    MatListItem,
    MatListItemIcon,
    MatNavList,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './insurance-broker-feature-side-bar.component.html',
  styleUrl: './insurance-broker-feature-side-bar.component.scss',
})
export class InsuranceBrokerFeatureSideBarComponent {
  private router = inject(Router);

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
