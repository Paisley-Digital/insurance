import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEmployerManagementComponent } from './employee-feature-employer-management.component';

describe('EmployeeFeatureEmployerManagementComponent', () => {
  let component: EmployeeFeatureEmployerManagementComponent;
  let fixture: ComponentFixture<EmployeeFeatureEmployerManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEmployerManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployeeFeatureEmployerManagementComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
