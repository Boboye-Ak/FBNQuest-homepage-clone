import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverMoreCardComponent } from './discover-more-card.component';

describe('DiscoverMoreCardComponent', () => {
  let component: DiscoverMoreCardComponent;
  let fixture: ComponentFixture<DiscoverMoreCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverMoreCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverMoreCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
