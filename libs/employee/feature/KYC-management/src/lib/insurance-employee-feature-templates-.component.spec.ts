import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceEmployeeFeatureTemplatesComponent } from './insurance-employee-feature-templates-.component';

describe('InsuranceEmployeeFeatureTemplatesPageComponentComponent', () => {
  let component: InsuranceEmployeeFeatureTemplatesComponent;
  let fixture: ComponentFixture<InsuranceEmployeeFeatureTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceEmployeeFeatureTemplatesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InsuranceEmployeeFeatureTemplatesComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
