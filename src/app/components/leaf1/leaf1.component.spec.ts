import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaf1Component } from './leaf1.component';

describe('Leaf1Component', () => {
  let component: Leaf1Component;
  let fixture: ComponentFixture<Leaf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
