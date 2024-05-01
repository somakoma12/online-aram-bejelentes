import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValasztoeredmenyComponent } from './valasztoeredmeny.component';

describe('ValasztoeredmenyComponent', () => {
  let component: ValasztoeredmenyComponent;
  let fixture: ComponentFixture<ValasztoeredmenyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ValasztoeredmenyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValasztoeredmenyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
