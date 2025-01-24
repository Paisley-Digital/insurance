import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerFeatureShellComponent } from './customer-feature-shell.component';

describe('CustomerFeatureShellComponent', () => {
  let component: CustomerFeatureShellComponent;
  let fixture: ComponentFixture<CustomerFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
