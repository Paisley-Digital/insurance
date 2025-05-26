import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioButton, MatRadioGroup } from '@angular/material/radio';
import { businessSelection } from '@@insurance-employee-data-dashboards-kyc-management';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatIcon } from '@angular/material/icon';
import {MatList, MatListItem} from "@angular/material/list";

type View = 'businessSelectionTemplate' | 'stepKyc';

@Component({
  selector: 'insurance-insurance-employee-feature-templates-page-component',
  imports: [
    CommonModule,
    MatRadioGroup,
    FormsModule,
    MatRadioButton,
    MatExpansionModule,

    MatIcon,
    MatList,
    MatListItem,
  ],
  templateUrl: './insurance-employee-feature-templates-.component.html',
  styleUrl: './insurance-employee-feature-templates-.component.scss',
  standalone: true,
})
export class InsuranceEmployeeFeatureTemplatesComponent {
  favoriteSeason!: string;
  protected readonly businessSelection = businessSelection;

  view = signal<View>('stepKyc');

  selectedBusiness(tag: string) {
    if (tag === '2') {
      this.view.set('stepKyc');
    }
    console.log(tag);
  }
}
