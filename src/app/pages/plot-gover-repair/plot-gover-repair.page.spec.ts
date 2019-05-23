import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotGoverRepairPage } from './plot-gover-repair.page';

describe('PlotGoverRepairPage', () => {
  let component: PlotGoverRepairPage;
  let fixture: ComponentFixture<PlotGoverRepairPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotGoverRepairPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotGoverRepairPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
