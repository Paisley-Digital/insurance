import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerFeatureAuthComponent } from './broker-feature-auth.component';

describe('BrokerFeatureAuthComponent', () => {
  let component: BrokerFeatureAuthComponent;
  let fixture: ComponentFixture<BrokerFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
