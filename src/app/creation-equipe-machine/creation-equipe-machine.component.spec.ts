import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationEquipeMachineComponent } from './creation-equipe-machine.component';

describe('CreationEquipeMachineComponent', () => {
  let component: CreationEquipeMachineComponent;
  let fixture: ComponentFixture<CreationEquipeMachineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationEquipeMachineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationEquipeMachineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});




