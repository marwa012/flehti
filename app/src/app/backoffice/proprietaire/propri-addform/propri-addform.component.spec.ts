import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriAddformComponent } from './propri-addform.component';

describe('PropriAddformComponent', () => {
  let component: PropriAddformComponent;
  let fixture: ComponentFixture<PropriAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
