import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerFeatureEkycManagementComponent } from './broker-feature-ekyc-management.component';

describe('BrokerFeatureEkycManagementComponent', () => {
  let component: BrokerFeatureEkycManagementComponent;
  let fixture: ComponentFixture<BrokerFeatureEkycManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerFeatureEkycManagementComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerFeatureEkycManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
