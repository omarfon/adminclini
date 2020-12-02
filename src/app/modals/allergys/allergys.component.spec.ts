import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergysComponent } from './allergys.component';

describe('AllergysComponent', () => {
  let component: AllergysComponent;
  let fixture: ComponentFixture<AllergysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
