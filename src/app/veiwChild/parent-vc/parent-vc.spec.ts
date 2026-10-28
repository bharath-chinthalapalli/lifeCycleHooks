import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentVc } from './parent-vc';

describe('ParentVc', () => {
  let component: ParentVc;
  let fixture: ComponentFixture<ParentVc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentVc],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentVc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
