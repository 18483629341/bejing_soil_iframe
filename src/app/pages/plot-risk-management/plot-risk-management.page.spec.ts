import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotRiskManagementPage } from './plot-risk-management.page';

describe('PlotRiskManagementPage', () => {
  let component: PlotRiskManagementPage;
  let fixture: ComponentFixture<PlotRiskManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotRiskManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotRiskManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
