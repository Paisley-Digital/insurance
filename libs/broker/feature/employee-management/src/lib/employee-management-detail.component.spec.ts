import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeManagementDetailComponent } from './employee-management-detail.component';

describe('EmployeeManagementDetailComponent', () => {
  let component: EmployeeManagementDetailComponent;
  let fixture: ComponentFixture<EmployeeManagementDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeManagementDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeManagementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
