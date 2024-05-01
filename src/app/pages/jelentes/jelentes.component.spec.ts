import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JelentesComponent } from './jelentes.component';

describe('JelentesComponent', () => {
  let component: JelentesComponent;
  let fixture: ComponentFixture<JelentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JelentesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JelentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
