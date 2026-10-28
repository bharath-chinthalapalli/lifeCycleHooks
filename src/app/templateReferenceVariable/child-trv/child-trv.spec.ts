import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChildTrv } from './child-trv';

describe('ChildTrv', () => {
  let component: ChildTrv;
  let fixture: ComponentFixture<ChildTrv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildTrv],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildTrv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
