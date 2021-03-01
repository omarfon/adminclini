import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvisionsDeleteComponent } from './provisions-delete.component';

describe('ProvisionsDeleteComponent', () => {
  let component: ProvisionsDeleteComponent;
  let fixture: ComponentFixture<ProvisionsDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvisionsDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvisionsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
