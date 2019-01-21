import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSupEquipeComponent } from './modif-sup-equipe.component';

describe('ModifSupEquipeComponent', () => {
  let component: ModifSupEquipeComponent;
  let fixture: ComponentFixture<ModifSupEquipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSupEquipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSupEquipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
