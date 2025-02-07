import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFeatureUploadComponent } from './employee-feature-upload.component';

describe('UploadComponent', () => {
  let component: EmployeeFeatureUploadComponent;
  let fixture: ComponentFixture<EmployeeFeatureUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFeatureUploadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFeatureUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
