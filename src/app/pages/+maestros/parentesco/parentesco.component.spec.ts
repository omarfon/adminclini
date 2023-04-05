import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentescoComponent } from './parentesco.component';

describe('ParentescoComponent', () => {
  let component: ParentescoComponent;
  let fixture: ComponentFixture<ParentescoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentescoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentescoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
