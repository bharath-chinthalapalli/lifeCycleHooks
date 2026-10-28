import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildVc } from './child-vc';

describe('ChildVc', () => {
  let component: ChildVc;
  let fixture: ComponentFixture<ChildVc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildVc],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildVc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
