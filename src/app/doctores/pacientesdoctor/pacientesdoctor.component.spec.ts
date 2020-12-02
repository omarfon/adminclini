import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesdoctorComponent } from './pacientesdoctor.component';

describe('PacientesdoctorComponent', () => {
  let component: PacientesdoctorComponent;
  let fixture: ComponentFixture<PacientesdoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesdoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesdoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
