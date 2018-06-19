import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanoptionsComponent } from './planoptions.component';

describe('PlanoptionsComponent', () => {
  let component: PlanoptionsComponent;
  let fixture: ComponentFixture<PlanoptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanoptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanoptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
