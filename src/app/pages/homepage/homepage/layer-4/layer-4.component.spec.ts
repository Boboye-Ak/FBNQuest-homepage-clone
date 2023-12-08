import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer4Component } from './layer-4.component';

describe('Layer4Component', () => {
  let component: Layer4Component;
  let fixture: ComponentFixture<Layer4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layer4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layer4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
