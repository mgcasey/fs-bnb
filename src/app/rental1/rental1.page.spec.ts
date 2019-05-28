import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Rental1Page } from './rental1.page';

describe('Rental1Page', () => {
  let component: Rental1Page;
  let fixture: ComponentFixture<Rental1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Rental1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Rental1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
