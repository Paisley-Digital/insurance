import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceBrokerFeatureSideBarComponent } from './insurance-broker-feature-side-bar.component';

describe('InsuranceBrokerFeatureSideBarComponent', () => {
  let component: InsuranceBrokerFeatureSideBarComponent;
  let fixture: ComponentFixture<InsuranceBrokerFeatureSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceBrokerFeatureSideBarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceBrokerFeatureSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
