import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotDetailResearchPage } from './plot-detail-research.page';

describe('PlotDetailResearchPage', () => {
  let component: PlotDetailResearchPage;
  let fixture: ComponentFixture<PlotDetailResearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotDetailResearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotDetailResearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
