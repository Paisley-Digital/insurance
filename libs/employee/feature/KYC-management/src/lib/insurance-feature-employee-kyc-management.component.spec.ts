import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureEmployeeKycManagementComponent } from './insurance-feature-employee-kyc-management.component';

describe('KYCManagementComponent', () => {
  let component: InsuranceFeatureEmployeeKycManagementComponent;
  let fixture: ComponentFixture<InsuranceFeatureEmployeeKycManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureEmployeeKycManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceFeatureEmployeeKycManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
