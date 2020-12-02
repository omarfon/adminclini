import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockHoursComponent } from './block-hours.component';

describe('BlockHoursComponent', () => {
  let component: BlockHoursComponent;
  let fixture: ComponentFixture<BlockHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
