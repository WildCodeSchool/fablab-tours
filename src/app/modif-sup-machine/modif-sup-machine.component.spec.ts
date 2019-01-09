import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSupMachineComponent } from './modif-sup-machine.component';

describe('ModifSupMachineComponent', () => {
  let component: ModifSupMachineComponent;
  let fixture: ComponentFixture<ModifSupMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSupMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSupMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
