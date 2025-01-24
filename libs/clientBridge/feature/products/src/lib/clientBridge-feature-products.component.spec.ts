import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBridgeFeatureProductsComponent } from './clientBridge-feature-products.component';

describe('ClientBridgeFeatureProductsComponent', () => {
  let component: ClientBridgeFeatureProductsComponent;
  let fixture: ComponentFixture<ClientBridgeFeatureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBridgeFeatureProductsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClientBridgeFeatureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
