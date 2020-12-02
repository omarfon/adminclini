import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingsDatesComponent } from './pendings-dates.component';

describe('PendingsDatesComponent', () => {
  let component: PendingsDatesComponent;
  let fixture: ComponentFixture<PendingsDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingsDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingsDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
