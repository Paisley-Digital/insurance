import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEKYCManagementComponent } from './employee-feature-eKYC-management.component';

describe('EmployeeFeatureEKYCManagementComponent', () => {
  let component: EmployeeFeatureEKYCManagementComponent;
  let fixture: ComponentFixture<EmployeeFeatureEKYCManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEKYCManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureEKYCManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
