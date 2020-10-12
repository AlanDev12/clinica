import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtiquitaComponent } from './etiquita.component';

describe('EtiquitaComponent', () => {
  let component: EtiquitaComponent;
  let fixture: ComponentFixture<EtiquitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtiquitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtiquitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
