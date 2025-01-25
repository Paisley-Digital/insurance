import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceFeatureCustomerGroupManagementDetailComponent } from './insurance-feature-customer-group-management-detail.component';

describe('InsuranceFeatureCustomerGroupManagementDetailComponent', () => {
  let component: InsuranceFeatureCustomerGroupManagementDetailComponent;
  let fixture: ComponentFixture<InsuranceFeatureCustomerGroupManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceFeatureCustomerGroupManagementDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InsuranceFeatureCustomerGroupManagementDetailComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
