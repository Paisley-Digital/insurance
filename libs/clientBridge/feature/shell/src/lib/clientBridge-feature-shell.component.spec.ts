import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBridgeFeatureShellComponent } from './clientBridge-feature-shell.component';

describe('ClientBridgeFeatureShellComponent', () => {
  let component: ClientBridgeFeatureShellComponent;
  let fixture: ComponentFixture<ClientBridgeFeatureShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBridgeFeatureShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientBridgeFeatureShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
