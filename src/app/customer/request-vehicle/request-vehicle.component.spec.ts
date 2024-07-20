import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestVehicleComponent } from './request-vehicle.component';

describe('RequestVehicleComponent', () => {
  let component: RequestVehicleComponent;
  let fixture: ComponentFixture<RequestVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RequestVehicleComponent]
    });
    fixture = TestBed.createComponent(RequestVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
