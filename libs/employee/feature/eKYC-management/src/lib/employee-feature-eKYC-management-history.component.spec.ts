import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEKYCManagementHistoryComponent } from './employee-feature-eKYC-management-history.component';

describe('EmployeeFeatureEKYCManagementHistoryComponent', () => {
  let component: EmployeeFeatureEKYCManagementHistoryComponent;
  let fixture: ComponentFixture<EmployeeFeatureEKYCManagementHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEKYCManagementHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployeeFeatureEKYCManagementHistoryComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
