import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifSupPartenaireComponent } from './modif-sup-partenaire.component';

describe('ModifSupPartenaireComponent', () => {
  let component: ModifSupPartenaireComponent;
  let fixture: ComponentFixture<ModifSupPartenaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifSupPartenaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifSupPartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
