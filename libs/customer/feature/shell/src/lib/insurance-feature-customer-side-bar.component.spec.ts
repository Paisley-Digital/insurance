import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureCustomerSideBarComponent } from './insurance-feature-customer-side-bar.component';

describe('InsuranceFeatureCustomerSideBarComponent', () => {
  let component: InsuranceFeatureCustomerSideBarComponent;
  let fixture: ComponentFixture<InsuranceFeatureCustomerSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureCustomerSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceFeatureCustomerSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
