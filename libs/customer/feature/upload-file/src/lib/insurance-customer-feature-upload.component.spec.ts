import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceCustomerFeatureUploadComponent } from './insurance-customer-feature-upload.component';

describe('InsuranceCustomerFeatureCustomerComponent', () => {
  let component: InsuranceCustomerFeatureUploadComponent;
  let fixture: ComponentFixture<InsuranceCustomerFeatureUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceCustomerFeatureUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      InsuranceCustomerFeatureUploadComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
