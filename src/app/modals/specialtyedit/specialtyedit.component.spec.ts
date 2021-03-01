import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyeditComponent } from './specialtyedit.component';

describe('SpecialtyeditComponent', () => {
  let component: SpecialtyeditComponent;
  let fixture: ComponentFixture<SpecialtyeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
