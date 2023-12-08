import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareTagComponent } from './share-tag.component';

describe('ShareTagComponent', () => {
  let component: ShareTagComponent;
  let fixture: ComponentFixture<ShareTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareTagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShareTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
