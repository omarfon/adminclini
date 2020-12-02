import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctoresallComponent } from './doctoresall.component';

describe('DoctoresallComponent', () => {
  let component: DoctoresallComponent;
  let fixture: ComponentFixture<DoctoresallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctoresallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctoresallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
