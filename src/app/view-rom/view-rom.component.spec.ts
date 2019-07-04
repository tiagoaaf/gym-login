import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRomComponent } from './view-rom.component';

describe('ViewRomComponent', () => {
  let component: ViewRomComponent;
  let fixture: ComponentFixture<ViewRomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
