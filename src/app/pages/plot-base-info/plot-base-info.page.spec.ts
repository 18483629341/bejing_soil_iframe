import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotBaseInfoPage } from './plot-base-info.page';

describe('PlotBaseInfoPage', () => {
  let component: PlotBaseInfoPage;
  let fixture: ComponentFixture<PlotBaseInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotBaseInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotBaseInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
