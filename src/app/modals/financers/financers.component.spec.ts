import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancersComponent } from './financers.component';

describe('FinancersComponent', () => {
  let component: FinancersComponent;
  let fixture: ComponentFixture<FinancersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
