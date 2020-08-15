import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcellePageComponent } from './parcelle-page.component';

describe('ParcellePageComponent', () => {
  let component: ParcellePageComponent;
  let fixture: ComponentFixture<ParcellePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcellePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcellePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
