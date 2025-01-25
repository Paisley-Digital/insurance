import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {
  MatAccordion,
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader
} from "@angular/material/expansion";
import {MatIcon} from "@angular/material/icon";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'insurance-side-bar',
  imports: [
    CommonModule,
    MatIcon,
    NgOptimizedImage,
    MatAccordion,
    MatExpansionModule,
  ],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {}
