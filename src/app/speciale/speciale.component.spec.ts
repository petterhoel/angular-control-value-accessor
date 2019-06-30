import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialeComponent } from './speciale.component';

describe('SpecialeComponent', () => {
  let component: SpecialeComponent;
  let fixture: ComponentFixture<SpecialeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
