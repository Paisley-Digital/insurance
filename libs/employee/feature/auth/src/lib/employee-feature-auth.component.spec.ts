import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureAuthComponent } from './employee-feature-auth.component';

describe('EmployeeFeatureAuthComponent', () => {
  let component: EmployeeFeatureAuthComponent;
  let fixture: ComponentFixture<EmployeeFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
