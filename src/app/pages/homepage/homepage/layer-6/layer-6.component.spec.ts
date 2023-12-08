import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer6Component } from './layer-6.component';

describe('Layer6Component', () => {
  let component: Layer6Component;
  let fixture: ComponentFixture<Layer6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layer6Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layer6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
