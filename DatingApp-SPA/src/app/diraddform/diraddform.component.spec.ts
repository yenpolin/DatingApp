/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiraddformComponent } from './diraddform.component';

describe('DiraddformComponent', () => {
  let component: DiraddformComponent;
  let fixture: ComponentFixture<DiraddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiraddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiraddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
