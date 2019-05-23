import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotPrimaryResearchPage } from './plot-primary-research.page';

describe('PlotPrimaryResearchPage', () => {
  let component: PlotPrimaryResearchPage;
  let fixture: ComponentFixture<PlotPrimaryResearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotPrimaryResearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotPrimaryResearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
