import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sandbox3Component } from './sandbox3.component';

describe('Sandbox3Component', () => {
  let component: Sandbox3Component;
  let fixture: ComponentFixture<Sandbox3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sandbox3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sandbox3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
