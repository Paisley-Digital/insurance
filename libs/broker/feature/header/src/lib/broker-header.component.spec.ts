import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrokerHeaderComponent } from './broker-header.component';

describe('HeaderComponent', () => {
  let component: BrokerHeaderComponent;
  let fixture: ComponentFixture<BrokerHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokerHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BrokerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
