import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpComponent } from './sp.component';

describe('SpComponent', () => {
  let component: SpComponent;
  let fixture: ComponentFixture<SpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpComponent]
    });
    fixture = TestBed.createComponent(SpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
