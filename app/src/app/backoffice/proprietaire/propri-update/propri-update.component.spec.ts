import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriUpdateComponent } from './propri-update.component';

describe('PropriUpdateComponent', () => {
  let component: PropriUpdateComponent;
  let fixture: ComponentFixture<PropriUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropriUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropriUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
