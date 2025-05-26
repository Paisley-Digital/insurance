import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceEmployeeFeatureSchedulePageComponent } from './insurance-employee-feature-schedule-page.component';

describe('InsuranceEmployeeFeatureSchedulePageComponent', () => {
  let component: InsuranceEmployeeFeatureSchedulePageComponent;
  let fixture: ComponentFixture<InsuranceEmployeeFeatureSchedulePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceEmployeeFeatureSchedulePageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InsuranceEmployeeFeatureSchedulePageComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
