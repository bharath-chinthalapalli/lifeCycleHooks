import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildOp } from './child-op';

describe('ChildOp', () => {
  let component: ChildOp;
  let fixture: ComponentFixture<ChildOp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildOp],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildOp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
