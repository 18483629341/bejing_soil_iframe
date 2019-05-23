import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotEffectEvaluationPage } from './plot-effect-evaluation.page';

describe('PlotEffectEvaluationPage', () => {
  let component: PlotEffectEvaluationPage;
  let fixture: ComponentFixture<PlotEffectEvaluationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotEffectEvaluationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotEffectEvaluationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
