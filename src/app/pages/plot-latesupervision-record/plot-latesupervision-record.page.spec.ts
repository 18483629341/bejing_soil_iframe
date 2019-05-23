import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLatesupervisionRecordPage } from './plot-latesupervision-record.page';

describe('PlotLatesupervisionRecordPage', () => {
  let component: PlotLatesupervisionRecordPage;
  let fixture: ComponentFixture<PlotLatesupervisionRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotLatesupervisionRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotLatesupervisionRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
