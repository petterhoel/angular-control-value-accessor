import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormControlDebuggerComponent } from './form-control-debugger.component';

describe('FormControlDebuggerComponent', () => {
  let component: FormControlDebuggerComponent;
  let fixture: ComponentFixture<FormControlDebuggerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormControlDebuggerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormControlDebuggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
