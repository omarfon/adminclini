import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHoursComponent } from './create-hours.component';

describe('CreateHoursComponent', () => {
  let component: CreateHoursComponent;
  let fixture: ComponentFixture<CreateHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
