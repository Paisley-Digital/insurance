import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatListItem, MatListItemLine, MatListItemTitle, MatNavList} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'insurance-insurance-employee-feature-side-nav',
  imports: [
    CommonModule,
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    MatCard,
    MatCardContent,
    MatIcon,
    MatListItemTitle,
    MatListItemLine,
    RouterOutlet,
  ],
  templateUrl: './insurance-employee-feature-side-nav.component.html',
  styleUrl: './insurance-employee-feature-side-nav.component.scss',
  standalone: true,
})
export class InsuranceEmployeeFeatureSideNavComponent {}
