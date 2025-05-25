import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceCustomerAuthComponent } from './insurance-customer-auth.component';

describe('InsuranceCustomerAuthComponent', () => {
  let component: InsuranceCustomerAuthComponent;
  let fixture: ComponentFixture<InsuranceCustomerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceCustomerAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceCustomerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
