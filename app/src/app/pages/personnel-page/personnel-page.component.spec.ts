import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnelPageComponent } from './personnel-page.component';

describe('PersonnelPageComponent', () => {
  let component: PersonnelPageComponent;
  let fixture: ComponentFixture<PersonnelPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnelPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
