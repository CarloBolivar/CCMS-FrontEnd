import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePsicologoComponent } from './home-psicologo.component';

describe('HomePsicologoComponent', () => {
  let component: HomePsicologoComponent;
  let fixture: ComponentFixture<HomePsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
