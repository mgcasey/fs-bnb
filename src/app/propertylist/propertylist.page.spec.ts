import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertylistPage } from './propertylist.page';

describe('PropertylistPage', () => {
  let component: PropertylistPage;
  let fixture: ComponentFixture<PropertylistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertylistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
