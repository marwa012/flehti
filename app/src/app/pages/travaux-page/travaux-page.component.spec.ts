import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravauxPageComponent } from './travaux-page.component';

describe('TravauxPageComponent', () => {
  let component: TravauxPageComponent;
  let fixture: ComponentFixture<TravauxPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravauxPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravauxPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
