import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParentTrv } from './parent-trv';

describe('ParentTrv', () => {
  let component: ParentTrv;
  let fixture: ComponentFixture<ParentTrv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentTrv],
    }).compileComponents();

    fixture = TestBed.createComponent(ParentTrv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
