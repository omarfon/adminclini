import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataPatientComponent } from './data-patient.component';

describe('DataPatientComponent', () => {
  let component: DataPatientComponent;
  let fixture: ComponentFixture<DataPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
