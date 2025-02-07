import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import {
  MatListItem,
  MatListItemIcon,
  MatNavList,
} from '@angular/material/list';

@Component({
  selector: 'insurance-side-bar',
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
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  private router = inject(Router);

  logout() {
    this.router.navigate(['/auth/login']);
  }
}
