import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrokerAdminService, AdminDashboard } from '@insurance/broker/data-services';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'insurance-broker-feature-dashboard',
  imports: [CommonModule],
  templateUrl: './broker-feature-dashboard.component.html',
  styleUrl: './broker-feature-dashboard.component.scss',
})
export class BrokerFeatureDashboardComponent implements OnInit {
  private brokerAdminService = inject(BrokerAdminService);
  
  dashboard$: Observable<AdminDashboard> | undefined;

  ngOnInit() {
    this.dashboard$ = this.brokerAdminService.getDashboard().pipe(
      map(response => response.data)
    );
  }
}