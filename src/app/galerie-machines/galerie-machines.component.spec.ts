import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalerieMachinesComponent } from './galerie-machines.component';

describe('GalerieMachinesComponent', () => {
  let component: GalerieMachinesComponent;
  let fixture: ComponentFixture<GalerieMachinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalerieMachinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalerieMachinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
