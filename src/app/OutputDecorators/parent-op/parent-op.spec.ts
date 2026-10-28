import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentOp } from './parent-op';

describe('ParentOp', () => {
  let component: ParentOp;
  let fixture: ComponentFixture<ParentOp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentOp],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentOp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
