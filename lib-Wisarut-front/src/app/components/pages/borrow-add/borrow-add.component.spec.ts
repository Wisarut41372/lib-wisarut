import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowAddComponent } from './borrow-add.component';

describe('BorrowAddComponent', () => {
  let component: BorrowAddComponent;
  let fixture: ComponentFixture<BorrowAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
