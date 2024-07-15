import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpAllVehiclesComponent } from './sp-all-vehicles.component';

describe('SpAllVehiclesComponent', () => {
  let component: SpAllVehiclesComponent;
  let fixture: ComponentFixture<SpAllVehiclesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpAllVehiclesComponent]
    });
    fixture = TestBed.createComponent(SpAllVehiclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
