import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureEKYCManagementSideNavComponent } from './employee-feature-eKYC-management-side-nav.component';

describe('EmployeeFeatureEKYCManagementSideNavComponent', () => {
  let component: EmployeeFeatureEKYCManagementSideNavComponent;
  let fixture: ComponentFixture<EmployeeFeatureEKYCManagementSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureEKYCManagementSideNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      EmployeeFeatureEKYCManagementSideNavComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
