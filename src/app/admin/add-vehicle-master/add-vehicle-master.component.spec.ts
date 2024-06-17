import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleMasterComponent } from './add-vehicle-master.component';

describe('AddVehicleMasterComponent', () => {
  let component: AddVehicleMasterComponent;
  let fixture: ComponentFixture<AddVehicleMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVehicleMasterComponent]
    });
    fixture = TestBed.createComponent(AddVehicleMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
