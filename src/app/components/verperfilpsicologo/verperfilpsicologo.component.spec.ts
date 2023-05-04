import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerperfilpsicologoComponent } from './verperfilpsicologo.component';

describe('VerperfilpsicologoComponent', () => {
  let component: VerperfilpsicologoComponent;
  let fixture: ComponentFixture<VerperfilpsicologoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerperfilpsicologoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerperfilpsicologoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
