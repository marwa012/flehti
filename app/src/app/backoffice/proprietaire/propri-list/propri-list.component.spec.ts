import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriListComponent } from './propri-list.component';

describe('PropriListComponent', () => {
  let component: PropriListComponent;
  let fixture: ComponentFixture<PropriListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
