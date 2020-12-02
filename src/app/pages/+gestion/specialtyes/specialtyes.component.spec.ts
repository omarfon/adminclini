import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialtyesComponent } from './specialtyes.component';

describe('SpecialtyesComponent', () => {
  let component: SpecialtyesComponent;
  let fixture: ComponentFixture<SpecialtyesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialtyesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialtyesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
