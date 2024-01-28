import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerComponent } from './mer.component';

describe('MerComponent', () => {
  let component: MerComponent;
  let fixture: ComponentFixture<MerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
