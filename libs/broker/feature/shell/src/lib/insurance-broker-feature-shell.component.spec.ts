import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceBrokerFeatureShellComponent } from './insurance-broker-feature-shell.component';

describe('InsuranceBrokerFeatureShellComponent', () => {
  let component: InsuranceBrokerFeatureShellComponent;
  let fixture: ComponentFixture<InsuranceBrokerFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceBrokerFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceBrokerFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
