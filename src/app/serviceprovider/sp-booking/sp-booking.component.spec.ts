import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpBookingComponent } from './sp-booking.component';

describe('SpBookingComponent', () => {
  let component: SpBookingComponent;
  let fixture: ComponentFixture<SpBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpBookingComponent]
    });
    fixture = TestBed.createComponent(SpBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
