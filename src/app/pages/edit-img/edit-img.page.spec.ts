import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditImgPage } from './edit-img.page';

describe('EditImgPage', () => {
  let component: EditImgPage;
  let fixture: ComponentFixture<EditImgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditImgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditImgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
