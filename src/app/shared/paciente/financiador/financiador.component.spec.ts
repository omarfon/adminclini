import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanciadorComponent } from './financiador.component';

describe('FinanciadorComponent', () => {
  let component: FinanciadorComponent;
  let fixture: ComponentFixture<FinanciadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanciadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
