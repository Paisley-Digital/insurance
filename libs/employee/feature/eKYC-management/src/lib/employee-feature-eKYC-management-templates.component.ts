import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

type View = 'stepKyc' | 'businessSelectionTemplate';

@Component({
  selector: 'insurance-employee-feature-e-kyc-management-templates',
  imports: [
    CommonModule,
    MatRadioModule,
    MatAccordion,
    MatExpansionModule,
    MatListModule,
    MatIconModule,
    MatButton,
    RouterLink,
  ],
  templateUrl: './employee-feature-eKYC-management-templates.component.html',
  styleUrl: './employee-feature-eKYC-management-templates.component.scss',
})
export class EmployeeFeatureEKYCManagementTemplatesComponent {
  favoriteSeason!: string;
  view = signal<View>('businessSelectionTemplate');
  businessSelection = [
    { title: 'Know-Your-Customer Form- Group Policies ', tag: '2' },
  ];

  selectedBusiness(tag: string) {
    if (tag === '2') {
      this.view.set('stepKyc');
    }
  }

  changeViewToBack() {
    this.view.set('businessSelectionTemplate');
  }
}
