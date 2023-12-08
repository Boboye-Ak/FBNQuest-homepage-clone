import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layer5Component } from './layer-5.component';

describe('Layer5Component', () => {
  let component: Layer5Component;
  let fixture: ComponentFixture<Layer5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layer5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layer5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
