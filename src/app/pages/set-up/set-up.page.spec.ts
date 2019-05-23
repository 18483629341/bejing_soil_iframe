import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetUpPage } from './set-up.page';

describe('SetUpPage', () => {
  let component: SetUpPage;
  let fixture: ComponentFixture<SetUpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetUpPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetUpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
