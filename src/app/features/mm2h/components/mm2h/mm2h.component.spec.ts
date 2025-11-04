import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mm2hComponent } from './mm2h.component';

describe('Mm2hComponent', () => {
  let component: Mm2hComponent;
  let fixture: ComponentFixture<Mm2hComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mm2hComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mm2hComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
