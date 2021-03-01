import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtydeleteComponent } from './specialtydelete.component';

describe('SpecialtydeleteComponent', () => {
  let component: SpecialtydeleteComponent;
  let fixture: ComponentFixture<SpecialtydeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtydeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
