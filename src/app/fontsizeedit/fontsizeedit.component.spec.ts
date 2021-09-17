import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizeeditComponent } from './fontsizeedit.component';

describe('FontsizeeditComponent', () => {
  let component: FontsizeeditComponent;
  let fixture: ComponentFixture<FontsizeeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontsizeeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
