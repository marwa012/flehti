import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementPageComponent } from './equipement-page.component';

describe('EquipementPageComponent', () => {
  let component: EquipementPageComponent;
  let fixture: ComponentFixture<EquipementPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipementPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
