import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HnComponent } from './hn.component';

describe('HnComponent', () => {
  let component: HnComponent;
  let fixture: ComponentFixture<HnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
