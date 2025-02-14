import { TestBed } from '@angular/core/testing';

import { EmployeeDataDashboardService } from './employee-data-dashboard.service';

describe('EmployeeDataDashboardService', () => {
  let service: EmployeeDataDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDataDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
