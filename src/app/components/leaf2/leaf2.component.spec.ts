import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaf2Component } from './leaf2.component';

describe('Leaf2Component', () => {
  let component: Leaf2Component;
  let fixture: ComponentFixture<Leaf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
