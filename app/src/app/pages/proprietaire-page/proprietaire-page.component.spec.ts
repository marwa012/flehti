import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProprietairePageComponent } from './proprietaire-page.component';

describe('ProprietairePageComponent', () => {
  let component: ProprietairePageComponent;
  let fixture: ComponentFixture<ProprietairePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProprietairePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProprietairePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
