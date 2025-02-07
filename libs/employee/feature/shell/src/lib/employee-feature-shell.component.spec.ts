import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureShellComponent } from './employee-feature-shell.component';

describe('EmployeeFeatureShellComponent', () => {
  let component: EmployeeFeatureShellComponent;
  let fixture: ComponentFixture<EmployeeFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
