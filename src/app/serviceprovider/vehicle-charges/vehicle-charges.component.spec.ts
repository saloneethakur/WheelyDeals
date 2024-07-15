import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleChargesComponent } from './vehicle-charges.component';

describe('VehicleChargesComponent', () => {
  let component: VehicleChargesComponent;
  let fixture: ComponentFixture<VehicleChargesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VehicleChargesComponent]
    });
    fixture = TestBed.createComponent(VehicleChargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
