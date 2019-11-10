import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwigComponent } from './twig.component';

describe('TwigComponent', () => {
  let component: TwigComponent;
  let fixture: ComponentFixture<TwigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
