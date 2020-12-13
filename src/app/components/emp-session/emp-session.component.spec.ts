import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpSessionComponent } from './emp-session.component';

describe('EmpSessionComponent', () => {
  let component: EmpSessionComponent;
  let fixture: ComponentFixture<EmpSessionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpSessionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
