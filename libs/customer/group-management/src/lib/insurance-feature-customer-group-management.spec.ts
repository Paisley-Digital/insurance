import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureCustomerGroupManagement } from './insurance-feature-customer-group-management';

describe('GroupManagementComponent', () => {
  let component: InsuranceFeatureCustomerGroupManagement;
  let fixture: ComponentFixture<InsuranceFeatureCustomerGroupManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureCustomerGroupManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceFeatureCustomerGroupManagement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
