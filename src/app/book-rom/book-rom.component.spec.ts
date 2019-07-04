import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRomComponent } from './book-rom.component';

describe('BookRomComponent', () => {
  let component: BookRomComponent;
  let fixture: ComponentFixture<BookRomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookRomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
