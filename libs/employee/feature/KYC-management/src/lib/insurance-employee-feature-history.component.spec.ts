import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceEmployeeFeatureHistoryComponent } from './insurance-employee-feature-history.component';

describe('InsuranceEmployeeFeatureHistoryComponent', () => {
  let component: InsuranceEmployeeFeatureHistoryComponent;
  let fixture: ComponentFixture<InsuranceEmployeeFeatureHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceEmployeeFeatureHistoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceEmployeeFeatureHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
