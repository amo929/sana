import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthdemographicComponent } from './healthdemographic.component';

describe('HealthdemographicComponent', () => {
  let component: HealthdemographicComponent;
  let fixture: ComponentFixture<HealthdemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthdemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthdemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
