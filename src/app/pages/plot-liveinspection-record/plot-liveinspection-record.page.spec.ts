import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotLiveinspectionRecordPage } from './plot-liveinspection-record.page';

describe('PlotLiveinspectionRecordPage', () => {
  let component: PlotLiveinspectionRecordPage;
  let fixture: ComponentFixture<PlotLiveinspectionRecordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotLiveinspectionRecordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotLiveinspectionRecordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
