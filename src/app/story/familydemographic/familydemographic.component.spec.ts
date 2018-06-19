import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilydemographicComponent } from './familydemographic.component';

describe('FamilydemographicComponent', () => {
  let component: FamilydemographicComponent;
  let fixture: ComponentFixture<FamilydemographicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilydemographicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilydemographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
