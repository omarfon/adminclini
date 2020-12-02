import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDatesComponent } from './total-dates.component';

describe('TotalDatesComponent', () => {
  let component: TotalDatesComponent;
  let fixture: ComponentFixture<TotalDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
