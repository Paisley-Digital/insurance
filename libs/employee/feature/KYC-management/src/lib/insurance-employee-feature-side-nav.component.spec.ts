import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsuranceEmployeeFeatureSideNavComponent } from './insurance-employee-feature-side-nav.component';

describe('InsuranceEmployeeFeatureSideNavComponent', () => {
  let component: InsuranceEmployeeFeatureSideNavComponent;
  let fixture: ComponentFixture<InsuranceEmployeeFeatureSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsuranceEmployeeFeatureSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InsuranceEmployeeFeatureSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
