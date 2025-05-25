import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerFeatureDashboardComponent } from './broker-feature-dashboard.component';

describe('BrokerFeatureDashboardComponent', () => {
  let component: BrokerFeatureDashboardComponent;
  let fixture: ComponentFixture<BrokerFeatureDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerFeatureDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerFeatureDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
