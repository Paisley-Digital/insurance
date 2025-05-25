import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureCustomerShellComponent } from './insurance-feature-customer-shell.component';

describe('InsuranceFeatureCustomerShellComponent', () => {
  let component: InsuranceFeatureCustomerShellComponent;
  let fixture: ComponentFixture<InsuranceFeatureCustomerShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureCustomerShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceFeatureCustomerShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
