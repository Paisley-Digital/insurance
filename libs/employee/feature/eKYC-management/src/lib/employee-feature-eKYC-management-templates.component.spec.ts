import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEKYCManagementTemplatesComponent } from './employee-feature-eKYC-management-templates.component';

describe('EmployeeFeatureEKYCManagementTemplatesComponent', () => {
  let component: EmployeeFeatureEKYCManagementTemplatesComponent;
  let fixture: ComponentFixture<EmployeeFeatureEKYCManagementTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEKYCManagementTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployeeFeatureEKYCManagementTemplatesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
