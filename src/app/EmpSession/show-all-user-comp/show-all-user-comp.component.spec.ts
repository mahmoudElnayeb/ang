import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllUserCompComponent } from './show-all-user-comp.component';

describe('ShowAllUserCompComponent', () => {
  let component: ShowAllUserCompComponent;
  let fixture: ComponentFixture<ShowAllUserCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllUserCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllUserCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
