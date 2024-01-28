import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BnmComponent } from './bnm.component';

describe('BnmComponent', () => {
  let component: BnmComponent;
  let fixture: ComponentFixture<BnmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BnmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BnmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
