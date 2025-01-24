import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBridgeFeatureAuthComponent } from './clientBridge-feature-auth.component';

describe('ClientBridgeFeatureAuthComponent', () => {
  let component: ClientBridgeFeatureAuthComponent;
  let fixture: ComponentFixture<ClientBridgeFeatureAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBridgeFeatureAuthComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientBridgeFeatureAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
