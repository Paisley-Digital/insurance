import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClientBridgeFeatureProductsUploadFileComponent } from './clientBridge-feature-products-upload-file.component';

describe('ClientBridgeFeatureProductsUploadFileComponent', () => {
  let component: ClientBridgeFeatureProductsUploadFileComponent;
  let fixture: ComponentFixture<ClientBridgeFeatureProductsUploadFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientBridgeFeatureProductsUploadFileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(
      ClientBridgeFeatureProductsUploadFileComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
