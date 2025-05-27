import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

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
  ],
  templateUrl: './employee-feature-eKYC-management-templates.component.html',
  styleUrl: './employee-feature-eKYC-management-templates.component.scss',
})
export class EmployeeFeatureEKYCManagementTemplatesComponent {
  favoriteSeason!: string;
  view = signal<View>('stepKyc');
  businessSelection = [
    { title: 'Corporate KYC', tag: '1' },
    { title: 'Know-Your-Customer Form- Group Policies ', tag: '2' },
    { title: 'Individual KYC', tag: '3' },
    { title: 'Financial Institution KYC', tag: '4' },
  ];
  selectedBusiness(tag: string) {
    if (tag === '2') {
      this.view.set('stepKyc');
    }
  }
}
