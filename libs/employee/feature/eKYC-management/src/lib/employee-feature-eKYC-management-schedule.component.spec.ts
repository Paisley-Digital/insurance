import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEKYCManagementScheduleComponent } from './employee-feature-eKYC-management-schedule.component';

describe('EmployeeFeatureEKYCManagementScheduleComponent', () => {
  let component: EmployeeFeatureEKYCManagementScheduleComponent;
  let fixture: ComponentFixture<EmployeeFeatureEKYCManagementScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEKYCManagementScheduleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployeeFeatureEKYCManagementScheduleComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
