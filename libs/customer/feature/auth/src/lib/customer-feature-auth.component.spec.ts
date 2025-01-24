import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerFeatureAuthComponent } from './customer-feature-auth.component';

describe('CustomerFeatureAuthComponent', () => {
  let component: CustomerFeatureAuthComponent;
  let fixture: ComponentFixture<CustomerFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
